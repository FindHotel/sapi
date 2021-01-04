import jexl from 'jexl'

import {AlgoliaClient} from '.'
import {getIndexName, getLocalizedAttributes} from './algolia'

interface Response {
  results: Array<{hits: any}>
}

interface ExchangeRateHit {
  objectID: string
  rate: number
}

type ExchangeRates = Record<string, number>

type HsoConfigContext = Record<string, unknown>

interface HsoConfigFilter {
  criteria: string
  description: string
  value: string[]
}

export type HsoConfigType = 'place_search' | 'hotel_search' | undefined

export interface HsoConfig {
  objectID: string
  description: string
  filters: HsoConfigFilter[]
}

export type HsoFilter = string[]

export interface ListOfValuesItem {
  id: number
  categoryID?: number
  objectID: string
  value: Record<string, string | number>
  _rankingInfo?: Record<string, undefined>
}

export type Configs = {
  hso: HsoConfig[]
  lov: ListOfValuesItem[]
  exchangeRatesUSD: ExchangeRates
}

const LOV_HITS_PER_PAGE = 1000 // Max page size

/**
 * Add Jexl map to replace placeholders with values
 */
jexl.addTransform('map', (array: string[], s: string): string[] =>
  array.map((x) => s.replace(/%s/g, x))
)

/**
 * Evaluate hso config filters
 *
 * @param filters
 * @param context
 */
const evaluateHsoConfigFilters = (
  filters: HsoConfigFilter[],
  context: HsoConfigContext
): HsoFilter => {
  let result: HsoFilter = []

  filters.some((filter) => {
    try {
      if (jexl.evalSync(filter.criteria, context)) {
        result = filter.value.map((line) => jexl.evalSync(line, context))
      }
    } catch {}

    return result.length > 0
  })

  return result
}

/**
 * Generate filter from HSO config
 *
 * @param hsoConfig
 * @param hsoConfigType
 * @param context
 */
export const filterFromHsoConfig = (
  hsoConfig: HsoConfig[],
  hsoConfigType: HsoConfigType,
  context: HsoConfigContext
): HsoFilter => {
  const config = hsoConfig.find(({objectID}) => objectID === hsoConfigType)

  if (config?.filters === undefined) return []

  return evaluateHsoConfigFilters(config.filters, context)
}

/**
 * Generate exchange rates object from response
 *
 * @param hits
 */
const exchangeRatesFromResponse = (hits: ExchangeRateHit[]): ExchangeRates => {
  const rates: ExchangeRates = {}

  hits.forEach(({objectID, rate}) => {
    rates[objectID] = rate
  })

  return rates
}

/**
 * Get LOV attributes to retrieve with localized attributes
 *
 * @param languages
 */
const getLovAttributesToRetrieve = (languages: string[]): string[] => {
  const localizedAttributes = getLocalizedAttributes(languages, ['value'])

  return ['id', 'categoryID', 'objectID', ...localizedAttributes]
}

export const getConfigs = (
  algoliaClient: AlgoliaClient,
  languages: string[],
  currencies: string[]
) => async (): Promise<Configs> => {
  const currencyFacetFilters = currencies.map(
    (currency) => `objectID:${currency}`
  )

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
        hitsPerPage: LOV_HITS_PER_PAGE,
        attributesToRetrieve: getLovAttributesToRetrieve(languages),
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

  const {results}: Response = await algoliaClient.search(requests)
  const [hso, lov, exchangeRates] = results.map((result) => result.hits)

  return {
    hso,
    lov,
    exchangeRatesUSD: exchangeRatesFromResponse(exchangeRates)
  }
}
