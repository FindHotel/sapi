import {AlgoliaClient, SapiClientOptions, Base} from '.'

import {Rates, OnRatesCb} from './raa'

import {
  getAnchor,
  staticSearch,
  Hit,
  SearchParameters,
  StaticSearchParameters,
  PlaceSearchResults
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

type SearchResults = {
  anchor: any
  results: any
}

type SearchResultsWithRates = SearchResults & {
  rates: any
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

const generateDestinationString = (hits: Hit[]): string => {
  return hits.map((hit) => hit.objectID).join(',')
}

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

const getDataFromStaticResults = (staticResults = {}, anchorHit: any) => {
  const {facets, hits, length, nbHits, offset} = staticResults

  // Remove AnchorHit from results
  const hitsFiltered = anchorHit
    ? hits.filter((hit) => hit.objectID !== anchorHit.objectID)
    : hits

  return {
    facets,
    hits: hitsFiltered,
    anchorHit,
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

  const runSearch = async (offset = 0): Promise<SearchResultsWithRates> => {
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

    const results = await searchFn(searchParameters)

    const staticOutput: SearchResults = {
      anchor,
      results: getDataFromStaticResults(results, anchorHit)
    }

    if (typeof onHotelsCb === 'function') {
      onHotelsCb(staticOutput)
    }

    let ratesResults

    if (rates) {
      ratesResults = await raaClient.getRates(
        {
          destination: generateDestinationString(staticOutput.results.hits),
          anchorDestination: anchorHit?.objectID,
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

      if (typeof onComleateCb === 'function') {
        onComleateCb({
          ...staticOutput,
          rates: ratesResults
        })
      }
    }

    return {
      ...staticOutput,
      rates: rates ? ratesResults : undefined
    }
  }

  const searchResults = await runSearch(offset)

  return {
    getHits: () => searchResults.results.hits,
    getAnchor: () => searchResults.anchor,
    getAnchorHit: () => searchResults.results.anchorHit,
    getRates: () => searchResults.rates,
    getHitsRates: () => searchResults.rates.hitsRates,
    getAnchorHitRate: () => searchResults.rates.anchorHitRate,
    loadRates: async (hitId: string) => {
      if (!hitId) {
        throw new Error('Hit id must be provided')
      }

      let isAnchor = false
      let anchorDestination
      const destination = hitId

      if (hitId === anchorHit?.objectID) {
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
        return rates.anchorHitRate
      }

      return rates.hitsRates.find(({id}) => id === hitId)
    },
    getHitsWithRates: () => {
      return {
        anchorHit: {
          ...searchResults.results.anchorHit,
          rates: searchResults.rates.anchorHitRate
        },
        hits: searchResults.results.hits.map((hit) =>
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
