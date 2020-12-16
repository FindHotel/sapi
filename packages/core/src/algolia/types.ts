export type Polygon = ReadonlyArray<readonly number[]>

export type Location = {
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
  polygon: Polygon
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
  objectID: number
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
