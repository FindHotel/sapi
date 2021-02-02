import hash from 'object-hash'

import {Except} from 'type-fest'

import {AnonymousId, ApiSearchParameters} from './types'

interface SearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  userCountry: string
}

/**
 * Generates a deterministic hash of a combination of ApiSearchParameters and SAPI options.
 *
 * @param parameters all relevant search parameters to generate an id
 * @param options SAPI options used to generate an id
 */
export const generateSearchId = (
  parameters: ApiSearchParameters,
  options: SearchIdOptions
) => {
  const {anonymousId, language, currency, userCountry} = options

  return hash({...parameters, anonymousId, language, currency, userCountry})
}

/**
 * Removes specified `keys` from `object`
 *
 * @typeParam K string
 * @typeParam O object
 * @param keys keys of the properties to remove from `object`
 * @param object target object to emit `properties` from
 */
export const omit = <K extends keyof O, O>(
  keys: K[],
  object: O
): Except<O, K> => {
  // eslint-disable-next-line unicorn/no-reduce
  return keys.reduce((acc, key) => {
    const {[key]: omit, ...rest} = acc
    return rest
  }, object)
}
