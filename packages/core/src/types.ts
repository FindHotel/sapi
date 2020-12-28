export type SearchType =
  | 'insidePolygon'
  | 'insideBoundingBox'
  | 'aroundLocation'

export type Polygon = ReadonlyArray<readonly number[]>

export type BoundingBox = readonly [number, number, number, number]

export interface Location {
  readonly lat: number
  readonly lon: number
  readonly precision?: number
  readonly radius?: number
}

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
  boundingBox?: BoundingBox
  polygon?: Polygon
  getAllOffers?: boolean
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

export type SearchParameters =
  | PlaceSearchParameters
  | HotelSearchParameters
  | LocationSearchParameters
  | QuerySearchParameters

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

export type Anchor = {
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

export type Hit = {
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
