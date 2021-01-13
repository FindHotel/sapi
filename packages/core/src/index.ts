import algoliasearch from 'algoliasearch'

import {search, Search} from './search'
import {raa, RaaClient} from './raa'
import {getConfigs, Configs} from './configs'

import {AnonymousId} from './types'

const ALGOLIA_APP_ID = '4UYGJP42KQ'
const RAA_ENDPOINT = 'wss://server.prd.eu.daedalus.fih.io/'

export type AlgoliaClient = any

export interface SapiClient {
  search: Search
  getConfig: () => Configs
}

/** Options for initializing the Search API client */
export interface SapiClientOptions {
  /** Unique ID identifying users */
  anonymousId: AnonymousId
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
  /** Include or not local taxes based on localisation logic */
  includeLocalTaxes?: boolean
  /** Include or not taxes based on localisation logic */
  includeTaxes?: boolean
  /** Skip backend offers augmentation */
  skipBackendAugmentation?: boolean
  /** Enable raa faceting */
  facetsEnabled?: boolean
  /** Used to identify SAPI Cli interface on the RAA backend */
  sapiCliKey?: string
}

export type Base = {
  algoliaClient: AlgoliaClient
  raaClient: RaaClient
  configs: Configs
  options: SapiClientOptions & {
    pageSize: number
  }
}

const getConfig = (base: Base) => (): Configs => {
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
