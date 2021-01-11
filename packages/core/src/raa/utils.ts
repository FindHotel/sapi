import {RatesResponse} from './raa'
import {omit} from '../utils'

import {Rate, Offer} from '../types'

interface Parameters {
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

const isOfferInPriceRange = (
  offer: Offer,
  upperBound: number,
  priceMin?: number,
  priceMax?: number
): boolean => {
  if (priceMin !== undefined && offer.nightlyRate < priceMin) {
    return false
  }

  if (
    priceMax !== undefined &&
    priceMax < upperBound &&
    offer.nightlyRate > priceMax
  ) {
    return false
  }

  return true
}

const applyPriceFilter = (
  parameters: Parameters,
  options: Options,
  rate: Rate
): Rate => {
  const {filters} = parameters
  const {priceBucketCount, priceBucketWidth, exchangeRate} = options

  const upperBound =
    priceBucketCount * Math.round(priceBucketWidth * exchangeRate)

  const hasOfferInPriceRange = rate.offers?.some((offer) =>
    isOfferInPriceRange(offer, upperBound, filters?.priceMin, filters?.priceMax)
  )

  if (hasOfferInPriceRange) {
    return rate
  }

  const keysToOmit = [
    'topOfferData',
    'cheapestPriceRateBreakdown',
    'anchorPriceRateBreakdown'
  ]

  return {
    ...omit(keysToOmit, rate),
    offers: []
  }
}

export const augmentRAAResponse = (
  ratesResults: RatesResponse,
  parameters: Parameters,
  options: Options
): RatesResponse => {
  const {hotelsRates, anchorHotelRate} = ratesResults
  const keysToOmit = ['errors'] // Idially this should not come from RAA

  const augmentedHotelsRates = hotelsRates
    ? hotelsRates.map((rate) =>
        applyPriceFilter(parameters, options, omit(keysToOmit, rate))
      )
    : undefined

  const augmentedAnchorHotelsRates = anchorHotelRate
    ? omit(keysToOmit, anchorHotelRate)
    : undefined

  return {
    hotelsRates: augmentedHotelsRates,
    anchorHotelRate: augmentedAnchorHotelsRates
  }
}
