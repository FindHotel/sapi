import jexl from 'jexl'
import {getIndexName, PlaceSearchParameters} from './algolia'

// export type ListOfValuesItem = {
//   id: number
//   categoryID?: number
//   objectID: string
//   value: Record<string, string | number>
//   _rankingInfo?: Record<string, undefined>
// }

type SearchConfigFilter = {
  criteria: string
  description: string
  value: string[]
}

type SearchConfigObject = {
  objectID: string
  description: string
  filters: SearchConfigFilter[]
}

export type SearchConfig = string[]

type ConfigSearchType = 'place_search' | 'hotel_search'

jexl.addTransform('map', (arr, s) => arr.map(x => s.replace(/%s/g, x)))

const buildFiltersFromConfig = (rules, context): SearchConfig => {
  let filters = []

  rules.some(rule => {
    try {
      if (jexl.evalSync(rule.criteria, context)) {
        filters = rule.value.map(line => jexl.evalSync(line, context))
      }
    } catch {}

    return filters.length > 0
  })

  return filters
}

export const getFilterFromConfig = (
  configs: SearchConfigObject[],
  searchType: ConfigSearchType,
  parameters: PlaceSearchParameters
): SearchConfig => {
  const config = configs.find(({objectID}) => objectID === searchType)

  return buildFiltersFromConfig(config?.filters, parameters)
}

export const getLovAttributesToRetrive = (language = 'en'): string[] => {
  return ['id', 'categoryID', 'objectID', `value.${language}`]
}

export const getConfigs = (algoliaClient, language) => async () => {
  const requests = [
    {
      indexName: getIndexName('hotelranking'),
      params: {
        attributesToHighlight: null
      }
    },
    {
      indexName: getIndexName('lov'),
      params: {
        hitsPerPage: 1000, // max page size
        attributesToRetrieve: getLovAttributesToRetrive(language),
        attributesToHighlight: null,
        getRankingInfo: true
      }
    }
  ]

  const {
    results: [hso, lov]
  } = await algoliaClient.search(requests)

  return {
    hso: hso?.hits,
    lov: lov?.hits
  }
}
