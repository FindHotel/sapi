import algoliasearch from 'algoliasearch'

import {search, Search} from './search'

import {raa} from './raa'

import {getConfigs} from './configs'

const ALGOLIA_APP_ID = '4UYGJP42KQ'
const RAA_ENDPOINT = 'wss://server.tst.eu.daedalus.fih.io/'

export type AlgoliaClient = any

/** Unique ID identifying users
 * @default new UUID
 */
export type anonymousId = string

export type SapiClient = {
  search: Search
  getConfig: any
}

/** Options for initializing the Search API client */
export type SapiClientOptions = {
  anonymousId: anonymousId
  /** Language code for selected user language */
  language: string
  /** Currency code for selected user currency */
  currency: string
  /** Currency code for selected user origin country */
  country: string
  pageSize: number
}

export type Base = {
  algoliaClient: AlgoliaClient
  raaClient: any
  configs: {
    lov: any
    hso: any
    appConfig: any
  }
  options: SapiClientOptions & {
    exchangeRate: number
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

  const {language, currency} = options
  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, clientKey)
  const raaClient = raa(RAA_ENDPOINT)
  const configs = await getConfigs(algoliaClient, language, currency)()

  const base: Base = {
    algoliaClient,
    raaClient,
    configs: {
      ...configs,
      appConfig: {}
    },
    options: {
      ...options,
      pageSize: 20,
      exchangeRate: 1
    }
  }

  return {
    search: search(base),
    getConfig: getConfig(base)
  }
}

export default sapiClient
