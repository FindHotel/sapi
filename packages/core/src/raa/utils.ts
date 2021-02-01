import {RatesResponse} from './raa'

import {Rate, Offer} from '../types'

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

export const generateSortingBoost = (
  parameters: SortingBoostParameters
): string | undefined => {
  return parameters?.filters?.freeCancellation
    ? 'freeCancellation=true:100'
    : undefined
}

export const cheapestDisplayedRate = (rate: Rate) => {
  if (rate.offers.length === 0) return 0

  return Math.min(...rate.offers.map((offer) => offer.nightlyRate))
}

const isOfferInPriceRange = (
  offer: Offer,
  upperBound: number,
  priceMin: number,
  priceMax: number
): boolean => {
  if (offer.nightlyRate < priceMin) {
    return false
  }

  if (priceMax < upperBound && offer.nightlyRate > priceMax) {
    return false
  }

  return true
}

const applyPriceFilter = (parameters: Parameters, rate: Rate) => {
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
    const hasOfferInPriceRange = rate.offers?.some((offer) =>
      isOfferInPriceRange(offer, upperBound, priceMin, priceMax)
    )

    if (!hasOfferInPriceRange) {
      return {
        ...rate,
        offers: []
      }
    }
  }

  return rate
}

const sortByPrice = (rates: Rate[], sortOrder: string) => {
  return rates.sort((a, b) => {
    const sorter = cheapestDisplayedRate(a) - cheapestDisplayedRate(b)

    return sortOrder === 'ascending' ? sorter : -sorter
  })
}

const applySort = (rates: Rate[], sortBy: SortBy) => {
  const {sortField, sortOrder = 'ascending'} = sortBy

  if (sortField === 'price') {
    return sortByPrice(rates, sortOrder)
  }

  return rates
}

export const augmentRaaResponse = (
  ratesResults: RatesResponse,
  parameters: Parameters
): RatesResponse => {
  const {hotels, anchorHotel} = ratesResults
  let augmentedHotelsRates

  if (hotels) {
    augmentedHotelsRates = hotels.map((rate) =>
      applyPriceFilter(parameters, rate)
    )

    if (parameters.sortField !== undefined) {
      augmentedHotelsRates = applySort(
        augmentedHotelsRates,
        parameters as SortBy
      )
    }
  }

  return {
    hotels: augmentedHotelsRates,
    anchorHotel
  }
}
