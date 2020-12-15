import {SapiClientOptions, AlgoliaClient} from '..'
import {getIndexName, getLocalizedAttributes} from './utils'
import {HsoConfig} from '../configs'
import {SearchType} from '../search'
import {Polygon, Location} from './types'

import {generateSortByPriceFilters, generatePriceFilter} from '../pricing'

const DEFAULT_RADIUS = 20000
const DEFAULT_PRECISION = 5000

export type SearchParameters = {
  placeId?: string
  hotelId?: string
  length?: number
  offset?: number
  sortField?: string

  searchType?: SearchType
  boundingBox?: number[]
  filters: {
    themes?: string | string[]
    facilities?: string | string[]
    starRating?: string | string[]
    propertyTypes?: string | string[]
    guestRating?: string | string[]
    noHostels?: string
  }
}

export type StaticSearchParameters = SearchParameters & {
  boundingBox?: number[]
  polygon?: Polygon
  geolocation?: Location
}

export type Hit = {
  objectID: string
  hotelName: Record<string, string>
  imageURIs: string[]
}

export type PlaceSearchResults = {
  length: number
  nbHits: number
  offset: number
  hits: Hit[]
}

export type PlaceSearchResponse = {
  results: PlaceSearchResults
}

export type PlaceSearch = (
  parameters: SearchParameters,
  HsoConfig: HsoConfig
) => Promise<PlaceSearchResponse>

type OptionalFiltes = string[]

type BuildOptionalFiltersParameters = {
  sortField?: string
}

type AlgoliaRequest = Record<string, unknown>

const buildFacetFilters = (parameters) => {
  const {facilities, starRating, propertyTypeId, themeIds} = parameters

  const propertyTypeIdFilter = propertyTypeId?.length && [
    `propertyTypeId:${propertyTypeId}`
  ]

  const facilitiesFilter =
    facilities && facilities.map((item) => `facilities:${item}`)

  const themeIdsFilter = themeIds && themeIds.map((item) => `themeIds:${item}`)

  const starRatingFilter =
    starRating &&
    [].concat(starRating).reduce((out, item) => {
      return out.concat([
        `starRating:${Number(item)}`,
        `starRating:${Number(item) + 0.5}`
      ])
    }, [])

  const res = []

  if (facilitiesFilter?.length) res.push(...facilitiesFilter)
  if (starRatingFilter?.length) res.push(starRatingFilter)
  if (propertyTypeIdFilter?.length) res.push(propertyTypeIdFilter)
  if (themeIdsFilter?.length) res.push(...themeIdsFilter)

  return res
}

const buildNumericFilters = (parameters) => {
  const {guestRating} = parameters

  if (guestRating?.length) {
    return [`guestRating.overall>=${guestRating}`]
  }
}

const buildFacets = (): string[] => {
  return [
    'facilities',
    'propertyTypeId',
    'starRating',
    'themeIds',
    'pricing.medianRateBkt',
    'pricing.medianRateMoFrBkt',
    'pricing.medianRateSaSuBkt',
    'pricing.minRateBkt'
  ]
}

const buildFilters = (noHostels?: string): string => {
  // TODO: move to const
  const HOSTEL_PROPERTY_TYPE_ID = '5'

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
  const {priceMin, priceMax, checkIn, checkOut, sortField} = parameters
  let optionalFilters = [...hsoConfig]

  if (sortField === 'price') {
    optionalFilters = [...optionalFilters, ...generateSortByPriceFilters()]
  }

  if (priceMin || priceMax) {
    const priceFilter = generatePriceFilter({
      priceMin,
      priceMax,
      priceBucketWidth: 12, // TODO: get real priceBucketWidth
      exchangeRate: 1, // TODO: get real rate
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

export const staticSearch = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions,
  hsoConfig: HsoConfig
) => async (
  parameters: StaticSearchParameters
): Promise<PlaceSearchResults> => {
  const index = algoliaClient.initIndex(getIndexName('hotel'))

  const {language, fallBackLanguages, pageSize} = options
  const languages = [language, ...fallBackLanguages]

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

  const facetFilters = buildFacetFilters({
    facilities,
    starRating,
    propertyTypeId: propertyTypes,
    themeIds: themes
  })

  const numericFilters = buildNumericFilters({
    guestRating
  })

  const facets = buildFacets()

  const algoliaFilters = buildFilters(noHostels)

  const optionalFilters = buildOptionalFilters(hsoConfig, {
    sortField,
    priceMin,
    priceMax,
    priceBucketWidth: 12, // TODO: get real priceBucketWidth
    exchangeRate: 1, // TODO: get real rate
    checkIn,
    checkOut
  })

  const request: AlgoliaRequest = {
    length,
    offset,
    facets,
    filters: algoliaFilters,
    numericFilters,
    facetFilters,
    attributesToRetrieve: getHotelAttributesToRetrieve(languages),
    attributesToHighlight: null,
    getRankingInfo: false,
    optionalFilters
  }

  if (boundingBox) {
    request.insideBoundingBox = [boundingBox]
  } else if (polygon) {
    request.insidePolygon = polygon
  } else if (geolocation) {
    request.aroundLatLng = `${geolocation.lat}, ${geolocation.lon}`
    request.aroundRadius = geolocation.radius ?? DEFAULT_RADIUS
    request.aroundPrecision = geolocation.precision ?? DEFAULT_PRECISION
  }

  return index.search('', request)
}
