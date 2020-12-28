import differenceInDays from 'date-fns/differenceInDays'
import format from 'date-fns/format'

import {Base} from '.'

import {Rates, OnRatesCb, GetRatesParameters} from './raa'

import {
  getAnchor,
  geoSearch,
  Hit,
  GeoSearchParameters,
  GeoSearchResults,
  AnchorObject,
  AnchorType
} from './algolia'

import {
  hsoConfigObjectToString,
  HsoConfigType,
  HsoConfigObject
} from './configs'

import {Anchor, SearchParameters, LocationSearchParameters} from './types'

type OnHotelsCb = (response: Record<string, unknown>) => void

type OnCompleteCb = (response: Record<string, unknown>) => void

type HitWithRates = Hit & {
  rates?: Rates
}

export type PlaceSearchWithRatesResults = GeoSearchResults & {
  hits: HitWithRates[]
}

export type PlaceSearchWithRatesResponse = {
  rates: Rates[]
  results: PlaceSearchWithRatesResults
}

type SearchResults = {
  anchor: any
  results: any
}

type SearchResultsWithRates = SearchResults & {
  rates: any
}

export type Search = (
  parameters: SearchParameters,
  onHotelsCb?: OnHotelsCb,
  onRatesCb?: OnRatesCb,
  onCompleteCb?: OnCompleteCb
) => Promise<any>

const augmentHitWithRates = (hit: Hit, rates: Rates[]): HitWithRates => {
  const hitRates = rates.find((rate) => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

export enum SearchType {
  InsidePolygon,
  InsideBoundingBox,
  AroundLocation,
  Unknown
}

const getDataFromStaticResults = (staticResults = {}, anchorHotel: any) => {
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

const getHsoConfig = (
  hso: HsoConfigObject[],
  searchParameters: SearchParameters,
  anchorObject: AnchorObject
) => {
  const {anchorType, anchorHotel} = anchorObject
  const {checkIn, checkOut} = searchParameters
  const hsoConfigType = getHsoConfigType(anchorType)
  const hsoConfigContext = {
    anchorHotel,
    searchParameters,
    checkInNights: getCheckInNights(checkIn, checkOut)
  }

  return hsoConfigObjectToString(hso, hsoConfigType, hsoConfigContext)
}

const getSearchType = (
  anchor: Anchor,
  parameters: SearchParameters
): SearchType => {
  if (parameters.boundingBox?.length) {
    return SearchType.InsideBoundingBox
  }

  if ((parameters as LocationSearchParameters).geolocation) {
    return SearchType.AroundLocation
  }

  if (anchor.polygon?.length) {
    return SearchType.InsidePolygon
  }

  if (anchor._geoloc) {
    return SearchType.AroundLocation
  }

  return SearchType.Unknown
}

const prepareGeoSearchParameters = (
  anchor: Anchor,
  parameters: SearchParameters
): GeoSearchParameters => {
  const searchType = getSearchType(anchor, parameters)

  switch (searchType) {
    case SearchType.AroundLocation: {
      return {
        ...parameters,
        geolocation: anchor._geoloc
      }
    }

    case SearchType.InsidePolygon: {
      return {
        ...parameters,
        polygon: anchor.polygon
      }
    }

    case SearchType.InsideBoundingBox:
    default: {
      return parameters
    }
  }
}

interface RatesOptions {
  anonymousId: string
  language: string
  currency: string
  country: string
}

interface RatesParameters {
  checkIn?: string
  checkOut?: string
  rooms?: string
  dayDistance?: number
  nights?: number
  getAllOffers?: boolean
}

const generateDestinationString = (hits: Hit[]): string =>
  hits.map((hit) => hit.objectID).join(',')

const prepareRatesParameters = (
  parameters: RatesParameters,
  options: RatesOptions,
  hits: Hit[],
  anchorHotel: Hit
): GetRatesParameters => {
  const {anonymousId, language, currency, country} = options
  const {
    checkIn = '',
    checkOut = '',
    rooms = '2',
    dayDistance,
    nights,
    getAllOffers = false
  } = parameters

  return {
    destination: generateDestinationString(hits),
    anchorDestination: anchorHotel?.objectID,
    checkIn,
    checkOut,
    rooms,
    anonymousId,
    language,
    currency,
    country,
    getAllOffers
  }
}

export const search = (base: Base): Search => {
  const {algoliaClient, raaClient, options, configs} = base
  const {hso, exchangeRates} = configs
  const {
    anonymousId,
    language,
    fallBackLanguages,
    currency,
    country,
    pageSize
  } = options

  const languages = [language, ...fallBackLanguages]

  return async (parameters, onHotelsCb, onRatesCb, onCompleteCb) => {
    const {rates, checkIn, checkOut, rooms, offset = 0} = parameters

    let loadMoreOffset = 0

    const anchorObject = await getAnchor(algoliaClient, languages)(parameters)
    const {anchor, anchorHotel} = anchorObject
    const geoSearchFn = geoSearch(algoliaClient, {
      languages,
      pageSize,
      hsoConfig: getHsoConfig(hso, parameters, anchorObject),
      exchangeRate: exchangeRates.currencyExchangeRate,
      priceBucketWidth: anchor.priceBucketWidth
    })

    const runSearch = async (offset = 0): Promise<SearchResultsWithRates> => {
      const geoSearchParameters = prepareGeoSearchParameters(anchor, {
        ...parameters,
        offset
      })

      const results = await geoSearchFn(geoSearchParameters)

      const staticResults: SearchResults = {
        anchor,
        results: getDataFromStaticResults(results, anchorHotel)
      }

      if (typeof onHotelsCb === 'function') {
        onHotelsCb(staticResults)
      }

      let ratesResults

      if (rates) {
        const ratesParameters = prepareRatesParameters(
          parameters,
          options,
          results.hits,
          anchorHotel
        )

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

    const searchResults = await runSearch(offset)

    return {
      getHits: () => searchResults.results.hits,
      getAnchor: () => searchResults.anchor,
      getanchorHotel: () => searchResults.results.anchorHotel,
      getRates: () => searchResults.rates,
      getHitsRates: () => searchResults.rates.hitsRates,
      getanchorHotelRate: () => searchResults.rates.anchorHotelRate,
      loadRates: async (hitId: string) => {
        if (!hitId) {
          throw new Error('Hit id must be provided')
        }

        let isAnchor = false
        let anchorDestination
        const destination = hitId

        if (hitId === anchorHotel?.objectID) {
          isAnchor = true
          anchorDestination = hitId
        }

        const rates = await raaClient.getRates({
          destination,
          anchorDestination,
          checkIn,
          checkOut,
          rooms,
          anonymousId,
          language,
          currency,
          country,
          getAllOffers: true
        })

        if (isAnchor) {
          return rates.anchorHotelRate
        }

        return rates.hitsRates.find(({id}: {id: string}) => id === hitId)
      },
      getHitsWithRates: () => {
        return {
          anchorHotel: {
            ...searchResults.results.anchorHotel,
            rates: searchResults.rates.anchorHotelRate
          },
          hits: searchResults.results.hits.map((hit: Hit) =>
            augmentHitWithRates(hit, searchResults.rates.hitsRates)
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
