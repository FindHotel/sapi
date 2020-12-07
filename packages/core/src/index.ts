import algoliasearch from 'algoliasearch'

import {search, Search} from './search'

import {raa} from './raa'

import {getConfigs} from './configs'

const ALGOLIA_APP_ID = '4UYGJP42KQ'
const RAA_ENDPOINT = 'wss://server.tst.eu.daedalus.fih.io/'

export type AlgoliaClient = any

/** Unique ID identifying users */
export type anonymousId = string

export type SapiClient = {
  search: Search
  getListOfValues: any
}

export type SapiClientOptions = {
  anonymousId: anonymousId
  language: string
  currency: string
  country: string
}

type Base = {
  algoliaClient: AlgoliaClient
  raaClient: any
  configs: {
    lov: any
    hso: any
    appConfig: any
  }
  options: {
    anonymousId: string
    language: string
    currency: string
    country: string
    exchangeRate: number
  }
}

const getListOfValues = (base) => () => {
  return base?.configs?.lov
}

const getConfig = (base) => () => {
  return base?.configs
}

const sapiClient = async (
  clientKey: string,
  options: SapiClientOptions
): Promise<SapiClient> => {
  if (!clientKey) {
    throw new Error('Sapi client requires a valid client key')
  }

  const {language} = options
  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, clientKey)
  const raaClient = raa(RAA_ENDPOINT)
  const configs = await getConfigs(algoliaClient, language)()

  const base: Base = {
    algoliaClient,
    raaClient,
    configs: {
      ...configs,
      appConfig: {}
    },
    options: {
      ...options,
      exchangeRate: 1
    }
  }

  return {
    search: search(base),
    getListOfValues: getListOfValues(base),
    getConfig: getConfig(base)
  }
}

export default sapiClient
