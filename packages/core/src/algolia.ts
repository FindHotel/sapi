import {SapiClientOptions, AlgoliaClient} from '.'
import {HsoConfig} from './configs'
import {SearchType} from './search'

const DEFAULT_RADIUS = 20000
const DEFAULT_PRECISION = 5000

type IndexType = 'autocomplete' | 'hotel' | 'hotelranking' | 'lov' | 'currency'

type Location = {
  lat: number
  lon: number
  precision?: number
  radius?: number
}

type Polygon = number[]

export type Anchor = {
  anchor: any
  anchorHit: Hit
}

export type SearchParameters = {
  placeId?: string
  hotelId?: string
  length?: number
  offset?: number
  features?: string | string[]
  starRatings?: string | string[]
  propertyTypes?: string | string[]
  guestRatings?: string | string[]
  sortField?: string
  noHostels?: string
  searchType?: SearchType
  boundingBox?: number[]
}

export type StaticSearchParameters = SearchParameters & {
  boundingBox?: number[]
  polygon?: Polygon[]
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

export const getIndexName = (index: IndexType): string => {
  const indexNames = {
    autocomplete: 'prod_autocomplete_v2',
    hotel: 'prod_hotel_v3',
    hotelranking: 'prod_hotelranking_v1_os000002_hso_availability',
    lov: 'prod_lov_v2',
    currency: 'prod_curr_v1'
  }

  const indexName = indexNames[index]

  if (!indexName) throw new TypeError(`Unknown index "${index}"`)

  return indexName
}

const STEP = 1
const PRICE_SORT_WEIGHT = 100
const PRICE_BUCKETS_COUNT = 31

export const generateSortByPriceFilters = (
  step: number = STEP,
  bucketsCount: number = PRICE_BUCKETS_COUNT
): string[] => {
  const filters = []

  for (let i = bucketsCount; i > 0; --i) {
    const score = (bucketsCount + 1 - i) * step * PRICE_SORT_WEIGHT
    filters.push(`pricing.minRateBkt:${i * step}<score=${score}>`)
  }

  return filters
}

const buildFacetFilters = (parameters) => {
  const {facilities, starRating, propertyTypeId} = parameters

  const propertyTypeIdFilter = propertyTypeId && [
    `propertyTypeId:${propertyTypeId}`
  ]

  const facilitiesFilter =
    facilities && facilities.map((item) => `facilities:${item}`)

  const starRatingFilter =
    starRating &&
    [].concat(starRating).reduce((out, item) => {
      return out.concat([
        `starRating:${Number(item)}`,
        `starRating:${Number(item) + 0.5}`
      ])
    }, [])

  const res = []

  if (facilitiesFilter) res.push(...facilitiesFilter)
  if (starRatingFilter) res.push(starRatingFilter)
  if (propertyTypeIdFilter) res.push(propertyTypeIdFilter)

  return res
}

const buildNumericFilters = (parameters) => {
  const {guestRating} = parameters

  if (guestRating) {
    return [`guestRating.overall>=${guestRating}`]
  }
}

const buildFacets = () => {
  return ['*']
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
  return parameters.sortField === 'price'
    ? [...hsoConfig, ...generateSortByPriceFilters()]
    : hsoConfig
}

const buildHotelAttributesToRetrieve = (language = 'en'): string[] => {
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
    `hotelName.${language}`,
    `placeADName.${language}`,
    `placeDN.${language}`,
    `address.${language}`
  ]
}

const buildAutocompleteAttributesToRetrieve = (language = 'en'): string[] => {
  return [
    'objectType',
    'placeType',
    'placeCategory',
    'objectID',
    '_geoloc',
    'priceBucketWidth',
    'polygon',
    `placeName.${language}`,
    `placeADN.${language}`,
    `placeDN.${language}`,
    `hotelName.${language}`
  ]
}

export const getAnchor = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions
) => async (parameters: {
  placeId?: string
  hotelId?: string
}): Promise<Anchor> => {
  const {language} = options
  const {placeId, hotelId} = parameters
  const autocompleteFacetFilters = []

  if (hotelId) {
    autocompleteFacetFilters.push(`objectID:hotel:${hotelId}`)
  } else if (placeId) {
    autocompleteFacetFilters.push(`objectID:place:${placeId}`)
  }

  const requests = [
    {
      indexName: getIndexName('autocomplete'),
      params: {
        facetFilters: [autocompleteFacetFilters],
        attributesToRetrieve: buildAutocompleteAttributesToRetrieve(language),
        attributesToHighlight: null
      }
    }
  ]

  if (hotelId) {
    requests.push({
      indexName: getIndexName('hotel'),
      params: {
        facetFilters: [[`objectID:${hotelId}`]],
        attributesToRetrieve: buildHotelAttributesToRetrieve(language),
        attributesToHighlight: null
      }
    })
  }

  const anchorResponse = await algoliaClient.search(requests)

  const results = anchorResponse?.results || []
  const anchorHits = results[0]?.hits || []
  const hotelHits = results[1]?.hits || []

  return {
    anchor: anchorHits[0],
    anchorHit: hotelHits[0]
  }
}

export const staticSearch = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions,
  hsoConfig: HsoConfig
) => async (
  parameters: StaticSearchParameters
): Promise<PlaceSearchResults> => {
  const index = algoliaClient.initIndex(getIndexName('hotel'))

  const {language, pageSize} = options
  const {
    features,
    starRatings,
    propertyTypes,
    guestRatings,
    sortField,
    noHostels,
    offset = 0,
    length = pageSize,
    boundingBox,
    polygon,
    geolocation
  } = parameters

  const facetFilters = buildFacetFilters({
    facilities: features,
    starRating: starRatings,
    propertyTypeId: propertyTypes
  })

  const numericFilters = buildNumericFilters({
    guestRating: guestRatings
  })

  const facets = buildFacets()

  const filters = buildFilters(noHostels)

  const optionalFilters = buildOptionalFilters(hsoConfig, {sortField})

  const request: AlgoliaRequest = {
    length,
    offset,
    facets,
    filters,
    numericFilters,
    facetFilters,
    attributesToRetrieve: buildHotelAttributesToRetrieve(language),
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
