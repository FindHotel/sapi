import {AlgoliaClient, SapiClientOptions} from '.'

import {Rates, OnRatesCb} from './raa'

import {
  placeSearch,
  hotelSearch,
  Hit,
  PlaceSearchParameters,
  PlaceSearchResults,
  PlaceSearchResponse,
  PlaceMeta
} from './algolia'

import {getFilterFromConfig} from './configs'

type OnHotelsCb = (hotels: PlaceSearchResponse) => void

export type PlaceSearchWithRatesParameters = PlaceSearchParameters & {
  checkIn: string
  checkOut: string
  rooms: string
}

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
  onRatesCb?: OnRatesCb
) => Promise<PlaceSearchWithRatesResponse>

const augmentHitWithRates = (hit: Hit, rates: Rates[]): HitWithRates => {
  const hitRates = rates.find(rate => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

const generateDestinationString = (hits: Hit[]): string =>
  hits.map(hit => hit.objectID).join(',')

export const search = (base): Search => async (
  parameters,
  onHotelsCb,
  onRatesCb
) => {
  const {
    algoliaClient,
    raaClient,
    options,
    configs: {hso}
  } = base
  const {checkIn, checkOut, rooms, ...placeSearchParameters} = parameters
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

  return {
    place: placeSearchResults.place,
    rates: rates?.results,
    results: {
      ...placeSearchResults.results,
      hits: placeSearchResults.results.hits.map(hit =>
        augmentHitWithRates(hit, rates?.results)
      )
    }
  }
}
