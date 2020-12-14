import {SapiClientOptions, AlgoliaClient} from '.'
import {SearchConfig} from './configs'

const PAGE_SIZE = 50
const DEFAULT_RADIUS = 20000
const DEFAULT_PRECISION = 5000

type IndexType = 'autocomplete' | 'hotel' | 'hotelranking' | 'lov'

type Location = {
  lat: number
  lon: number
  precision?: number
  radius?: number
}

type Polygon = number[]

export type PlaceMeta = {
  polygon: Polygon[]
  _geoloc: Location
}

export type PlaceSearchParameters = {
  /** Place Id */
  placeId: string
  length?: number
  offset?: number
  features?: string | string[]
  starRatings?: string | string[]
  propertyTypes?: string | string[]
  guestRatings?: string | string[]
  sortField?: string
  /** Whether to filter out hostels from results. Defaults to `false` */
  noHostels?: boolean
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
  place: PlaceMeta
  results: PlaceSearchResults
}

export type PlaceSearch = (
  parameters: PlaceSearchParameters,
  searchConfig: SearchConfig
) => Promise<PlaceSearchResponse>

type OptionalFiltes = string[]

type BuildOptionalFiltersParameters = {
  sortField?: string
}

export const getIndexName = (index: IndexType): string => {
  const indexNames = {
    autocomplete: 'prod_autocomplete_v2',
    hotel: 'prod_hotel_v3',
    hotelranking: 'prod_hotelranking_v1_os000002_hso_availability',
    lov: 'prod_lov_v2'
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

const buildFilters = (noHostels = false): string => {
  // TODO: move to const
  const HOSTEL_PROPERTY_TYPE_ID = '5'

  let filters = 'isDeleted = 0'

  if (noHostels) {
    filters = `${filters} AND propertyTypeId != ${HOSTEL_PROPERTY_TYPE_ID}`
  }

  return filters
}

const buildOptionalFilters = (
  searchConfig: SearchConfig,
  parameters: BuildOptionalFiltersParameters
): OptionalFiltes => {
  return parameters.sortField === 'price'
    ? [...searchConfig, ...generateSortByPriceFilters()]
    : searchConfig
}

const buildHotelAttributesToRetrieve = (language = 'en') => {
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

const getPlaceMeta = (algoliaClient) => async (
  placeId: string
): Promise<PlaceMeta> => {
  const requests = [
    {
      indexName: getIndexName('autocomplete'),
      params: {
        facetFilters: [[`objectID:place:${placeId}`]],
        attributesToRetrieve: [
          'objectType',
          'placeType',
          'placeCategory',
          'objectID',
          '_geoloc',
          'priceBucketWidth',
          'polygon',
          'placeName.en',
          'placeADN.en',
          'placeDN.en',
          'hotelName.en'
        ],
        attributesToHighlight: null
      }
    }
  ]

  const metaResponse = await algoliaClient.search(requests)
  const res = metaResponse?.results || []
  const hits = res[0]?.hits || []
  const hit = hits[0]

  return hit
}

const insidePolygonSearch = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions
) => (
  polygon: Polygon[],
  parameters: PlaceSearchParameters,
  searchConfig: SearchConfig
): Promise<PlaceSearchResults> => {
  const index = algoliaClient.initIndex(getIndexName('hotel'))

  const {
    features,
    starRatings,
    propertyTypes,
    guestRatings,
    sortField,
    noHostels,
    length = PAGE_SIZE,
    offset = 0
  } = parameters

  const {language} = options

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

  const optionalFilters = buildOptionalFilters(searchConfig, {sortField})

  const request = {
    length,
    offset,
    facets,
    filters,
    numericFilters,
    facetFilters,
    insidePolygon: polygon,
    attributesToRetrieve: buildHotelAttributesToRetrieve(language),
    attributesToHighlight: null,
    getRankingInfo: false,
    optionalFilters
  }

  return index.search('', request)
}

const aroundLocationSearch = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions
) => (
  geolocation: Location,
  parameters: PlaceSearchParameters,
  searchConfig: SearchConfig
): Promise<PlaceSearchResults> => {
  const index = algoliaClient.initIndex(getIndexName('hotel'))

  const {
    features,
    starRatings,
    propertyTypes,
    guestRatings,
    sortField,
    noHostels,
    length = PAGE_SIZE,
    offset = 0
  } = parameters

  const {language} = options

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

  const optionalFilters = buildOptionalFilters(searchConfig, {sortField})

  const request = {
    length,
    offset,
    facets,
    filters,
    numericFilters,
    facetFilters,
    aroundLatLng: `${geolocation.lat}, ${geolocation.lon}`,
    aroundRadius: geolocation.radius || DEFAULT_RADIUS,
    aroundPrecision: geolocation.precision || DEFAULT_PRECISION,
    attributesToRetrieve: buildHotelAttributesToRetrieve(language),
    attributesToHighlight: null,
    getRankingInfo: false,
    optionalFilters
  }

  return index.search('', request)
}

export const placeSearch = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions
): PlaceSearch => async (parameters, searchConfig) => {
  const placeMeta = await getPlaceMeta(algoliaClient)(parameters.placeId)

  const {polygon, _geoloc} = placeMeta

  const results =
    polygon.length > 0
      ? await insidePolygonSearch(algoliaClient, options)(
          polygon,
          parameters,
          searchConfig
        )
      : await aroundLocationSearch(algoliaClient, options)(
          _geoloc,
          parameters,
          searchConfig
        )

  return {
    place: placeMeta,
    results
  }
}

export const hotelSearch = (
  algoliaClient: AlgoliaClient,
  options: SapiClientOptions
) => async (parameters, searchConfig) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        place: {},
        results: {}
      })
    }, 250)
  })
}
