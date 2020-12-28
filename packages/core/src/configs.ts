import jexl from 'jexl'

import {AlgoliaClient} from '.'
import {getIndexName} from './algolia'

export type ListOfValuesItem = {
  id: number
  categoryID?: number
  objectID: string
  value: Record<string, string | number>
  _rankingInfo?: Record<string, undefined>
}

type ExchangeRateResponseType = {objectID: string; rate: number}

export type ExchangeRatesResponseType = {
  hits: ExchangeRateResponseType[]
}

export type ExchangeRatesType = Record<string, number>

type SearchConfigFilter = {
  criteria: string
  description: string
  value: string[]
}

export type HsoConfigObject = {
  objectID: string
  description: string
  filters: SearchConfigFilter[]
}

export type HsoConfig = string[]

export type Configs = {
  hso: HsoConfigObject[]
  lov: ListOfValuesItem[]
  exchangeRates: ExchangeRatesType
}

export type HsoConfigType = 'place_search' | 'hotel_search' | undefined

jexl.addTransform('map', (array, s) => array.map((x) => s.replace(/%s/g, x)))

const evaluateConfig = (rules, context): string[] => {
  let filters = []

  rules.some((rule) => {
    try {
      if (jexl.evalSync(rule.criteria, context)) {
        filters = rule.value.map((line) => jexl.evalSync(line, context))
      }
    } catch {}

    return filters.length > 0
  })

  return filters
}

export const hsoConfigObjectToString = (
  configs: HsoConfigObject[],
  searchType: HsoConfigType,
  context: Record<string, unknown>
): string[] => {
  const config = configs.find(({objectID}) => objectID === searchType)

  return evaluateConfig(config?.filters, context)
}

export const getLovAttributesToRetrive = (language = 'en'): string[] => {
  return ['id', 'categoryID', 'objectID', `value.${language}`]
}

export const getExchangeRatesFromResponse = (
  currency: string,
  response: ExchangeRatesResponseType
): ExchangeRatesType => {
  const {hits = []} = response
  const currencyToUsd = hits.find(({objectID}) => objectID === currency)
  const eurToUsd = hits.find(({objectID}) => objectID === 'EUR')

  return {
    currencyExchangeRate: currencyToUsd?.rate || 1,
    currencyExchangeRateEur: currencyToUsd?.rate / eurToUsd?.rate || 1
  }
}

export const getConfigs = (
  algoliaClient: AlgoliaClient,
  language: string,
  currency: string
) => async (): Promise<Configs> => {
  const currencyFacetFilters = [`objectID:${currency}`, 'objectID:EUR']

  const requests = [
    {
      indexName: getIndexName('hotelranking'),
      params: {
        attributesToHighlight: []
      }
    },
    {
      indexName: getIndexName('lov'),
      params: {
        hitsPerPage: 1000, // Max page size
        attributesToRetrieve: getLovAttributesToRetrive(language),
        attributesToHighlight: [],
        getRankingInfo: true
      }
    },
    {
      indexName: getIndexName('currency'),
      params: {
        hitsPerPage: currencyFacetFilters.length,
        query: '',
        attributesToRetrieve: ['rate'],
        attributesToHighlight: [],
        facetFilters: [currencyFacetFilters],
        getRankingInfo: false
      }
    }
  ]

  const {
    results: [hso, lov, exchangeRates]
  } = await algoliaClient.search(requests)

  return {
    hso: hso?.hits,
    lov: lov?.hits,
    exchangeRates: getExchangeRatesFromResponse(currency, exchangeRates)
  }
}
