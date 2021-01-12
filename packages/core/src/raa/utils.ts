import {RatesResponse} from './raa'
import {omit} from '../utils'

import {Rate, Offer} from '../types'

interface Parameters {
  sortField?: string
  sortOrder?: string
  filters?: {
    priceMin?: number
    priceMax?: number
  }
}

interface Options {
  priceBucketWidth: number
  exchangeRate: number
  priceBucketCount: number
}

interface SortBy {
  sortField: string
  sortOrder?: string
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

const applyPriceFilter = (
  parameters: Parameters,
  options: Options,
  rate: Rate
) => {
  const {filters = {}} = parameters
  const {priceMin, priceMax} = filters
  const {priceBucketCount, priceBucketWidth, exchangeRate} = options
  const upperBound =
    priceBucketCount * Math.round(priceBucketWidth * exchangeRate)

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

export const cheapestDisplayedRate = (rate: Rate) => {
  if (rate.offers.length === 0) return 0

  return Math.min(...rate.offers.map((offer) => offer.nightlyRate))
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

export const augmentRAAResponse = (
  ratesResults: RatesResponse,
  parameters: Parameters,
  options: Options
): RatesResponse => {
  const {hotelsRates, anchorHotelRate} = ratesResults
  const keysToOmit = ['errors'] // Idially this should not come from RAA

  let augmentedHotelsRates

  if (hotelsRates) {
    augmentedHotelsRates = hotelsRates.map((rate) =>
      applyPriceFilter(parameters, options, omit(keysToOmit, rate))
    )

    if (parameters.sortField !== undefined) {
      augmentedHotelsRates = applySort(
        augmentedHotelsRates,
        parameters as SortBy
      )
    }
  }

  const augmentedAnchorHotelsRates = anchorHotelRate
    ? omit(keysToOmit, anchorHotelRate)
    : undefined

  return {
    hotelsRates: augmentedHotelsRates,
    anchorHotelRate: augmentedAnchorHotelsRates
  }
}
