import {AlgoliaClient, SapiClientOptions, Base} from '.'

import {Rates, OnRatesCb} from './raa'

import {
  getAnchor,
  staticSearch,
  Hit,
  SearchParameters,
  StaticSearchParameters,
  PlaceSearchResults,
  PlaceSearchResponse
} from './algolia'

import {hsoConfigObjectToString} from './configs'

type OnHotelsCb = (response: Record<string, unknown>) => void

type OnComleateCb = (response: Record<string, unknown>) => void

export type PlaceSearchWithRatesParameters = SearchParameters & {
  checkIn: string
  /** Check out date in format: `yyyy-mm-dd` */
  checkOut: string
  /** Room string in format: `room|occupancy` */
  rooms: string
  rates?: boolean
}

type HitWithRates = Hit & {
  rates?: Rates
}

export type PlaceSearchWithRatesResults = PlaceSearchResults & {
  hits: HitWithRates[]
}

export type PlaceSearchWithRatesResponse = {
  rates: Rates[]
  results: PlaceSearchWithRatesResults
}

export type Search = (
  parameters: PlaceSearchWithRatesParameters,
  onHotelsCb?: OnHotelsCb,
  onRatesCb?: OnRatesCb,
  onComleateCb?: OnComleateCb
  // ) => Promise<PlaceSearchWithRatesResponse>
) => Promise<any>

const augmentHitWithRates = (hit: Hit, rates: Rates[]): HitWithRates => {
  const hitRates = rates.find((rate) => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

const generateDestinationString = (hits: Hit[]): string =>
  hits.map((hit) => hit.objectID).join(',')

export type SearchType =
  | 'insidePolygon'
  | 'insideBoundingBox'
  | 'aroundLocation'

const getSearchType = (
  anchor,
  parameters: SearchParameters,
  searchType?: SearchType
): SearchType => {
  if (searchType) return searchType
  if (parameters.boundingBox?.length > 0) return 'insideBoundingBox'
  if (anchor.polygon?.length > 0) return 'insidePolygon'
  return 'aroundLocation'
}

const getDataFromStaticResults = (staticResults = {}) => {
  const {facets, hits, length, nbHits, offset} = staticResults

  return {
    facets,
    hits,
    length,
    nbHits,
    offset
  }
}

export const search = (base: Base): Search => async (
  parameters,
  onHotelsCb,
  onRatesCb,
  onCompleteCb
) => {
  const {algoliaClient, raaClient, options, configs} = base
  const {anonymousId, language, currency, country, pageSize} = options
  const {
    searchType,
    placeId,
    hotelId,
    rates,
    checkIn,
    checkOut,
    rooms,
    offset = 0,
    boundingBox
  } = parameters

  let loadMoreOffset = 0

  const {anchor, anchorHit} = await getAnchor(
    algoliaClient,
    options
  )({
    placeId,
    hotelId
  })

  const hsoConfig = hsoConfigObjectToString(
    configs.hso,
    placeId ? 'place_search' : 'hotel_search',
    parameters
  )

  const searchFn = staticSearch(algoliaClient, options, hsoConfig)

  const runSearch = async (offset = 0) => {
    const searchParameters: StaticSearchParameters = {
      ...parameters,
      offset
    }

    const type = getSearchType(anchor, parameters, searchType)

    switch (type) {
      case 'aroundLocation':
        searchParameters.geolocation = anchor._geoloc
        break
      case 'insideBoundingBox':
        searchParameters.boundingBox = boundingBox
        break
      case 'insidePolygon':
      default:
        searchParameters.polygon = anchor.polygon
        break
    }

    const staticResults = await searchFn(searchParameters)

    const output: Record<string, unknown> = {
      anchor,
      results: getDataFromStaticResults(staticResults)
    }

    if (anchorHit) {
      output.anchorHit = anchorHit
    }

    if (typeof onHotelsCb === 'function') {
      onHotelsCb({...output})
    }

    if (rates) {
      const ratesResults = await raaClient.getRates(
        {
          destination: generateDestinationString(staticResults?.hits),
          highlightedHotelID: anchorHit?.objectID,
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

      output.rates = ratesResults.results

      if (typeof onComleateCb === 'function') {
        onComleateCb(output)
      }
    }

    return output
  }

  const searchResults = await runSearch(offset)

  return {
    getHits: () => searchResults.results,
    getAnchor: () => searchResults.anchor,
    getAnchorHit: () => searchResults.anchorHit,
    getRates: (hitId?: SVGStringList) => {
      if (!hitId) {
        return searchResults.rates
      }

      const hitRates = searchResults.rates.find(
        (hitRates) => hitRates.id === hitId
      )

      return hitRates
    },
    loadRates: (hitId: string) => {
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
        ...searchResults.results,
        results: searchResults.results.hits.map((hit) =>
          augmentHitWithRates(hit, searchResults.rates)
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
