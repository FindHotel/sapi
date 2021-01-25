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

export const generateSortByPriceFilter = (
  priceBucketsCount: number
): string[] => {
  const filters = []

  for (let i = priceBucketsCount; i > 0; --i) {
    const score = (priceBucketsCount + 1 - i) * PRICE_SORT_WEIGHT
    filters.push(`pricing.minRateBkt:${i}<score=${score}>`)
  }

  return filters
}

const getPriceBucketName = (checkIn?: string, checkOut?: string): string => {
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

export const generatePriceFilter = ({
  priceMin,
  priceMax,
  priceBucketWidth,
  priceBucketsCount,
  checkIn,
  checkOut,
  margin = 2
}: PriceFilterParameters): string[] => {
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
