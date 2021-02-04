import differenceInDays from 'date-fns/differenceInDays'
import isWeekend from 'date-fns/isWeekend'

import {dateToMiddayUTC} from '../dates'

interface PriceFilterParameters {
  checkIn?: string
  checkOut?: string
  margin?: number
  priceBucketWidth: number
  priceBucketsCount: number
  priceMax?: number
  priceMin?: number
}

const PRICE_SORT_WEIGHT = 100
const PRICE_FILTER_WEIGHT = 10000

/**
 * Generates sort by price optional filter
 *
 * @param priceBucketsCount number of price buckets
 *
 * @returns array of strings
 */
export function generateSortByPriceFilter(priceBucketsCount: number) {
  const filters = []

  for (let i = priceBucketsCount; i > 0; --i) {
    const score = (priceBucketsCount + 1 - i) * PRICE_SORT_WEIGHT
    filters.push(`pricing.minRateBkt:${i}<score=${score}>`)
  }

  return filters
}

/**
 * Gets price bucket name based on the days of the week for check In/Out dates
 *
 * @param checkIn checkIn date string
 * @param checkOut  checkOut date string
 */
function getPriceBucketName(checkIn?: string, checkOut?: string) {
  if (!checkIn || !checkOut) {
    return 'pricing.medianRateBkt'
  }

  const checkInDate = dateToMiddayUTC(checkIn)
  const checkOutDate = dateToMiddayUTC(checkOut)
  const lengthOfStay = differenceInDays(checkOutDate, checkInDate)

  if (lengthOfStay === 1) {
    if (isWeekend(checkInDate)) {
      return 'pricing.medianRateSaSuBkt'
    }

    return 'pricing.medianRateMoFrBkt'
  }

  return 'pricing.medianRateBkt'
}

/**
 * Generates price filter based on Alglolia's optional filters
 *
 * @param PriceFilterParameters parameterd for generating the filter
 *
 * @returns array of strings
 */
export function generatePriceFilter({
  priceMin,
  priceMax,
  priceBucketWidth,
  priceBucketsCount,
  checkIn,
  checkOut,
  margin = 2
}: PriceFilterParameters) {
  const priceFilter: string[] = []

  if (priceMin === undefined && priceMax === undefined) {
    return priceFilter
  }

  let minBkt = priceMin ? Math.floor(priceMin / priceBucketWidth) - margin : 0
  let maxBkt = priceMax
    ? Math.ceil(priceMax / priceBucketWidth) + margin
    : priceBucketsCount

  if (minBkt < 0) {
    minBkt = 0
  }

  if (maxBkt > priceBucketsCount) {
    maxBkt = priceBucketsCount
  }

  let bkt = minBkt

  const filterProp = getPriceBucketName(checkIn, checkOut)

  do {
    priceFilter.push(`${filterProp}:${bkt}<score=${PRICE_FILTER_WEIGHT}>`)
    bkt++
  } while (bkt <= maxBkt)

  return priceFilter
}
