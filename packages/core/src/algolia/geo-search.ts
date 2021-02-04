import {AlgoliaClient} from '..'
import {getTranslatedAttributes, hitToHotel, getTagsFilter} from './utils'

import {HsoFilter, IndexNameGetter} from '../configs'
import {generateSortByPriceFilter, generatePriceFilter} from './pricing'

import {
  OptionalSearchParameters,
  Hotel,
  Hit,
  Location,
  BoundingBox,
  Polygon
} from '../types'

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

type OptionalFilters = string | string[] | Array<string[] | string>

type FacetFilters = string | string[] | string[][]

type NumericFilters = string | string[] | string[][]

export type Facets = Record<string, Record<string, number>>

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
  numericFilters: NumericFilters
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

function buildFacetFilters({
  anchorHotelId,
  checkIn,
  checkOut,
  filters = {}
}: GeoSearchParameters) {
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

  return facetFilters as FacetFilters
}

function buildNumericFilters({guestRating}: NumericFiltersParameters) {
  if (guestRating?.length) {
    return [`guestRating.overall>=${guestRating[0]}`]
  }

  return []
}

function buildFilters({noHostels}: FiltersParameters) {
  let filters = 'isDeleted = 0'

  if (noHostels) {
    filters = `${filters} AND propertyTypeId != ${HOSTEL_PROPERTY_TYPE_ID}`
  }

  return filters
}

function buildOptionalFilters(
  parameters: BuildOptionalFiltersParameters,
  options: Options
): OptionalFilters {
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

function getHotelAttributesToRetrieve(languages: string[]) {
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

export function geoSearch(
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  options: Options
) {
  return async (parameters: GeoSearchParameters) => {
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

    const response = await search<Hit>([
      {
        indexName: getIndexName('hotel'),
        params: searchRequest
      }
    ])

    const results = response.results[0]
    const hotelIds = []
    const hotelEntities: Record<string, Hotel> = {}

    for (const hit of results.hits) {
      hotelEntities[hit.objectID] = hitToHotel(hit, options.languages)
      hotelIds.push(hit.objectID)
    }

    return {
      hotelIds,
      hotelEntities,
      resultsCount: results.length ?? 0,
      resultsCountTotal: results.nbHits ?? 0,
      offset: results.offset ?? 0,
      facets: results.facets ?? {}
    }
  }
}
