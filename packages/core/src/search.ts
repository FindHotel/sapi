import {Except} from 'type-fest'

import {Base} from '.'

import {OffersResponse, augmentRaaResponse} from './raa'

import {filterFromHsoConfig, HsoConfig, DatesConfig} from './configs'

import {generateSearchId, createState} from './utils'
import {getCheckInCheckOutDates} from './dates'

import {
  getAnchor,
  geoSearch,
  getCheckInNights,
  GeoSearchParameters,
  AnchorObject,
  AnchorType,
  Facets
} from './algolia'

import {
  Anchor,
  PlaceAnchor,
  ApiSearchParameters,
  Hotel,
  HotelOfferEntity,
  AnonymousId,
  SearchParameters
} from './types'

interface SearchResults {
  hotelEntities: Record<string, Hotel>
  hotelOfferEntities: Record<string, HotelOfferEntity>
  hotelIds: string[]
  searchParameters: SearchParameters
  searchId: string
  hotelsHaveStaticPosition: boolean
  anchor: Anchor
  anchorType: AnchorType
  anchorHotel?: Hotel
  anchorHotelOffer?: HotelOfferEntity
  facets: Facets
  resultsCount: number
  resultsCountTotal: number
  offset: number
}

type OnStart = (
  response: Pick<SearchResults, 'searchId' | 'searchParameters'>
) => void

type OnAnchorReceived = (
  response: Pick<
    SearchResults,
    'searchId' | 'searchParameters' | 'anchor' | 'anchorHotel' | 'anchorType'
  >
) => void

type OnHotelsReceived = (
  response: Except<SearchResults, 'hotelOfferEntities' | 'anchorHotelOffer'>
) => void

type OnOffersReceived = (response: SearchResults) => void

type OnComplete = (response: SearchResults) => void

interface Options {
  anonymousId: AnonymousId
  language: string
  currency: string
  userCountry: string
  requestSize: number
  pageSize: number
}

export type SearchFn = (
  parameters: ApiSearchParameters,
  callbacks?: {
    onStart?: OnStart
    onAnchorReceived?: OnAnchorReceived
    onHotelsReceived?: OnHotelsReceived
    onOffersReceived?: OnOffersReceived
    onComplete?: OnComplete
  }
) => Promise<{
  loadOffers: (objectID: string) => Promise<HotelOfferEntity | undefined>
  loadMore: () => Promise<SearchResults>
}>

const DEFAULT_ROOMS = '2'

function getHsoConfigType(anchorType: AnchorType) {
  switch (anchorType) {
    case 'hotel': {
      return 'hotel_search'
    }

    case 'place': {
      return 'place_search'
    }

    default:
      return undefined
  }
}

function getHsoFilter(
  hso: HsoConfig[],
  searchParameters: SearchParameters,
  anchorObject: AnchorObject
) {
  const {anchorType, anchorHotel} = anchorObject
  const {checkIn, checkOut} = searchParameters
  const hsoConfigType = getHsoConfigType(anchorType)
  const hsoConfigContext = {
    anchorHotel,
    searchParameters,
    checkInNights: getCheckInNights(checkIn, checkOut)
  }

  return filterFromHsoConfig(hso, hsoConfigType, hsoConfigContext)
}

function prepareGeoSearchParameters(
  anchor: Anchor,
  parameters: SearchParameters,
  offset: number,
  anchorHotelId?: string
): GeoSearchParameters {
  const geoSearchParameters = {
    ...parameters,
    offset,
    anchorHotelId
  }

  if (geoSearchParameters.boundingBox?.length) {
    return geoSearchParameters
  }

  const {polygon} = anchor as PlaceAnchor

  if (polygon?.length) {
    return {
      ...geoSearchParameters,
      polygon
    }
  }

  if (anchor._geoloc) {
    return {
      ...geoSearchParameters,
      geolocation: anchor._geoloc
    }
  }

  return geoSearchParameters
}

function prepareSearchParameters(
  parameters: ApiSearchParameters,
  dates: DatesConfig
): SearchParameters {
  const {rooms = DEFAULT_ROOMS} = parameters

  const {checkIn, checkOut} = getCheckInCheckOutDates(parameters, dates)

  return {
    ...parameters,
    checkIn,
    checkOut,
    rooms
  }
}

function generateDestinationString(hotelIds: string[]) {
  return hotelIds.join(',')
}

function hotelsHaveStaticPosition(
  parameters: SearchParameters,
  pageSize: number,
  facets?: Facets
) {
  if (parameters.sortField === 'price') {
    return false
  }

  if (
    parameters.filters?.priceMin !== undefined ||
    parameters.filters?.priceMax !== undefined
  ) {
    return false
  }

  if (facets) {
    const checkInNights = getCheckInNights(
      parameters.checkIn,
      parameters.checkOut
    )

    const availabilityCount = facets.tags?.[`a${checkInNights}`] ?? 0

    return availabilityCount >= pageSize
  }

  return true
}

function getRequestSize(
  anchorObject: AnchorObject,
  parameters: SearchParameters,
  options: Options
) {
  const {anchor, anchorType} = anchorObject

  if (
    anchor.pageSize !== undefined &&
    anchor.pageSize >= options.requestSize &&
    parameters.filters?.priceMin === undefined &&
    parameters.filters?.priceMax === undefined &&
    parameters.sortField !== 'price'
  ) {
    return anchor.pageSize
  }

  return anchorType === 'hotel' ? 45 : 65
}

