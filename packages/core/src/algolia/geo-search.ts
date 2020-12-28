import {AlgoliaClient} from '..'
import {getIndexName, getLocalizedAttributes} from './utils'
import {HsoConfig} from '../configs'
import {SearchType} from '../search'
import {OptionalSearchParameters, Polygon, Location} from '../types'

import {generateSortByPriceFilters, generatePriceFilter} from '../pricing'

const DEFAULT_RADIUS = 20000
const DEFAULT_PRECISION = 5000

interface Options {
  languages: string[]
  pageSize: number
  priceBucketWidth: number
  exchangeRate: number
  hsoConfig: HsoConfig
}

export interface GeoSearchParameters extends OptionalSearchParameters {
  geolocation?: Location
}

export type Hit = {
  objectID: string
  hotelName: Record<string, string>
  imageURIs: string[]
}

export type GeoSearchResults = {
  length: number
  nbHits: number
  offset: number
  hits: Hit[]
}

export type PlaceSearchResponse = {
  results: GeoSearchResults
}

type OptionalFiltes = string[]

type BuildOptionalFiltersParameters = {
  sortField?: string
  checkIn: string
  checkOut: string
  priceMin?: number
  priceMax?: number
  priceBucketWidth?: number
  exchangeRate: number
}

type AlgoliaGeoSearchRequest = Record<string, unknown>

type NumericFiltersParameters = {
  guestRating: string[]
}

type FacetFiltersParameters = {
  facilities: string[]
  starRating: string[]
  propertyTypeId: string[]
  themeIds: string[]
}

// TODO: move to const
const HOSTEL_PROPERTY_TYPE_ID = '5'

const buildFacetFilters = (parameters: FacetFiltersParameters): string[][] => {
  const {facilities, starRating, propertyTypeId, themeIds} = parameters

  const propertyTypeIdFilter = propertyTypeId?.map(
    (item) => `propertyTypeId:${item}`
  )

  const facilitiesFilter = facilities?.map((item) => `facilities:${item}`)

  const themeIdsFilter = themeIds?.map((item) => `themeIds:${item}`)

  const starRatingFilter =
    starRating &&
    [].concat(starRating).reduce((out, item) => {
      return out.concat([
        `starRating:${Number(item)}`,
        `starRating:${Number(item) + 0.5}`
      ])
    }, [])

  const response = []

  if (facilitiesFilter?.length > 0) response.push(...facilitiesFilter)
  if (starRatingFilter?.length > 0) response.push(starRatingFilter)
  if (propertyTypeIdFilter?.length > 0) response.push(propertyTypeIdFilter)
  if (themeIdsFilter?.length > 0) response.push(...themeIdsFilter)

  return response
}

const buildNumericFilters = ({
  guestRating
}: NumericFiltersParameters): string[] => {
  if (guestRating?.length) {
    return [`guestRating.overall>=${guestRating[0]}`]
  }

  return []
}

const buildFilters = (noHostels?: string): string => {
  let filters = 'isDeleted = 0'

  if (noHostels) {
    filters = `${filters} AND propertyTypeId != ${HOSTEL_PROPERTY_TYPE_ID}`
  }

  return filters
}

const buildOptionalFilters = (
  hsoConfig: HsoConfig,
  parameters: BuildOptionalFiltersParameters
): OptionalFiltes => {
  const {
    priceMin,
    priceMax,
    checkIn,
    checkOut,
    sortField,
    priceBucketWidth,
    exchangeRate
  } = parameters
  let optionalFilters = [...hsoConfig]

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

const getFacets = (): string[] => [
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
    languages,
    pageSize,
    priceBucketWidth,
    exchangeRate,
    hsoConfig
  } = options

  const {
    checkIn,
    checkOut,
    sortField,
    offset = 0,
    length = pageSize,
    boundingBox,
    polygon,
    geolocation,
    filters = {}
  } = parameters

  const {
    facilities,
    starRating,
    guestRating,
    propertyTypes,
    themes,
    priceMin,
    priceMax,
    noHostels
  } = filters

  const requestFilters = buildFilters(noHostels)

  const facetFilters = buildFacetFilters({
    facilities,
    starRating,
    propertyTypeId: propertyTypes,
    themeIds: themes
  })

  const numericFilters = buildNumericFilters({
    guestRating
  })

  const optionalFilters = buildOptionalFilters(hsoConfig, {
    checkIn,
    checkOut,
    sortField,
    priceMin,
    priceMax,
    priceBucketWidth,
    exchangeRate
  })

  const attributesToRetrieve = getHotelAttributesToRetrieve(languages)

  const facets = getFacets()

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
