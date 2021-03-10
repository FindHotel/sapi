import algoliasearch, {SearchClient} from 'algoliasearch'

import {search, SearchFn} from './search'
import {suggest, SuggestFn} from './suggest'

import {raa, RaaClient} from './raa'
import {
  loadConfigs,
  loadAppConfig,
  AppConfig,
  Configs,
  DatesConfig,
  ListOfValuesItem,
  ExchangeRates
} from './configs'

import {AnonymousId} from './types'

const ALGOLIA_APP_ID = '4UYGJP42KQ'

export type AlgoliaClient = Pick<SearchClient, 'search'>

export interface SapiClient {
  search: SearchFn
  suggest: SuggestFn
  getConfig: () => {
    lov: ListOfValuesItem[]
    exchangeRates: ExchangeRates
  }
}

/** Options for initializing the Search API client */
export interface SapiClientOptions {
  /** Unique ID identifying users */
  anonymousId: AnonymousId
  /** Language code for selected user language */
  language: string
  /** Currency code for selected user currency */
  currency: string
  /** Country code for selected user origin userCountry */
  userCountry: string
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
  /** Device category of the consumer */
  deviceCategory: string
  /** A/B tests variation IDs */
  variationIds: Record<string, string>
}

export interface Base {
  /** Application configuration, stored in Algolia */
  appConfig: AppConfig
  /** Instance of the Algolia Client */
  algoliaClient: AlgoliaClient
  /** Instance of the Rates and Availability Client */
  raaClient: RaaClient
  /** Configs loaded from Algolia and local date configuration */
  configs: Configs & {
    dates: DatesConfig
  }
  options: SapiClientOptions & {
    requestSize: number
    priceBucketsCount: number
    languages: string[]
  }
}

function getConfig(base: Base) {
  return (): {
    lov: ListOfValuesItem[]
    exchangeRates: ExchangeRates
  } => ({
    exchangeRates: base.configs.exchangeRates,
    lov: base.configs.lov
  })
}

/**
 * Initializes SAPI client asynchronously, it first loads the app configuration from Algolia and sets up the client.
 *
 * @param clientId SAPI client id
 * @param clientKey SAPI public client key
 * @param clientOptions options for initializing SAPI
 *
 * @returns initialized SAPI client
 */
export async function sapi(
  clientId: string,
  clientKey: string,
  clientOptions: SapiClientOptions
): Promise<SapiClient> {
  if (!clientId) {
    throw new Error('Sapi client requires client id')
  }

  if (!clientKey) {
    throw new Error('Sapi client requires a valid client key')
  }

  const options = {
    ...clientOptions,
    pageSize: clientOptions.pageSize ?? 20,
    currency: clientOptions.currency?.toUpperCase() ?? 'USD',
    deviceCategory: clientOptions.deviceCategory ?? 'desktop'
  }

  const {language, currency, variationIds} = options
  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, clientKey)
  const appConfig = await loadAppConfig(algoliaClient, variationIds)(clientId)
  const raaClient = raa(appConfig.getRaaEndpoint(), options)
  const fallbackLanguages = appConfig.getFallbackLanguages(language) ?? []
  const languages = [language, ...fallbackLanguages, 'en']

  const configs = await loadConfigs(algoliaClient, appConfig, {
    languages,
    currencies: [currency, 'EUR']
  })()

  const base: Base = {
    appConfig,
    algoliaClient,
    raaClient,
    configs: {
      ...configs,
      dates: appConfig.getDatesConfig()
    },
    options: {
      ...options,
      languages,
      requestSize: appConfig.getRequestSize(),
      priceBucketsCount: appConfig.getPriceBucketsCount()
    }
  }

  return {
    search: search(base),
    suggest: suggest(base),
    getConfig: getConfig(base)
  }
}
