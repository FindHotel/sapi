import hash from 'object-hash'
import differenceInDays from 'date-fns/differenceInDays'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

import {Except} from 'type-fest'

import {AnonymousId, ApiSearchParameters} from './types'

interface GenerateSearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  country: string
}

/**
 * Uses date-fns/format to format a date, falling back to undefined in case no date is specified.
 *
 * @param date date to format
 * @param dateFormat format string, see https://date-fns.org/v1.30.1/docs/format
 */
export const dateFormat = (
  date: (string | null | undefined) | (Date | null | undefined),
  dateFormat: string
) => (date ? format(date, dateFormat) : '')

export const dateStringToMiddayUTC = (date: string): Date =>
  parseISO(`${date} 12:00:00`)

/**
 * Returns a string to use in Algolia tags, in the format: 2021-01-18-02.
 * The last section is the length of stay in days.
 *
 * @param checkIn date string 2021-01-18
 * @param checkOut date string 2021-01-19
 */
export const getCheckInNights = (checkIn?: string, checkOut?: string) => {
  if (!checkIn || !checkOut) return

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)
  const checkInFormatted = format(checkInDate, 'yyMMdd')
  const nights = differenceInDays(checkOutDate, checkInDate)

  return `${checkInFormatted}-${nights}`
}

/**
 * Generates a deterministic hash of a combination of ApiSearchParameters and SAPI options.
 *
 * @param parameters all relevant search parameters to generate an id
 * @param options SAPI options used to generate an id
 */
export const generateSearchId = (
  parameters: ApiSearchParameters,
  options: GenerateSearchIdOptions
) => {
  const {anonymousId, language, currency, country} = options

  return hash({...parameters, anonymousId, language, currency, country})
}

/**
 * Removes specified `keys` from `object`
 *
 * @typeParam K string
 * @typeParam T object
 * @param keys keys of the properties to remove from `object`
 * @param object target object to emit `properties` from
 */
export const omit = <K extends keyof T, T>(
  keys: K[],
  object: T
): Except<T, K> => {
  // eslint-disable-next-line unicorn/no-reduce
  return keys.reduce((acc, key) => {
    const {[key]: omit, ...rest} = acc
    return rest
  }, object)
}
