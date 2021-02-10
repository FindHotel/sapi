import {Base} from '.'

import {loadSuggests} from './algolia'

import {Suggestion} from './types'

export type SuggestFn = (
  query: string,
  suggestsCount?: number
) => Promise<Suggestion[]>

export function suggest(base: Base): SuggestFn {
  const {
    appConfig,
    algoliaClient,
    options: {languages}
  } = base

  return async (query, suggestsCount) => {
    const suggests = await loadSuggests(algoliaClient, appConfig, {
      suggestsCount,
      languages
    })(query)

    return suggests
  }
}
