import algoliasearch from 'algoliasearch'

import {search, Search} from './search'

import {raa} from './raa'

import {getConfigs, Configs} from './configs'

const ALGOLIA_APP_ID = '4UYGJP42KQ'
const RAA_ENDPOINT = 'wss://server.tst.eu.daedalus.fih.io/'

export type AlgoliaClient = any

/**
 * Unique ID identifying users
 *
 * @default new UUID
 */
export type anonymousId = string

export type SapiClient = {
  search: Search
  getConfig: any
}

/** Options for initializing the Search API client */
export type SapiClientOptions = {
  /** Unique ID identifying users */
  anonymousId: anonymousId
  /** Language code for selected user language */
  language: string
  /** Fallback languages code for selected user language */
  fallBackLanguages: string[]
  /** Currency code for selected user currency */
  currency: string
  /** Currency code for selected user origin country */
  country: string
  /** Page size */
  pageSize: number
}

export type Base = {
  algoliaClient: AlgoliaClient
  raaClient: any
  configs: Configs
  options: SapiClientOptions & {
    pageSize: number
  }
}

const getConfig = (base: Base) => () => {
  return base?.configs
}

const sapiClient = async (
  clientKey: string,
  options: SapiClientOptions
): Promise<SapiClient> => {
  if (!clientKey) {
    throw new Error('Sapi client requires a valid client key')
  }

  const {language, fallBackLanguages, currency} = options

  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, clientKey)

  const raaClient = raa(RAA_ENDPOINT, options)

  const configs = await getConfigs(
    algoliaClient,
    [language, ...fallBackLanguages],
    [currency, 'EUR']
  )()

  const base: Base = {
    algoliaClient,
    raaClient,
    configs,
    options: {
      ...options,
      pageSize: 20
    }
  }

  return {
    search: search(base),
    getConfig: getConfig(base)
  }
}

export default sapiClient
