import {AlgoliaClient} from '..'
import {getIndexName, getLocalizedAttributes} from './utils'
import {HsoFilter} from '../configs'
import {
  OptionalSearchParameters,
  Hit,
  Location,
  BoundingBox,
  Polygon
} from '../types'

import {generateSortByPriceFilters, generatePriceFilter} from '../pricing'

// TODO: move to const
const HOSTEL_PROPERTY_TYPE_ID = '5'
const DEFAULT_RADIUS = 20000
const DEFAULT_PRECISION = 5000

interface Options {
  languages: string[]
  pageSize: number
  priceBucketWidth: number
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

interface FacetFiltersParameters {
  facilities?: number[]
  starRating?: number[]
  propertyTypeId?: number[]
  themeIds?: number[]
}

export interface GeoSearchParameters extends OptionalSearchParameters {
  geolocation?: Location
}

export interface GeoSearchResults {
  facets: Facets
  length: number
  nbHits: number
  offset: number
  hits: Hit[]
}

const buildFacetFilters = (
  filters: FacetFiltersParameters
): Array<string | string[]> => {
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

const buildFilters = ({noHostels}: {noHostels?: boolean} = {}): string => {
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
  const {hsoFilter, priceBucketWidth, exchangeRate} = options

  let optionalFilters = [...hsoFilter]

  if (sortField === 'price') {
    const sortByPriceFilters = generateSortByPriceFilters()

    optionalFilters = [...optionalFilters, ...sortByPriceFilters]
  }

  if (priceMin || priceMax) {
    const priceFilter = generatePriceFilter({
      priceMin,
      priceMax,
      priceBucketWidth,
      exchangeRate,
      checkIn,
      checkOut
    })

    optionalFilters = [...optionalFilters, ...priceFilter]
  }

  return optionalFilters
}

const getHotelAttributesToRetrieve = (languages: string[]): string[] => {
  const localizedAttributes = getLocalizedAttributes(languages, [
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
    'tags',
    ...localizedAttributes
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
  'pricing.minRateBkt'
]

export const geoSearch = (
  algoliaClient: AlgoliaClient,
  options: Options
) => async (parameters: GeoSearchParameters): Promise<GeoSearchResults> => {
  const {
    boundingBox,
    polygon,
    geolocation,
    length = options.pageSize,
    offset = 0,
    filters = {}
  } = parameters

  const requestFilters = buildFilters(filters)
  const facetFilters = buildFacetFilters(filters)
  const numericFilters = buildNumericFilters(filters)
  const optionalFilters = buildOptionalFilters(parameters, options)
  const attributesToRetrieve = getHotelAttributesToRetrieve(options.languages)

  const searchRequest: AlgoliaGeoSearchRequest = {
    length,
    offset,
    facets,
    filters: requestFilters,
    numericFilters,
    facetFilters,
    attributesToRetrieve,
    attributesToHighlight: [],
    getRankingInfo: false,
    optionalFilters
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

  const response = await algoliaClient.search(requests)

  return response.results[0]
}
