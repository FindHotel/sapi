import differenceInDays from 'date-fns/differenceInDays'
import format from 'date-fns/format'

import {Base} from '.'

import {OnRatesCb, GetRatesParameters, RatesResponse} from './raa'
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
  AnchorType
} from './algolia'

import {Anchor, ApiSearchParameters, Hit, Rate, AnonymousId} from './types'

type SearchParameters = ApiSearchParameters & {
  checkIn: string
  checkOut: string
  rooms: string
  deviceCategory: string
  searchId: string
}

type OnHotelsCb = (response: Record<string, unknown>) => void

type OnCompleteCb = (response: Record<string, unknown>) => void

type HitWithRates = Hit & {
  rates?: Rate
}

type StaticResultsData = GeoSearchResults & {
  anchorHotel?: Hit
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
  onHotelsCb?: OnHotelsCb,
  onRatesCb?: OnRatesCb,
  onCompleteCb?: OnCompleteCb
) => Promise<Record<string, unknown>>

const augmentHitWithRates = (hit: Hit, rates?: Rate[]): HitWithRates => {
  const hitRates = rates?.find((rate) => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

const getDataFromStaticResults = (
  staticResults: GeoSearchResults,
  anchorHotel: Hit
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
  parameters: SearchParameters
): GeoSearchParameters => {
  if (parameters.boundingBox?.length) {
    return parameters
  }

  if (anchor.polygon?.length) {
    return {
      ...parameters,
      polygon: anchor.polygon
    }
  }

  if (anchor._geoloc) {
    return {
      ...parameters,
      geolocation: anchor._geoloc
    }
  }

  return parameters
}

const DEFAULT_ROOMS = '2'
const DEFAULT_DEVICE_CATEGORY = 'desktop'

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

const generateDestinationString = (hits: Hit[]): string =>
  hits.map((hit) => hit.objectID).join(',')

export const search = (base: Base): Search => {
  const {algoliaClient, raaClient, options, configs} = base
  const {hso, exchangeRatesUSD} = configs
  const {language, fallBackLanguages, pageSize, currency} = options
  const languages = [language, ...fallBackLanguages]

  return async (parameters, onHotelsCb, onRatesCb, onCompleteCb) => {
    let loadMoreOffset = 0

    const searchParameters = prepareSearchParameters(
      parameters,
      options,
      configs
    )

    const anchorObject = await getAnchor(
      algoliaClient,
      languages
    )(searchParameters)

    const {anchor, anchorHotel} = anchorObject

    const geoSearchFn = geoSearch(algoliaClient, {
      languages,
      pageSize,
      hsoFilter: getHsoFilter(hso, searchParameters, anchorObject),
      exchangeRate: exchangeRatesUSD[currency],
      priceBucketWidth: anchor.priceBucketWidth
    })

    const runSearch = async (offset = 0): Promise<ResultsWithRates> => {
      const geoSearchParameters = prepareGeoSearchParameters(anchor, {
        ...searchParameters,
        offset
      })

      const results = await geoSearchFn(geoSearchParameters)

      const staticResults: StaticResults = {
        anchor,
        results: getDataFromStaticResults(results, anchorHotel)
      }

      if (typeof onHotelsCb === 'function') {
        onHotelsCb(staticResults)
      }

      let ratesResults

      if (searchParameters.rates) {
        const ratesParameters = {
          ...searchParameters,
          destination: generateDestinationString(results.hits),
          anchorDestination: anchorHotel?.objectID
        }

        ratesResults = await raaClient.getRates(ratesParameters, onRatesCb)
      }

      if (typeof onCompleteCb === 'function') {
        onCompleteCb({
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
          hits: searchResults.results.hits.map((hit: Hit) =>
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
