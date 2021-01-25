import hash from 'object-hash'

import {AnonymousId, ApiSearchParameters} from './types'

interface SearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  userCountry: string
}

export const generateSearchId = (
  parameters: ApiSearchParameters,
  options: SearchIdOptions
) => {
  const {anonymousId, language, currency, userCountry} = options

  return hash({...parameters, anonymousId, language, currency, userCountry})
}

export const omit = (keys: string[], object: any) => {
  // eslint-disable-next-line unicorn/no-reduce
  return keys.reduce((acc, key) => {
    const {[key]: omit, ...rest} = acc
    return rest
  }, object)
}
