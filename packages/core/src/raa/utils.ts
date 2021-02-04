import {OffersResponse} from './raa'

import {HotelOfferEntity, Offer} from '../types'

interface Parameters {
  sortField?: string
  sortOrder?: string
  filters?: {
    priceMin?: number
    priceMax?: number
  }
  priceBucketWidth: number
  priceBucketsCount: number
  exchangeRate: number
}

interface SortBy {
  sortField: string
  sortOrder?: string
}

interface SortingBoostParameters {
  filters?: {
    freeCancellation?: boolean
  }
}

export function generateSortingBoost(parameters: SortingBoostParameters) {
  return parameters?.filters?.freeCancellation
    ? 'freeCancellation=true:100'
    : undefined
}

export function cheapestDisplayedRate(hotelOfferEntity: HotelOfferEntity) {
  if (hotelOfferEntity.offers.length === 0) return 0

  return Math.min(...hotelOfferEntity.offers.map((offer) => offer.nightlyRate))
}

function isOfferInPriceRange(
  offer: Offer,
  upperBound: number,
  priceMin: number,
  priceMax: number
) {
  if (offer.nightlyRate < priceMin) {
    return false
  }

  if (priceMax < upperBound && offer.nightlyRate > priceMax) {
    return false
  }

  return true
}

function applyPriceFilter(
  parameters: Parameters,
  hotelOfferEntity: HotelOfferEntity
) {
  const {
    filters = {},
    priceBucketWidth,
    priceBucketsCount,
    exchangeRate
  } = parameters
  const {priceMin, priceMax} = filters
  const upperBound =
    priceBucketsCount * Math.round(priceBucketWidth * exchangeRate)

  if (priceMin !== undefined && priceMax !== undefined) {
    const hasOfferInPriceRange = hotelOfferEntity.offers?.some((offer) =>
      isOfferInPriceRange(offer, upperBound, priceMin, priceMax)
    )

    if (!hasOfferInPriceRange) {
      return {
        ...hotelOfferEntity,
        offers: []
      }
    }
  }

  return hotelOfferEntity
}

function sortByPrice(hotelOfferEntity: HotelOfferEntity[], sortOrder: string) {
  return hotelOfferEntity.sort((a, b) => {
    const sorter = cheapestDisplayedRate(a) - cheapestDisplayedRate(b)

    return sortOrder === 'ascending' ? sorter : -sorter
  })
}

function applySort(hotelOfferEntity: HotelOfferEntity[], sortBy: SortBy) {
  const {sortField, sortOrder = 'ascending'} = sortBy

  if (sortField === 'price') {
    return sortByPrice(hotelOfferEntity, sortOrder)
  }

  return hotelOfferEntity
}

export function augmentRaaResponse(
  offersResults: OffersResponse,
  parameters: Parameters
) {
  const {hotels, anchorHotel} = offersResults
  let augmentedHotelOffers

  if (hotels) {
    augmentedHotelOffers = hotels.map((hotelOfferEntity) =>
      applyPriceFilter(parameters, hotelOfferEntity)
    )

    if (parameters.sortField !== undefined) {
      augmentedHotelOffers = applySort(
        augmentedHotelOffers,
        parameters as SortBy
      )
    }
  }

  const hotelIds: string[] = []
  const hotelOfferEntities: Record<string, HotelOfferEntity> = {}

  augmentedHotelOffers?.forEach((hotelOfferEntity) => {
    hotelIds.push(hotelOfferEntity.id)
    hotelOfferEntities[hotelOfferEntity.id] = hotelOfferEntity
  })

  return {
    hotelIds,
    hotelOfferEntities,
    anchorHotelOffer: anchorHotel
  }
}
