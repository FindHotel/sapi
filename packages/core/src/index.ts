import algoliasearch from 'algoliasearch'

import {search, Search} from './search'
import {raa, RaaClient} from './raa'
import {
  loadConfigs,
  loadAppConfig,
  AppConfig,
  Configs,
  DatesConfig
} from './configs'

import {AnonymousId} from './types'

const ALGOLIA_APP_ID = '4UYGJP42KQ'

export type AlgoliaClient = any

export interface SapiClient {
  search: Search
  getConfig: () => Configs | undefined
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
  /** A/B tests variation IDs */
  variationIds: Record<string, string>
}

export type Base = {
  appConfig: AppConfig
  algoliaClient: AlgoliaClient
  raaClient: RaaClient
  configs: Configs & {
    dates: DatesConfig
  }
  options: SapiClientOptions & {
    pageSize: number // REVIEW: this is also defined in SapiClientOptions, is it still needed?
  }
}

const getConfig = (base: Base) => (): Configs | undefined => {
  return base?.configs
}

/**
 * Initializes SAPI client asynchronously, it first loads the app configuration from Algolia and sets up the client.
 * 
 * @param clientId SAPI client id
 * @param clientKey SAPI public client key
 * @param options options for initializing SAPI
 * 
 * @returns initialized SAPI client
 */
const sapiClient = async (
  clientId: string,
  clientKey: string,
  options: SapiClientOptions
): Promise<SapiClient> => {
  if (!clientId) {
    throw new Error('Sapi client requires client id')
  }

  if (!clientKey) {
    throw new Error('Sapi client requires a valid client key')
  }

  const {language, fallBackLanguages, currency, variationIds} = options
  const languages = [language, ...fallBackLanguages]

  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, clientKey)
  const appConfig = await loadAppConfig(algoliaClient, variationIds)(clientId)
  const raaEndpoint = appConfig.getRaaEndpoint()
  const raaClient = raa(raaEndpoint, options)
  const configs = await loadConfigs(algoliaClient, appConfig, languages, [
    currency,
    'EUR'
  ])()

  const base: Base = {
    appConfig,
    algoliaClient,
    raaClient,
    configs: {
      ...configs,
      dates: appConfig.getDatesConfig() // Move to options?
    },
    options: {
      ...options,
      pageSize: appConfig.getPageSize()
    }
  }

  return {
    search: search(base),
    getConfig: getConfig(base)
  }
}

export default sapiClient
