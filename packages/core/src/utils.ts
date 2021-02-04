import hash from 'object-hash'
import {produce, Draft} from 'immer'

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
export function generateSearchId(
  parameters: ApiSearchParameters,
  options: SearchIdOptions
) {
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
export function omit<O, K extends keyof O>(keys: readonly K[], object: O) {
  const result: Partial<O> = {}
  const index: Partial<Record<K, number>> = {}
  let idx = 0
  const length_ = keys.length

  while (idx < length_) {
    index[keys[idx]] = 1
    idx += 1
  }

  for (const prop in object) {
    if (!Object.prototype.hasOwnProperty.call(index, prop)) {
      result[prop] = object[prop]
    }
  }

  return result as Except<O, K>
}

/**
 * Creates immutable state with Immer
 *
 * @typeParam T object
 * @param initialState initial state
 */
export function createState<T>(initialState: T) {
  let __state = initialState

  return {
    current: () => __state,

    get: <K extends keyof T>(key: K) => __state[key],

    update(fn: (draft: Draft<T>) => void) {
      __state = produce(__state, fn)
    }
  }
}
