import {AlgoliaClient} from '..'
import {getIndexName, getLocalizedAttributes} from './utils'

import {Anchor, Hit} from './types'

export type AnchorResponse = {
  anchor: Anchor
  anchorHit: Hit
}

type GetAnchorParameters = {
  placeId: string
  hotelId: string
}

const getAutocompleteAttributesToRetrieve = (languages: string[]): string[] => {
  const localizedAttributes = getLocalizedAttributes(languages, [
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
    ...localizedAttributes
  ]
}

const getHotelAttributesToRetrieve = (languages: string[]): string[] => {
  const localizedAttributes = getLocalizedAttributes(languages, [
    'hotelName',
    'placeADName',
    'placeDN',
    'address'
  ])

  return [
    '_geoloc',
    'checkInTime',
    'checkOutTime',
    'facilities',
    'guestRating',
    'guestType',
    'imageURIs',
    'propertyTypeId',
    'reviewCount',
    'starRating',
    'themeIds',
    'objectID',
    'lastBooked',
    'isDeleted',
    'pricing',
    'sentiments',
    'tags',
    ...localizedAttributes
  ]
}

export const getAnchor = (
  algoliaClient: AlgoliaClient,
  languages: string[]
) => async (
  parameters: Partial<GetAnchorParameters>
): Promise<AnchorResponse> => {
  const {placeId, hotelId} = parameters
  const facetFilters = []

  if (hotelId) {
    facetFilters.push(`objectID:hotel:${hotelId}`)
  } else if (placeId) {
    facetFilters.push(`objectID:place:${placeId}`)
  }

  const requests = [
    {
      indexName: getIndexName('autocomplete'),
      params: {
        facetFilters: [facetFilters],
        attributesToRetrieve: getAutocompleteAttributesToRetrieve(languages),
        attributesToHighlight: []
      }
    }
  ]

  if (hotelId) {
    requests.push({
      indexName: getIndexName('hotel'),
      params: {
        facetFilters: [[`objectID:${hotelId}`]],
        attributesToRetrieve: getHotelAttributesToRetrieve(languages),
        attributesToHighlight: []
      }
    })
  }

  const response = await algoliaClient.search(requests)
  const [anchorResponse, anchorHitResponse] = response?.results || []

  return {
    anchor: anchorResponse?.hits[0],
    anchorHit: anchorHitResponse?.hits[0]
  }
}
