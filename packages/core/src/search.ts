import {Base} from '.'

import {
  OnRatesCb,
  GetRatesParameters,
  RatesResponse,
  augmentRaaResponse
} from './raa'

import {
  filterFromHsoConfig,
  HsoConfigType,
  HsoConfig,
  HsoFilter,
  DatesConfig
} from './configs'

import {generateSearchId, getCheckInNights} from './utils'
import {getCheckInCheckOutDates} from './get-dates'

import {
  getAnchor,
  geoSearch,
  GeoSearchParameters,
  GeoSearchResults,
  AnchorObject,
  AnchorType
} from './algolia'

import {
  Anchor,
  PlaceAnchor,
  ApiSearchParameters,
  Hotel,
  Rate,
  AnonymousId,
  SearchParameters
} from './types'

type OnSearchCb = (response: Record<string, unknown>) => void
type OnHotelsCb = (response: Record<string, unknown>) => void
type OnCompleteCb = (response: Record<string, unknown>) => void

type HotelWithRates = Hotel & {
  rates?: Rate
}

type StaticResultsData = GeoSearchResults & {
  anchorHotel?: Hotel
}

type StaticResults = {
  anchor: Anchor
  results: StaticResultsData
}

type ResultsWithRates = StaticResults & {
  rates?: RatesResponse
}

interface Options {
  anonymousId: AnonymousId
  language: string
  currency: string
  country: string
  pageSize: number
}

export type Search = (
  parameters: ApiSearchParameters,
  callbacks: {
    onSearch?: OnSearchCb
    onHotels?: OnHotelsCb
    onRates?: OnRatesCb
    onComplete?: OnCompleteCb
  }
) => Promise<Record<string, unknown>>

const DEFAULT_ROOMS = '2'
const DEFAULT_DEVICE_CATEGORY = 'desktop'

