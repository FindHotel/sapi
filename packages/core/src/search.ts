import {AlgoliaClient, SapiClientOptions, Base} from '.'

import {Rates, OnRatesCb} from './raa'

import {
  placeSearch,
  Hit,
  PlaceSearchParameters,
  PlaceSearchResults,
  PlaceSearchResponse,
  PlaceMeta
} from './algolia'

import {getFilterFromConfig} from './configs'

/** Callback for when static hotels are loaded */
type OnHotelsCb = (hotels: PlaceSearchResponse) => void

/** Callback for when all hotels are offers are loaded */
type onCompleteCb = (response: PlaceSearchWithRatesResponse) => void

export type RateParameters = {
  /** Check in date in format: `yyyy-mm-dd` */
  checkIn: string
  /** Check out date in format: `yyyy-mm-dd` */
  checkOut: string
  /** Room string in format: `room|occupancy` */
  rooms: string
}

export type PlaceSearchWithRatesParameters = PlaceSearchParameters &
  RateParameters

type HitWithRates = Hit & {
  rates?: Rates
}

export type PlaceSearchWithRatesResults = PlaceSearchResults & {
  hits: HitWithRates[]
}

export type PlaceSearchWithRatesResponse = {
  place: PlaceMeta
  rates: Rates[]
  results: PlaceSearchWithRatesResults
}

export type Search = (
  parameters: PlaceSearchWithRatesParameters,
  onHotelsCb?: OnHotelsCb,
  onRatesCb?: OnRatesCb,
  onCompleteCb?: onCompleteCb
) => Promise<PlaceSearchWithRatesResponse>

const augmentHitWithRates = (hit: Hit, rates: Rates[]): HitWithRates => {
  const hitRates = rates.find((rate) => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

const generateDestinationString = (hits: Hit[]): string =>
  hits.map((hit) => hit.objectID).join(',')

export const search = (base: Base): Search => async (
  parameters,
  onHotelsCb,
  onRatesCb,
  onCompleteCb
) => {
  const {
    algoliaClient,
    raaClient,
    options,
    configs: {hso}
  } = base
  const {
    checkIn,
    checkOut,
    rooms,
    ...placeSearchParameters
  }: PlaceSearchWithRatesParameters = parameters
  const {anonymousId, language, currency, country} = options

  const searchConfig = getFilterFromConfig(
    hso,
    'place_search',
    placeSearchParameters
  )

  const placeSearchResults = await placeSearch(algoliaClient, options)(
    placeSearchParameters,
    searchConfig
  )

  if (typeof onHotelsCb === 'function') {
    onHotelsCb(placeSearchResults)
  }

  const rates = await raaClient.getRates(
    {
      destination: generateDestinationString(placeSearchResults.results?.hits),
      checkIn,
      checkOut,
      rooms,
      anonymousId,
      language,
      currency,
      country
    },
    onRatesCb
  )

  const result = {
    place: placeSearchResults.place,
    rates: rates?.results,
    results: {
      ...placeSearchResults.results,
      hits: placeSearchResults.results.hits.map((hit) =>
        augmentHitWithRates(hit, rates?.results)
      )
    }
  }

  if (typeof onCompleteCb === 'function') {
    onCompleteCb(result)
  }

  return {
    getHits: () => placeSearchResults.results,
    getRates: (hitId) => {
      if (!hitId) {
        return rates.results
      }

      const hitRates = rates.results.find((hitRates) => hitRates.id === hitId)

      return hitRates
    },
    loadRates: (hitId) => {
      if (!hitId) {
        throw new Error('Hit id must be provided')
      }

      const destination = hitId && hitId.toString()

      return raaClient.getRates({
        destination,
        checkIn,
        checkOut,
        rooms,
        anonymousId,
        language,
        currency,
        country,
        getAllOffers: true
      })
    },
    getHitsWithRates: () => {
      return {
        ...placeSearchResults.results,
        hits: placeSearchResults.results.hits.map((hit) =>
          augmentHitWithRates(hit, rates?.results)
        )
      }
    },
    loadMore: () => {
      console.log('Load more reults')
    }
  }
}
