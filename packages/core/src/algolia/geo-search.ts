import {AlgoliaClient} from '..'
import {
  geoResponseToResults,
  getTranslatedAttributes,
  hitToHotel,
  getTagsFilter
} from './utils'

import {HsoFilter, IndexNameGetter} from '../configs'

import {
  OptionalSearchParameters,
  Hotel,
  Hit,
  Location,
  BoundingBox,
  Polygon
} from '../types'

import {generateSortByPriceFilter, generatePriceFilter} from './pricing'

const HOSTEL_PROPERTY_TYPE_ID = '5'
const DEFAULT_RADIUS = 20000
const DEFAULT_PRECISION = 5000

interface Options {
  languages: string[]
  requestSize: number
  priceBucketWidth: number
  priceBucketsCount: number
  exchangeRate: number
  hsoFilter: HsoFilter
}

type OptionalFilters = string[]

type FacetFilters = Array<string | string[]>

type Facets = Record<string, number>

interface BuildOptionalFiltersParameters {
  sortField?: string
  checkIn?: string
  checkOut?: string
  filters?: {
    priceMin?: number
    priceMax?: number
  }
}

interface AlgoliaGeoSearchRequest {
  length: number
  offset: number
  facets: string[]
  filters: string
  numericFilters: string[]
  facetFilters: FacetFilters
  attributesToRetrieve: string[]
  attributesToHighlight: string[]
  getRankingInfo: boolean
  optionalFilters: OptionalFilters
  insideBoundingBox?: BoundingBox[]
  insidePolygon?: Polygon
  aroundLatLng?: string
  aroundRadius?: number
  aroundPrecision?: number
}

interface NumericFiltersParameters {
  guestRating?: number[]
}

interface FiltersParameters {
  noHostels?: boolean
}

export interface GeoSearchParameters extends OptionalSearchParameters {
  geolocation?: Location
  anchorHotelId?: string
}

export interface GeoSearchResults {
  facets: Record<string, Facets>
  length: number
  nbHits: number
  offset: number
  hits: Hotel[]
}

const buildFacetFilters = ({
  anchorHotelId,
  checkIn,
  checkOut,
  filters = {}
}: GeoSearchParameters): Array<string | string[]> => {
  const {facilities, starRating, propertyTypeId, themeIds} = filters

  const facetFilters = []

  if (propertyTypeId?.length) {
    const propertyTypeIdFilter = propertyTypeId.map(
      (item) => `propertyTypeId:${item}`
    )
    facetFilters.push(propertyTypeIdFilter)
  }

  if (facilities?.length) {
    const facilitiesFilter = facilities.map((item) => `facilities:${item}`)
    facetFilters.push(...facilitiesFilter)
  }

  if (themeIds?.length) {
    const themeIdsFilter = themeIds.map((item) => `themeIds:${item}`)
    facetFilters.push(...themeIdsFilter)
  }

  if (starRating?.length) {
    const starRatingFilter: string[] = []

    starRating.forEach((rating) => {
      starRatingFilter.push(`starRating:${Number(rating)}`)
      starRatingFilter.push(`starRating:${Number(rating) + 0.5}`)
    })

    facetFilters.push(starRatingFilter)
  }

  if (anchorHotelId) {
    facetFilters.push(`objectID:-${anchorHotelId}`)
  }

  if (checkIn && checkOut) {
    facetFilters.push(getTagsFilter(checkIn, checkOut))
  }

  return facetFilters
}

const buildNumericFilters = ({
  guestRating
}: NumericFiltersParameters): string[] => {
  if (guestRating?.length) {
    return [`guestRating.overall>=${guestRating[0]}`]
  }

  return []
}

const buildFilters = ({noHostels}: FiltersParameters): string => {
  let filters = 'isDeleted = 0'

  if (noHostels) {
    filters = `${filters} AND propertyTypeId != ${HOSTEL_PROPERTY_TYPE_ID}`
  }

  return filters
}

const buildOptionalFilters = (
  parameters: BuildOptionalFiltersParameters,
  options: Options
): OptionalFilters => {
  const {filters = {}, checkIn, checkOut, sortField} = parameters
  const {priceMin, priceMax} = filters
  const {hsoFilter, priceBucketWidth, priceBucketsCount, exchangeRate} = options

  let optionalFilters = [...hsoFilter]

  if (sortField === 'price') {
    const sortByPriceFilters = generateSortByPriceFilter(priceBucketsCount)

    optionalFilters = [...optionalFilters, ...sortByPriceFilters]
  }

  if (priceMin || priceMax) {
    const priceFilter = generatePriceFilter({
      priceMin,
      priceMax,
      checkIn,
      checkOut,
      priceBucketsCount,
      priceBucketWidth: priceBucketWidth * exchangeRate
    })

    optionalFilters = [...optionalFilters, ...priceFilter]
  }

  return optionalFilters
}

const getHotelAttributesToRetrieve = (languages: string[]): string[] => {
  const translatedAttributes = getTranslatedAttributes(languages, [
    'hotelName',
    'placeADName',
    'placeDN',
    'address'
  ])

  return [
    '_geoloc',
    'checkInTime',
    'checkOutTime',
    'facilities',
    'guestRating',
    'guestType',
    'imageURIs',
    'propertyTypeId',
    'reviewCount',
    'starRating',
    'themeIds',
    'objectID',
    'lastBooked',
    'isDeleted',
    'pricing',
    'sentiments',
    ...translatedAttributes
  ]
}

const facets = [
  'facilities',
  'propertyTypeId',
  'starRating',
  'themeIds',
  'pricing.medianRateBkt',
  'pricing.medianRateMoFrBkt',
  'pricing.medianRateSaSuBkt',
  'pricing.minRateBkt',
  'tags'
]

export const geoSearch = (
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  options: Options
) => async (parameters: GeoSearchParameters) => {
  const {
    boundingBox,
    polygon,
    geolocation,
    length = options.requestSize,
    offset = 0,
    filters = {}
  } = parameters

  const searchRequest: AlgoliaGeoSearchRequest = {
    length,
    offset,
    facets,
    attributesToHighlight: [],
    getRankingInfo: false,
    filters: buildFilters(filters),
    numericFilters: buildNumericFilters(filters),
    facetFilters: buildFacetFilters(parameters),
    attributesToRetrieve: getHotelAttributesToRetrieve(options.languages),
    optionalFilters: buildOptionalFilters(parameters, options)
  }

  if (boundingBox) {
    searchRequest.insideBoundingBox = [boundingBox]
  } else if (polygon) {
    searchRequest.insidePolygon = polygon
  } else if (geolocation) {
    searchRequest.aroundLatLng = `${geolocation.lat}, ${geolocation.lon}`
    searchRequest.aroundRadius = geolocation.radius ?? DEFAULT_RADIUS
    searchRequest.aroundPrecision = geolocation.precision ?? DEFAULT_PRECISION
  }

  const requests = [
    {
      indexName: getIndexName('hotel'),
      params: searchRequest
    }
  ]

  const response = await search(requests)
  const results = response.results?.[0]

  return geoResponseToResults({
    ...results,
    hits: results?.hits?.map((hit: Hit) => hitToHotel(hit, options.languages))
  })
}
