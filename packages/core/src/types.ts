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
  themes?: number[]
  chainIds?: number[]
  facilities?: number[]
  starRating?: number[]
  propertyTypes?: number[]
  guestRating?: number[]
  noHostels?: boolean
  priceMin?: number
  priceMax?: number
}

export interface OptionalSearchParameters {
  checkIn?: string
  checkOut?: string
  rooms?: string
  dayDistance?: number
  nights?: number
  sortField?: string
  sortOrder?: string
  rates?: boolean
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

/**
 * Algolia types
 */
export type Polygon = ReadonlyArray<readonly number[]>

export type BoundingBox = readonly [number, number, number, number]

export interface Location {
  readonly lat: number
  readonly lon: number
  readonly precision?: number
  readonly radius?: number
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

type Language = string

type TranslatedString = Record<Language, string>

type TranslatedArray = Record<Language, string[]>

export interface Anchor {
  objectID: string
  objectType: 'hotel' | 'place'
  placeADN: TranslatedArray
  placeCategory: number
  placeDN: TranslatedArray
  placeName: TranslatedArray
  placeType: number
  polygon?: Polygon
  priceBucketWidth: number
  _geoloc: Location
}

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
}

export interface Rate {
  anchorPriceRateBreakdown: AnchorPriceRateBreakdown
  cheapestPriceRateBreakdown: RateBreakdown
  fetchedAllOffers: boolean
  hasMoreOffers: boolean
  id: string
  offers: Offer[]
  topOfferData: TopOfferData
}

export interface RaaResponse {
  errors: any[]
  results: Rate[]
  status: {
    complete: boolean
  }
}
