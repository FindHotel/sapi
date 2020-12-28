import {AlgoliaClient} from '..'
import {getIndexName, getLocalizedAttributes} from './utils'
import {Anchor, Hit, Location} from '../types'

export enum AnchorType {
  Hotel,
  Place,
  Loaction,
  Query,
  Unknown
}

export type AnchorObject = {
  anchorType: AnchorType
  anchor: Anchor
  anchorHotel: Hit
}

interface GetAnchorParameters {
  hotelId?: string
  placeId?: string
  query?: string
  geolocation?: Location
}

const autocompleteAttributesToRetrieve = (languages: string[]): string[] => {
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

const hotelAttributesToRetrieve = (languages: string[]): string[] => {
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

const getAnchorType = (parameters: GetAnchorParameters): AnchorType => {
  if (parameters.hotelId) return AnchorType.Hotel
  if (parameters.placeId) return AnchorType.Place
  if (parameters.geolocation) return AnchorType.Loaction
  if (parameters.query) return AnchorType.Query
  return AnchorType.Unknown
}

export const getAnchor = (
  algoliaClient: AlgoliaClient,
  languages: string[]
) => async (parameters: GetAnchorParameters): Promise<AnchorObject> => {
  const anchorType = getAnchorType(parameters)
  const {hotelId, placeId} = parameters
  const requests = []

  switch (anchorType) {
    case AnchorType.Hotel: {
      if (hotelId) {
        requests.push(
          {
            indexName: getIndexName('autocomplete'),
            params: {
              facetFilters: [[`objectID:hotel:${hotelId}`]],
              attributesToRetrieve: autocompleteAttributesToRetrieve(languages),
              attributesToHighlight: []
            }
          },
          {
            indexName: getIndexName('hotel'),
            params: {
              facetFilters: [[`objectID:${hotelId}`]],
              attributesToRetrieve: hotelAttributesToRetrieve(languages),
              attributesToHighlight: []
            }
          }
        )
      }

      break
    }

    case AnchorType.Place:
    default: {
      if (placeId) {
        requests.push({
          indexName: getIndexName('autocomplete'),
          params: {
            facetFilters: [[`objectID:place:${placeId}`]],
            attributesToRetrieve: autocompleteAttributesToRetrieve(languages),
            attributesToHighlight: []
          }
        })
      }

      break
    }
  }

  const response = await algoliaClient.search(requests)
  const [anchorResponse, anchorHotelResponse] = response.results || []

  return {
    anchorType,
    anchor: anchorResponse?.hits[0],
    anchorHotel: anchorHotelResponse?.hits[0]
  }
}