const augmentHitWithRates = (hit: Hotel, rates?: Rate[]): HotelWithRates => {
  const hitRates = rates?.find((rate) => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

const prepareResults = (results: GeoSearchResults, anchorHotel?: Hotel) => {
  const {facets, hits, length, nbHits, offset} = results

  return {
    anchorHotel,
    facets,
    hits,
    length,
    nbHits,
    offset
  }
}

const getHsoConfigType = (anchorType: AnchorType): HsoConfigType => {
  switch (anchorType) {
    case AnchorType.Hotel: {
      return 'hotel_search'
    }

    case AnchorType.Place: {
      return 'place_search'
    }

    default:
      return undefined
  }
}

const getHsoFilter = (
  hso: HsoConfig[],
  searchParameters: SearchParameters,
  anchorObject: AnchorObject
): HsoFilter => {
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

const prepareGeoSearchParameters = (
  anchor: Anchor,
  parameters: SearchParameters,
  offset: number,
  anchorHotelId?: string
): GeoSearchParameters => {
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

const prepareSearchParameters = (
  parameters: ApiSearchParameters,
  options: Options,
  dates: DatesConfig
): SearchParameters => {
  const {
    searchId,
    rooms = DEFAULT_ROOMS,
    deviceCategory = DEFAULT_DEVICE_CATEGORY
  } = parameters

  const {checkIn, checkOut} = getCheckInCheckOutDates(parameters, dates)

  return {
    ...parameters,
    checkIn,
    checkOut,
    rooms,
    searchId: searchId ?? generateSearchId(parameters, options),
    deviceCategory
  }
}

const generateDestinationString = (hits: Hotel[]) => {
  return hits.map((hit) => hit.objectID).join(',')
}

const hotelsHaveStaticPosition = (parameters: SearchParameters) => {
  if (parameters.sortField === 'price') {
    return false
  }

  if (
    parameters.filters?.priceMin !== undefined ||
    parameters.filters?.priceMax !== undefined
  ) {
    return false
  }

  return true
}

const getRequestSize = (
  anchorObject: AnchorObject,
  parameters: SearchParameters,
  options: Options
) => {
  const {anchor, anchorType} = anchorObject

  if (
    anchor.pageSize !== undefined &&
    anchor.pageSize >= options.pageSize &&
    parameters.filters?.priceMin === undefined &&
    parameters.filters?.priceMax === undefined &&
    parameters.sortField !== 'price'
  ) {
    return anchor.pageSize
  }

  return anchorType === AnchorType.Hotel ? 65 : 45
}

export const search = (base: Base): Search => {
  const {algoliaClient, raaClient, options, configs} = base
  const {hso, exchangeRates, dates} = configs
  const {language, fallBackLanguages, currency} = options
  const languages = [language, ...fallBackLanguages]
  const exchangeRate = exchangeRates[currency]

  return async (parameters, callbacks) => {
    let loadMoreOffset = 0
    const {onSearch, onHotels, onRates, onComplete} = callbacks
    const searchParameters = prepareSearchParameters(parameters, options, dates)

    if (typeof onSearch === 'function') {
      onSearch({
        searchParameters,
        meta: {
          searchId: searchParameters.searchId
        }
      })
    }

    const anchorObject = await getAnchor(
      algoliaClient,
      languages
    )(searchParameters)

    const {anchor, anchorHotel} = anchorObject

    const geoSearchFn = geoSearch(algoliaClient, {
      languages,
      exchangeRate,
      priceBucketWidth: anchor.priceBucketWidth,
      requestSize: getRequestSize(anchorObject, searchParameters, options),
      hsoFilter: getHsoFilter(hso, searchParameters, anchorObject)
    })

    const run = async (offset = 0): Promise<ResultsWithRates> => {
      const results = await geoSearchFn(
        prepareGeoSearchParameters(
          anchor,
          searchParameters,
          offset,
          anchorHotel?.objectID
        )
      )

      const staticResults = {
        anchor,
        results: prepareResults(results, anchorHotel)
      }

      if (typeof onHotels === 'function') {
        onHotels({
          ...staticResults,
          meta: {
            searchId: searchParameters.searchId,
            hotelsHaveStaticPosition: hotelsHaveStaticPosition(searchParameters)
          }
        })
      }

      let rates

      /** Request rates */
      if (searchParameters.rates) {
        const ratesParameters = {
          ...searchParameters,
          destination: generateDestinationString(results.hits),
          anchorDestination: anchorHotel?.objectID
        }

        rates = await raaClient.getRates(
          ratesParameters,
          (response: RatesResponse) => {
            if (typeof onRates === 'function') {
              onRates(
                augmentRaaResponse(response, {
                  ...ratesParameters,
                  ...anchor,
                  exchangeRate
                })
              )
            }
          }
        )

        rates = augmentRaaResponse(rates, {
          ...ratesParameters,
          ...anchor,
          exchangeRate
        })
      }

      if (typeof onComplete === 'function') {
        onComplete({
          ...staticResults,
          rates
        })
      }

      return {
        ...staticResults,
        rates
      }
    }

    const searchResults = await run(searchParameters.offset)

    return {
      getHits: () => searchResults.results.hits,
      getAnchor: () => searchResults.anchor,
      getAnchorHotel: () => searchResults.results.anchorHotel,
      getRates: () => searchResults.rates,
      getHitsRates: () => searchResults.rates?.hotelsRates,
      getAnchorHotelRate: () => searchResults.rates?.anchorHotelRate,
      loadRates: async (hitId: string) => {
        if (!hitId) {
          throw new Error('Hotel id must be provided')
        }

        let isAnchor = false
        let anchorDestination
        const destination = hitId

        if (hitId === anchorHotel?.objectID) {
          isAnchor = true
          anchorDestination = hitId
        }

        const ratesParameters: GetRatesParameters = {
          ...searchParameters,
          getAllOffers: true,
          destination,
          anchorDestination
        }

        const rates = await raaClient.getRates(ratesParameters)

        if (isAnchor) {
          return rates.anchorHotelRate
        }

        return rates.hotelsRates?.find(({id}: {id: string}) => id === hitId)
      },
      getHitsWithRates: () => {
        return {
          anchorHotel: {
            ...searchResults.results.anchorHotel,
            rates: searchResults.rates?.anchorHotelRate
          },
          hits: searchResults.results.hits.map((hit: Hotel) =>
            augmentHitWithRates(hit, searchResults.rates?.hotelsRates)
          )
        }
      },
      loadMore: async () => {
        const requestSize = getRequestSize(
          anchorObject,
          searchParameters,
          options
        )

        loadMoreOffset += requestSize

        return run(loadMoreOffset)
      }
    }
  }
}
