import jexl from 'jexl'

import {AlgoliaClient} from '..'
import {IndexNameGetter} from '.'
import {getTranslatedAttributes} from '../algolia'

interface ExchangeRateHit {
  objectID: string
  rate: number
}

export type ExchangeRates = Record<string, number>

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
  _rankingInfo?: Record<string, number>
}

export interface DatesConfig {
  daysFromNow: number
  blockedDefaultDates: string[]
}

export type Configs = {
  hso: HsoConfig[]
  lov: ListOfValuesItem[]
  exchangeRates: ExchangeRates
}

export type GetConfig = () => Promise<Configs>

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
function evaluateHsoConfigFilters(
  filters: HsoConfigFilter[],
  context: HsoConfigContext
) {
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
export function filterFromHsoConfig(
  hsoConfig: HsoConfig[],
  hsoConfigType: HsoConfigType,
  context: HsoConfigContext
) {
  const config = hsoConfig.find(({objectID}) => objectID === hsoConfigType)

  if (config?.filters === undefined) return []

  return evaluateHsoConfigFilters(config.filters, context)
}

/**
 * Generate exchange rates object from response
 *
 * @param hits
 */
function exchangeRatesFromResponse(hits: ExchangeRateHit[]) {
  const rates: ExchangeRates = {}

  hits.forEach(({objectID, rate}) => {
    rates[objectID] = rate
  })

  return rates
}

/**
 * Get LOV attributes to retrieve with Translated attributes
 *
 * @param languages
 */
function getLovAttributesToRetrieve(languages: string[]) {
  const translatedAttributes = getTranslatedAttributes(languages, ['value'])

  return ['id', 'categoryID', 'objectID', ...translatedAttributes]
}

export function loadConfigs(
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  {languages, currencies}: {languages: string[]; currencies: string[]}
) {
  return async () => {
    const currencyFacetFilters = currencies.map(
      (currency) => `objectID:${currency}`
    )

    const requests = [
      {
        indexName: getIndexName('hso'),
        params: {
          attributesToHighlight: []
        }
      },
      {
        indexName: getIndexName('lov'),
        params: {
          hitsPerPage: 1000,
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

    const {results} = await search<
      HsoConfig | ListOfValuesItem | ExchangeRateHit
    >(requests)

    const hso = results[0]?.hits as HsoConfig[]
    const lov = results[1]?.hits as ListOfValuesItem[]
    const exchangeRates = results[2]?.hits as ExchangeRateHit[]

    return {
      hso,
      lov,
      exchangeRates: exchangeRatesFromResponse(exchangeRates)
    }
  }
}
