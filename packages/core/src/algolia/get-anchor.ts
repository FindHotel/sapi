import {AlgoliaClient} from '..'
import {IndexNameGetter} from '../configs'

import {
  getTranslatedAttributes,
  hitToHotel,
  hitToHotelTypeAnchor,
  hitToPlaceTypeAnchor
} from './utils'

import {Anchor, Hotel, Location} from '../types'

interface GetAnchorParameters {
  hotelId?: string
  placeId?: string
  query?: string
  geolocation?: Location
}

export type AnchorType = 'hotel' | 'place'

enum AnchorRequestType {
  Hotel,
  Place,
  Location,
  Query,
  Unknown
}

export type AnchorObject = {
  anchorType: AnchorType
  anchor: Anchor
  anchorHotel: Hotel | undefined
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

const hotelAttributesToRetrieve = (languages: string[]): string[] => {
  const translatedAttributes = getTranslatedAttributes(languages, [
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
    ...translatedAttributes
  ]
}

const getAnchorRequestType = (
  parameters: GetAnchorParameters
): AnchorRequestType => {
  if (parameters.hotelId) return AnchorRequestType.Hotel
  if (parameters.placeId) return AnchorRequestType.Place
  if (parameters.geolocation) return AnchorRequestType.Location
  if (parameters.query) return AnchorRequestType.Query
  return AnchorRequestType.Unknown
}

export const getAnchor = (
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  {languages}: {languages: string[]}
) => async (parameters: GetAnchorParameters): Promise<AnchorObject> => {
  const anchorRequestType = getAnchorRequestType(parameters)
  const {hotelId, placeId, query} = parameters
  const requests = []
  let anchor
  let anchorHotel

  switch (anchorRequestType) {
    case AnchorRequestType.Query: {
      requests.push({
        indexName: getIndexName('autocomplete'),
        params: {
          query,
          hitsPerPage: 1,
          attributesToRetrieve: autocompleteAttributesToRetrieve(languages),
          attributesToHighlight: []
        }
      })
      requests.push({
        indexName: getIndexName('hotel'),
        params: {
          query,
          hitsPerPage: 1,
          attributesToRetrieve: hotelAttributesToRetrieve(languages),
          attributesToHighlight: []
        }
      })

      break
    }

    case AnchorRequestType.Hotel: {
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

    case AnchorRequestType.Place:
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

  const response = await search(requests)

  const [anchorResponse, anchorHotelResponse] = response.results ?? []
  const anchorType: AnchorType = anchorResponse.hits?.[0]?.objectType ?? 'place'

  switch (anchorType) {
    case 'hotel':
      anchor = hitToHotelTypeAnchor(anchorResponse?.hits?.[0], languages)
      anchorHotel = hitToHotel(anchorHotelResponse?.hits?.[0], languages)
      break

    case 'place':
    default:
      anchor = hitToPlaceTypeAnchor(anchorResponse?.hits?.[0], languages)
      break
  }

  return {
    anchorType,
    anchor,
    anchorHotel
  }
}
