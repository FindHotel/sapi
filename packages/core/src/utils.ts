import hash from 'object-hash'
import differenceInDays from 'date-fns/differenceInDays'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

import {AnonymousId, ApiSearchParameters} from './types'

interface GenerateSearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  country: string
}

export const dateToMiddayUTC = (date: string): Date =>
  parseISO(`${date} 12:00:00`)

export const getCheckInNights = (checkIn?: string, checkOut?: string) => {
  if (!checkIn || !checkOut) return

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)
  const checkInFormatted = format(checkInDate, 'yyMMdd')
  const nights = differenceInDays(checkOutDate, checkInDate)

  return `${checkInFormatted}-${nights}`
}

export const generateSearchId = (
  parameters: ApiSearchParameters,
  options: GenerateSearchIdOptions
) => {
  const {anonymousId, language, currency, country} = options

  return hash({...parameters, anonymousId, language, currency, country})
}

export const omit = (keys: string[], object: any) => {
  // eslint-disable-next-line unicorn/no-reduce
  return keys.reduce((acc, key) => {
    const {[key]: omit, ...rest} = acc
    return rest
  }, object)
}
