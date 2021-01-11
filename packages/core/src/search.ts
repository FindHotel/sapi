import differenceInDays from 'date-fns/differenceInDays'
import format from 'date-fns/format'

import {Base} from '.'

import {
  OnRatesCb,
  GetRatesParameters,
  RatesResponse,
  augmentRAAResponse
} from './raa'

import {
  Configs,
  filterFromHsoConfig,
  HsoConfigType,
  HsoConfig,
  HsoFilter
} from './configs'

import {generateSearchId} from './utils'
import {getCheckInCheckOutDates} from './get-dates'

import {
  getAnchor,
  geoSearch,
  GeoSearchParameters,
  GeoSearchResults,
  AnchorObject,
  AnchorType,
  PRICE_BUCKETS_COUNT
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

// TODO: Remove it =)
const getDataFromStaticResults = (
  staticResults: GeoSearchResults,
  anchorHotel?: Hotel
): StaticResultsData => {
  const {facets, hits, length, nbHits, offset} = staticResults

  // Remove anchorHotel from results
  const hitsFiltered = anchorHotel
    ? hits.filter((hit) => hit.objectID !== anchorHotel.objectID)
    : hits

  return {
    facets,
    hits: hitsFiltered,
    anchorHotel,
    length,
    nbHits,
    offset
  }
}

const getCheckInNights = (
  checkIn?: string,
  checkOut?: string
): string | undefined => {
  if (!checkIn || !checkOut) return

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)
  const checkInFormatted = format(checkInDate, 'yyMMdd')
  const nights = differenceInDays(checkOutDate, checkInDate)

  return `${checkInFormatted}-${nights}`
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
  anchorHotelId?: string
): GeoSearchParameters => {
  const geoSearchParameters = {
    ...parameters,
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
  configs: Configs
): SearchParameters => {
  const {
    searchId,
    rooms = DEFAULT_ROOMS,
    deviceCategory = DEFAULT_DEVICE_CATEGORY
  } = parameters

  const {checkIn, checkOut} = getCheckInCheckOutDates(parameters, configs.dates)

  return {
    ...parameters,
    checkIn,
    checkOut,
    rooms,
    searchId: searchId ?? generateSearchId(parameters, options),
    deviceCategory
  }
}

const generateDestinationString = (hits: Hotel[]): string =>
  hits.map((hit) => hit.objectID).join(',')

const hotelsHaveStaticPosition = (parameters: SearchParameters): boolean => {
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

export const search = (base: Base): Search => {
  const {algoliaClient, raaClient, options, configs} = base
  const {hso, exchangeRates} = configs
  const {language, fallBackLanguages, pageSize, currency} = options
  const languages = [language, ...fallBackLanguages]
  const exchangeRate = exchangeRates[currency]

  return async (parameters, callbacks) => {
    const {onSearch, onHotels, onRates, onComplete} = callbacks
    let loadMoreOffset = 0

    const searchParameters = prepareSearchParameters(
      parameters,
      options,
      configs
    )

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
      pageSize,
      hsoFilter: getHsoFilter(hso, searchParameters, anchorObject),
      exchangeRate,
      priceBucketWidth: anchor.priceBucketWidth
    })

    const runSearch = async (offset = 0): Promise<ResultsWithRates> => {
      const geoSearchParameters = prepareGeoSearchParameters(
        anchor,
        {
          ...searchParameters,
          offset
        },
        anchorHotel?.objectID
      )

      const results = await geoSearchFn(geoSearchParameters)

      const staticResults: StaticResults = {
        anchor,
        results: getDataFromStaticResults(results, anchorHotel)
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

      let ratesResults

      /** Request rates */
      if (searchParameters.rates) {
        const ratesParameters = {
          ...searchParameters,
          destination: generateDestinationString(results.hits),
          anchorDestination: anchorHotel?.objectID
        }

        const {priceBucketWidth} = anchor

        ratesResults = await raaClient.getRates(
          ratesParameters,
          (response: RatesResponse) => {
            if (typeof onRates === 'function') {
              onRates(
                augmentRAAResponse(response, ratesParameters, {
                  exchangeRate,
                  priceBucketWidth,
                  priceBucketCount: PRICE_BUCKETS_COUNT
                })
              )
            }
          }
        )

        ratesResults = augmentRAAResponse(ratesResults, ratesParameters, {
          exchangeRate,
          priceBucketWidth,
          priceBucketCount: PRICE_BUCKETS_COUNT
        })
      }

      if (typeof onComplete === 'function') {
        onComplete({
          ...staticResults,
          rates: ratesResults
        })
      }

      return {
        ...staticResults,
        rates: ratesResults
      }
    }

    const searchResults = await runSearch(searchParameters.offset)

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
        loadMoreOffset += pageSize
        const searchResults = await runSearch(loadMoreOffset)

        return searchResults
      }
    }
  }
}
