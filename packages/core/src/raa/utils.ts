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
): Rate => {
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
  }

  return rate
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
