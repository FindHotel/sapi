import {AlgoliaClient} from '..'
import {IndexNameGetter} from '../configs'

import {
  getTranslatedAttributes,
  hitToPlaceSuggest,
  hitToHotelSuggest
} from './utils'

import {SuggestHit} from '../types'

interface Options {
  languages: string[]
  suggestsCount?: number
}

function getAttributesToHighlight(languages: string[]) {
  return getTranslatedAttributes(languages, ['placeName', 'hotelName'])
}

function getAttributesToRetrieve(languages: string[]) {
  const translatedAttributes = getTranslatedAttributes(languages, [
    'placeName',
    'placeADN',
    'placeDN',
    'hotelName'
  ])

  return ['objectType', 'objectID', 'placeType', ...translatedAttributes]
}

export function loadSuggests(
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  {languages, suggestsCount = 6}: Options
) {
  return async (query: string) => {
    const requests = [
      {
        indexName: getIndexName('autocomplete'),
        params: {
          query,
          hitsPerPage: suggestsCount,
          attributesToRetrieve: getAttributesToRetrieve(languages),
          attributesToHighlight: getAttributesToHighlight(languages)
        }
      }
    ]

    const {results} = await search<SuggestHit>(requests)

    return results[0]?.hits.map((hit) => {
      switch (hit.objectType) {
        case 'hotel':
          return hitToHotelSuggest(hit, languages)

        case 'place':
        default:
          return hitToPlaceSuggest(hit, languages)
      }
    })
  }
}
