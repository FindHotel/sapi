import hash from 'object-hash'

import {AnonymousId, ApiSearchParameters} from './types'

interface GenerateSearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  country: string
}

export const dateToMiddayUTC = (date: string): Date =>
  new Date(`${date} 12:00:00 UTC`)

export const generateSearchId = (
  parameters: ApiSearchParameters,
  options: GenerateSearchIdOptions
): string => {
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
