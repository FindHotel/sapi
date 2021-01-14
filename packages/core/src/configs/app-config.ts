import {AlgoliaClient} from '..'

interface Response {
  results: Array<{hits: any}>
}

type IndexType =
  | 'autocomplete'
  | 'hotel'
  | 'hso'
  | 'lov'
  | 'currency'
  | 'config'

export interface IndexNameGetter {
  getIndexName: (name: IndexType) => string
}

export interface AppConfig extends IndexNameGetter {
  getPageSize: () => number
  getRaaEndpoint: () => string
  getDatesConfig: () => {
    blockedDefaultDates: string[]
    daysFromNow: number
  }
}

interface IndexVariation {
  name: string
  variationID?: string
}

export const loadAppConfig = (
  {search}: AlgoliaClient,
  variationIds: Record<string, string>
) => async (clientId: string): Promise<AppConfig> => {
  const {results}: Response = await search([
    {
      indexName: 'prod_sapicfg_v1',
      params: {
        attributesToHighlight: [],
        facetFilters: [[`objectID:${clientId}`]]
      }
    }
  ])

  const config = results[0].hits[0] ?? {}

  return {
    getIndexName: (name: IndexType) => {
      const variations: IndexVariation[] = config[`${name}Index`]

      if (variations === undefined) {
        throw new Error(`Invalid index name ${name}`)
      }

      const variationId = variationIds[name]
      const index =
        variations.find((index) => index.variationID === variationId) ||
        variations[0]

      return index.name
    },
    getPageSize: () => config.pageSize,
    getRaaEndpoint: () => config.raa.endpoint,
    getDatesConfig: () => ({
      blockedDefaultDates: config.blockedDefaultDates ?? [],
      daysFromNow: config.daysFromNow ?? 45
    })
  }
}
