import differenceInDays from 'date-fns/differenceInDays'
import isWeekend from 'date-fns/isWeekend'
import format from 'date-fns/format'

const isNil = (value: any) => {
  return value === null || value === undefined
}

export const dateToMiddayUTC = (date: string): Date =>
  new Date(`${date} 12:00:00 UTC`)

const STEP = 1
const PRICE_SORT_WEIGHT = 100
const PRICE_FILTER_WEIGHT = 10000
const PRICE_BUCKETS_COUNT = 31

export const generateSortByPriceFilters = (
  step: number = STEP,
  bucketsCount: number = PRICE_BUCKETS_COUNT
): string[] => {
  const filters = []

  for (let i = bucketsCount; i > 0; --i) {
    const score = (bucketsCount + 1 - i) * step * PRICE_SORT_WEIGHT
    filters.push(`pricing.minRateBkt:${i * step}<score=${score}>`)
  }

  return filters
}

export const getPriceBucketName = (
  checkIn: string | null | undefined,
  checkOut: string | null | undefined
): string => {
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
  exchangeRate,
  checkIn,
  checkOut,
  margin = 2
}: {
  checkIn: string | null | undefined
  checkOut: string | null | undefined
  exchangeRate: number | null | undefined
  margin?: number
  priceBucketWidth: number
  priceMax: number | null | undefined
  priceMin: number | null | undefined
}): string[] => {
  const priceFilter = []

  if ((isNil(priceMin) && isNil(priceMax)) || isNil(exchangeRate)) {
    return priceFilter
  }

  const bucketWidthInCurrency = priceBucketWidth * exchangeRate

  let minBkt = priceMin
    ? Math.floor(priceMin / bucketWidthInCurrency) - margin
    : 0
  let maxBkt = priceMax
    ? Math.ceil(priceMax / bucketWidthInCurrency) + margin
    : PRICE_BUCKETS_COUNT

  if (minBkt < 0) {
    minBkt = 0
  }

  if (maxBkt > PRICE_BUCKETS_COUNT) {
    maxBkt = PRICE_BUCKETS_COUNT
  }

  let bkt = minBkt

  const filterProp = getPriceBucketName(checkIn, checkOut)

  do {
    priceFilter.push(`${filterProp}:${bkt}<score=${PRICE_FILTER_WEIGHT}>`)
    bkt++
  } while (bkt <= maxBkt)

  return priceFilter
}
