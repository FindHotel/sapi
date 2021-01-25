import {AlgoliaClient} from '..'
import {IndexNameGetter} from '../configs'

import {getTranslatedAttributes, hitToHotelTypeAnchor} from './utils'

import {HotelAnchor, QuerySearchParameters} from '../types'

enum AnchorType {
  Hotel,
  Place,
  Loaction,
  Query,
  Unknown
}

type AnchorObject = {
  suggestsType: AnchorType.Hotel
  suggests: HotelAnchor
}

const autocompleteAttributesToRetrieve = (languages: string[]): string[] => {
  const translatedAttributes = getTranslatedAttributes(languages, [
    'placeName',
    'placeADN',
    'placeDN',
    'hotelName'
  ])

  return [
    'objectType',
    'placeType',
    'placeCategory',
    'objectID',
    '_geoloc',
    'priceBucketWidth',
    'polygon',
    'pageSize',
    ...translatedAttributes
  ]
}

export const suggest = (
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  languages: string[]
) => async ({query}: QuerySearchParameters): Promise<AnchorObject> => {
  const requests = [
    {
      indexName: getIndexName('autocomplete'),
      params: {
        query,
        attributesToRetrieve: autocompleteAttributesToRetrieve(languages),
        attributesToHighlight: []
      }
    }
  ]

  const response = await search(requests)
  const [suggestsResponse] = response.results || []

  const suggests = hitToHotelTypeAnchor(suggestsResponse?.hits[0], languages)

  return {
    suggestsType: AnchorType.Hotel,
    suggests
  }
}