export function search(base: Base): SearchFn {
  const {appConfig, algoliaClient, raaClient, options, configs} = base
  const {hso, exchangeRates, dates} = configs
  const {languages, currency} = options
  const exchangeRate = exchangeRates[currency]

  return async (parameters, callbacks = {}) => {
    const searchResults = createState({} as SearchResults)
    let loadMoreOffset = 0
    const {
      onStart,
      onAnchorReceived,
      onHotelsReceived,
      onOffersReceived,
      onComplete
    } = callbacks

    /** 1 - Prepare search parameters and generate SearchId */
    const searchParameters = prepareSearchParameters(parameters, dates)
    const searchId = generateSearchId(parameters, options)

    searchResults.update((state) => {
      state.searchParameters = searchParameters
      state.searchId = searchId
    })
    /** END */

    if (typeof onStart === 'function') {
      onStart(searchResults.current())
    }

    /** 2 - Get Anchor + Anchor hotel */
    const anchorObject = await getAnchor(
      algoliaClient,
      appConfig,
      options
    )(searchParameters)

    searchResults.update((state) => {
      state.anchor = anchorObject.anchor
      state.anchorType = anchorObject.anchorType
      state.anchorHotel = anchorObject.anchorHotel
    })

    if (typeof onAnchorReceived === 'function') {
      onAnchorReceived(searchResults.current())
    }
    /** END */

    /** 3 - Initialize geolocation search func */
    const geoSearchFn = geoSearch(algoliaClient, appConfig, {
      languages,
      exchangeRate,
      priceBucketsCount: options.priceBucketsCount,
      priceBucketWidth: anchorObject.anchor.priceBucketWidth,
      requestSize: getRequestSize(anchorObject, searchParameters, options),
      hsoFilter: getHsoFilter(hso, searchParameters, anchorObject)
    })
    /** END */

    /** 4 - Search */
    const run = async (offset = 0) => {
      /** 4.1 - Geolocation search */
      if (searchParameters.skipGeoSearch !== true) {
        const geoSearchResults = await geoSearchFn(
          prepareGeoSearchParameters(
            anchorObject.anchor,
            searchParameters,
            offset,
            anchorObject.anchorHotel?.objectID
          )
        )

        searchResults.update((state) => {
          state.facets = geoSearchResults.facets
          state.resultsCount = geoSearchResults.resultsCount
          state.resultsCountTotal = geoSearchResults.resultsCountTotal
          state.offset = geoSearchResults.offset
          state.hotelIds = geoSearchResults.hotelIds
          state.hotelEntities = geoSearchResults.hotelEntities
          state.hotelsHaveStaticPosition = hotelsHaveStaticPosition(
            searchParameters,
            options.pageSize,
            geoSearchResults.facets
          )
        })
      }
      /** END */

      if (typeof onHotelsReceived === 'function') {
        onHotelsReceived(searchResults.current())
      }

      /** 4.2 - Get offers */
      if (searchParameters.offers) {
        const hotelIds = searchResults.get('hotelIds')

        const getOffersParameters = {
          ...searchParameters,
          searchId,
          destination: hotelIds ? generateDestinationString(hotelIds) : '',
          anchorDestination: anchorObject.anchorHotel?.objectID
        }

        const offersResponse = await raaClient.getOffers(
          getOffersParameters,
          (response: OffersResponse) => {
            const augmentedRaaResponse = augmentRaaResponse(response, {
              ...getOffersParameters,
              ...anchorObject.anchor,
              ...options,
              exchangeRate
            })

            searchResults.update((state) => {
              state.hotelIds = augmentedRaaResponse.anchorHotelOffer
                ? state.hotelIds
                : augmentedRaaResponse.hotelIds

              state.hotelOfferEntities = augmentedRaaResponse.hotelOfferEntities
              state.anchorHotelOffer = augmentedRaaResponse.anchorHotelOffer
            })

            if (typeof onOffersReceived === 'function') {
              onOffersReceived(searchResults.current())
            }
          }
        )

        const augmentedRaaResponse = augmentRaaResponse(offersResponse, {
          ...getOffersParameters,
          ...anchorObject.anchor,
          ...options,
          exchangeRate
        })

        searchResults.update((state) => {
          state.hotelIds = augmentedRaaResponse.hotelIds
          state.hotelOfferEntities = augmentedRaaResponse.hotelOfferEntities
          state.anchorHotelOffer = augmentedRaaResponse.anchorHotelOffer
        })
      }
      /** END */

      if (typeof onComplete === 'function') {
        onComplete(searchResults.current())
      }

      return searchResults.current()
    }

    const results = await run(searchParameters.offset)
    /** END */

    return {
      loadOffers: async (objectId) => {
        if (!objectId) {
          throw new Error('Hotel id must be provided')
        }

        const isAnchor = objectId === results.anchorHotel?.objectID

        const getOffersParameters = {
          ...searchParameters,
          searchId,
          getAllOffers: true,
          destination: objectId,
          anchorDestination: isAnchor ? objectId : undefined
        }

        const offersResponse = await raaClient.getOffers(getOffersParameters)

        if (isAnchor) {
          return offersResponse.anchorHotel
        }

        return offersResponse.hotels?.find(
          ({id}: {id: string}) => id === objectId
        )
      },
      loadMore: async () => {
        loadMoreOffset += getRequestSize(
          anchorObject,
          searchParameters,
          options
        )

        return run(loadMoreOffset)
      }
    }
  }
}
