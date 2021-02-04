import {AlgoliaClient} from '..'
import {IndexNameGetter} from '../configs'

import {
  getTranslatedAttributes,
  hitToHotel,
  hitToHotelTypeAnchor,
  hitToPlaceTypeAnchor
} from './utils'

import {Anchor, Hotel, Location, Hit, AnchorHit} from '../types'

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

function getAutocompleteAttributesToRetrieve(languages: string[]) {
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

function getHotelAttributesToRetrieve(languages: string[]) {
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

function getAnchorRequestType(parameters: GetAnchorParameters) {
  if (parameters.hotelId) return AnchorRequestType.Hotel
  if (parameters.placeId) return AnchorRequestType.Place
  if (parameters.geolocation) return AnchorRequestType.Location
  if (parameters.query) return AnchorRequestType.Query
  return AnchorRequestType.Unknown
}

export function getAnchor(
  {search}: AlgoliaClient,
  {getIndexName}: IndexNameGetter,
  {languages}: {languages: string[]}
) {
  return async (parameters: GetAnchorParameters) => {
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
            attributesToRetrieve: getAutocompleteAttributesToRetrieve(
              languages
            ),
            attributesToHighlight: []
          }
        })
        requests.push({
          indexName: getIndexName('hotel'),
          params: {
            query,
            hitsPerPage: 1,
            attributesToRetrieve: getHotelAttributesToRetrieve(languages),
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
                attributesToRetrieve: getAutocompleteAttributesToRetrieve(
                  languages
                ),
                attributesToHighlight: []
              }
            },
            {
              indexName: getIndexName('hotel'),
              params: {
                facetFilters: [[`objectID:${hotelId}`]],
                attributesToRetrieve: getHotelAttributesToRetrieve(languages),
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
              attributesToRetrieve: getAutocompleteAttributesToRetrieve(
                languages
              ),
              attributesToHighlight: []
            }
          })
        }

        break
      }
    }

    const {results} = await search<Hit | AnchorHit>(requests)

    const anchorHit = results[0]?.hits[0] as AnchorHit
    const anchorHotelHit = results[1]?.hits[0] as Hit

    switch (anchorHit?.objectType) {
      case 'hotel':
        anchor = hitToHotelTypeAnchor(anchorHit, languages)
        anchorHotel = hitToHotel(anchorHotelHit, languages)
        break

      case 'place':
      default:
        anchor = hitToPlaceTypeAnchor(anchorHit, languages)
        break
    }

    return {
      anchor,
      anchorHotel,
      anchorType: anchorHit?.objectType ?? 'place'
    }
  }
}
