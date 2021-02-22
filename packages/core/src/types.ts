/**
 * Unique ID identifying users
 *
 * @default new UUID
 */
export type AnonymousId = string

/**
 * Search client types
 */
export interface FilterParameters {
  themeIds?: number[]
  chainIds?: number[]
  facilities?: number[]
  starRating?: number[]
  propertyTypeId?: number[]
  guestRating?: number[]
  noHostels?: boolean
  priceMin?: number
  priceMax?: number
  freeCancellation?: boolean
  hotelName?: string
}

export interface OptionalSearchParameters {
  checkIn?: string
  checkOut?: string
  rooms?: string
  dayDistance?: number
  nights?: number
  sortField?: string
  sortOrder?: string
  offers?: boolean
  filters?: FilterParameters
  offset?: number
  length?: number
  boundingBox?: BoundingBox
  polygon?: Polygon
  getAllOffers?: boolean
  cugDeals?: string
  deviceCategory?: string
  profileId?: string
  searchId?: string
  useAlternativeRaaKeys?: boolean
  freeCancellation?: boolean
  skipGeoSearch?: boolean
}

export interface PlaceSearchParameters extends OptionalSearchParameters {
  placeId: string
}

export interface HotelSearchParameters extends OptionalSearchParameters {
  hotelId: string
}

export interface LocationSearchParameters extends OptionalSearchParameters {
  geolocation: Location
}

export interface QuerySearchParameters extends OptionalSearchParameters {
  query: string
}

export type ApiSearchParameters =
  | PlaceSearchParameters
  | HotelSearchParameters
  | LocationSearchParameters
  | QuerySearchParameters

export type SearchParameters = ApiSearchParameters & {
  checkIn: string
  checkOut: string
  rooms: string
  deviceCategory: string
}

/**
 * Algolia types
 */
export type Polygon = number[][]

export type BoundingBox = [number, number, number, number]

export interface Location {
  lat: number
  lon: number
  precision?: number
  radius?: number
}

type GuestsRatingBreakdown =
  | 'cleanliness'
  | 'dining'
  | 'facilities'
  | 'location'
  | 'overall'
  | 'pricing'
  | 'rooms'
  | 'service'

type GuestRating = Record<GuestsRatingBreakdown, number>

type GuestBreakdown = 'business' | 'couples' | 'families' | 'groups' | 'solo'

type GuestType = Record<GuestBreakdown, number>

type PricingBreakdown =
  | 'medianRateBkt'
  | 'medianRateMoFrBkt'
  | 'medianRateSaSuBkt'
  | 'minRate'
  | 'minRateBkt'
  | 'priced'

type Pricing = Record<PricingBreakdown, number>

interface HighlightResult {
  value: string
}

export type TranslatedHighlightResult = Record<Language, HighlightResult>
export type Language = string
export type TranslatedString = Record<Language, string>
export type TranslatedArray = Record<Language, string[]>

/** Anchor hit */
interface BasicAnchorHit {
  pageSize: number
  objectID: string
  placeADN: TranslatedArray
  placeDN: TranslatedArray
  priceBucketWidth: number
  _geoloc: Location
}

export interface HotelAnchorHit extends BasicAnchorHit {
  hotelName: TranslatedString
  objectType: 'hotel'
}

export interface PlaceAnchorHit extends BasicAnchorHit {
  objectType: 'place'
  polygon?: Polygon
  placeCategory: number
  placeName: TranslatedArray
  placeType: number
}

export type AnchorHit = HotelAnchorHit | PlaceAnchorHit

/** Suggestion hit */
interface BasicSuggestHit {
  objectID: string
  placeADN: TranslatedArray
  placeDN: TranslatedArray
  placeType: number
}

export interface PlaceSuggestHit extends BasicSuggestHit {
  placeName: TranslatedString
  objectType: 'place'
  _highlightResult: {
    placeName: TranslatedHighlightResult
  }
}

export interface HotelSuggestHit extends BasicSuggestHit {
  hotelName: TranslatedString
  objectType: 'hotel'
  _highlightResult: {
    hotelName: TranslatedHighlightResult
  }
}

export type SuggestHit = HotelSuggestHit | PlaceSuggestHit

/** Hit */
export interface Hit {
  address: TranslatedString
  checkInTime: string
  checkOutTime: string
  facilities: number[]
  guestRating: GuestRating
  guestType: GuestType
  hotelName: TranslatedString
  imageURIs: string[]
  isDeleted: boolean
  lastBooked: number
  objectID: string
  placeADName: TranslatedArray
  placeDN: TranslatedArray
  pricing: Pricing
  propertyTypeId: number
  reviewCount: number
  sentiments: number[]
  starRating: number
  tags: string[]
  themeIds: number[]
  _geoloc: Partial<Location>
}

/**
 * Product
 */
export interface Hotel
  extends Omit<Hit, 'hotelName' | 'address' | 'placeDN' | 'placeADName'> {
  displayAddress: string
  hotelName: string
  placeDisplayName: string
}

export interface HotelAnchor
  extends Omit<HotelAnchorHit, 'hotelName' | 'placeADN' | 'placeDN'> {
  placeDisplayName: string
  hotelName: string
}

export interface PlaceAnchor
  extends Omit<PlaceAnchorHit, 'placeName' | 'placeADN' | 'placeDN'> {
  placeDisplayName: string
}

export type Anchor = HotelAnchor | PlaceAnchor

export type PlaceTypeName =
  | 'property'
  | 'country'
  | 'city'
  | 'airport'
  | 'station'
  | 'area'

export interface Suggestion {
  highlightValue: string
  objectID: string
  placeDisplayName: string
  placeTypeName: PlaceTypeName
  value: string
}

/**
 * RAA types
 */
export interface RateBreakdown {
  baseRate: number
  localTaxes: number
  taxes: number
}

interface AnchorPriceRateBreakdown extends RateBreakdown {
  calculatedTotalRate: number
  nightlyRate: number
}

interface TopOfferData {
  anchorPrice: number
  anchorPriceNightly: number
  offerIndexes: number[]
}

export interface Offer {
  id: string
  providerCode: string
  rateBreakdown: RateBreakdown
  nightlyRate: number
}

export interface RaaResponseOffer {
  anchorPriceRateBreakdown?: AnchorPriceRateBreakdown
  cheapestPriceRateBreakdown?: RateBreakdown
  fetchedAllOffers: boolean
  hasMoreOffers: boolean
  id: string
  offers: Offer[]
  topOfferData?: TopOfferData
  errors: Array<Record<string, number | string>>
}

export interface HotelOfferEntity extends Omit<RaaResponseOffer, 'errors'> {}

export interface RaaResponse {
  errors: any[]
  results: RaaResponseOffer[]
  status: {
    complete: boolean
  }
}
