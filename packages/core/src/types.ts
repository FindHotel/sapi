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

export type SearchParameters = ApiSearchParameters & {
  checkIn: string
  checkOut: string
  rooms: string
  deviceCategory: string
  searchId: string
}

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

export type Language = string

export type LocalizedString = Record<Language, string>

export type LocalizedArray = Record<Language, string[]>

interface BasicAnchorHit {
  pageSize: number
  objectID: string
  placeADN: LocalizedArray
  placeDN: LocalizedArray
  priceBucketWidth: number
  _geoloc: Location
}

export interface HotelAnchorHit extends BasicAnchorHit {
  hotelName: LocalizedString
  objectType: 'hotel'
}

export interface PlaceAnchorHit extends BasicAnchorHit {
  objectType: 'place'
  polygon?: Polygon
  placeCategory: number
  placeName: LocalizedArray
  placeType: number
}

export type AnchorHit = HotelAnchorHit | PlaceAnchorHit

export interface Hit {
  address: LocalizedString
  checkInTime: string
  checkOutTime: string
  facilities: number[]
  guestRating: GuestRating
  guestType: GuestType
  hotelName: LocalizedString
  imageURIs: string[]
  isDeleted: boolean
  lastBooked: number
  objectID: string
  placeADName: LocalizedArray
  placeDN: LocalizedArray
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
export interface Hotel extends Omit<Hit, 'hotelName'> {
  displayAddress: string
  hotelName: string
  placeDisplayName: string
}

export interface HotelAnchor extends Omit<HotelAnchorHit, 'hotelName'> {
  placeDisplayName: string
  hotelName: string
}

export interface PlaceAnchor extends PlaceAnchorHit {
  placeDisplayName: string
}

export type Anchor = HotelAnchor | PlaceAnchor

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

export interface Rate {
  anchorPriceRateBreakdown?: AnchorPriceRateBreakdown
  cheapestPriceRateBreakdown?: RateBreakdown
  fetchedAllOffers: boolean
  hasMoreOffers: boolean
  id: string
  offers: Offer[]
  topOfferData?: TopOfferData
}

export interface RaaResponse {
  errors: any[]
  results: Rate[]
  status: {
    complete: boolean
  }
}
