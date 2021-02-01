import {Base} from '.'

import {OnRatesReceived, RatesResponse, augmentRaaResponse} from './raa'

import {
  filterFromHsoConfig,
  HsoConfigType,
  HsoConfig,
  HsoFilter,
  DatesConfig
} from './configs'

import {generateSearchId} from './utils'
import {getCheckInCheckOutDates} from './dates'

import {
  getAnchor,
  geoSearch,
  getCheckInNights,
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

type OnStart = (response: Record<string, unknown>) => void
type OnHotelsReceived = (response: Record<string, unknown>) => void
type OnComplete = (response: Record<string, unknown>) => void

interface HotelWithRates extends Hotel {
  rates?: Rate
}

interface SearchMeta {
  searchId: string
  hotelsHaveStaticPosition: boolean
}

interface ResultsWithRates {
  anchor: Anchor
  anchorHotel?: Hotel
  meta: SearchMeta
  results?: GeoSearchResults
  rates?: RatesResponse
}

interface Options {
  anonymousId: AnonymousId
  language: string
  currency: string
  userCountry: string
  requestSize: number
  pageSize: number
}

interface HotelsWithRates {
  anchorHotel?: HotelWithRates
  hits?: HotelWithRates[]
}

interface SearchCallbacks {
  onStart?: OnStart
  onHotelsReceived?: OnHotelsReceived
  onRatesReceived?: OnRatesReceived
  onComplete?: OnComplete
}

export type Search = (
  parameters: ApiSearchParameters,
  callbacks?: SearchCallbacks
) => Promise<{
  loadRates: (objectID: string) => Promise<Rate | undefined>
  loadMore: () => Promise<ResultsWithRates>
  getResultsWithRates: () => HotelsWithRates
}>

const DEFAULT_ROOMS = '2'
const DEFAULT_DEVICE_CATEGORY = 'desktop'

const augmentHitWithRates = (hit: Hotel, rates?: Rate[]): HotelWithRates => {
  const hitRates = rates?.find((rate) => rate.id === hit.objectID)

  return {
    ...hit,
    rates: hitRates
  }
}

const getHsoConfigType = (anchorType: AnchorType): HsoConfigType => {
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
  dates: DatesConfig
): SearchParameters => {
  const {
    rooms = DEFAULT_ROOMS,
    deviceCategory = DEFAULT_DEVICE_CATEGORY
  } = parameters

  const {checkIn, checkOut} = getCheckInCheckOutDates(parameters, dates)

  return {
    ...parameters,
    checkIn,
    checkOut,
    rooms,
    deviceCategory
  }
}

const generateDestinationString = (hits?: Hotel[]) => {
  return hits?.map((hit) => hit.objectID).join(',')
}

const hotelsHaveStaticPosition = (
  parameters: SearchParameters,
  {pageSize}: {pageSize: number},
  results?: GeoSearchResults
) => {
  if (parameters.sortField === 'price') {
    return false
  }

  if (
    parameters.filters?.priceMin !== undefined ||
    parameters.filters?.priceMax !== undefined
  ) {
    return false
  }

  if (results) {
    const checkInNights = getCheckInNights(
      parameters.checkIn,
      parameters.checkOut
    )

    const availabilityCount = results.facets?.tags?.[`a${checkInNights}`] ?? 0

    return availabilityCount >= pageSize
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
    anchor.pageSize >= options.requestSize &&
    parameters.filters?.priceMin === undefined &&
    parameters.filters?.priceMax === undefined &&
    parameters.sortField !== 'price'
  ) {
    return anchor.pageSize
  }

  return anchorType === 'hotel' ? 45 : 65
}

export const search = (base: Base): Search => {
  const {appConfig, algoliaClient, raaClient, options, configs} = base
  const {hso, exchangeRates, dates} = configs
  const {languages, currency} = options
  const exchangeRate = exchangeRates[currency]

  return async (parameters, callbacks = {}) => {
    let loadMoreOffset = 0
    const {onStart, onHotelsReceived, onRatesReceived, onComplete} = callbacks

    /** 1 - Prepare search parameters and generate SearchId */
    const searchParameters = prepareSearchParameters(parameters, dates)
    const searchId = generateSearchId(parameters, options)
    /** END */

    if (typeof onStart === 'function') {
      onStart({
        searchParameters,
        meta: {
          searchId
        }
      })
    }

    /** 2 - Get Anchor + Anchor hotel */
    const anchorObject = await getAnchor(
      algoliaClient,
      appConfig,
      options
    )(searchParameters)
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
      const output: Partial<ResultsWithRates> = {
        anchor: anchorObject.anchor,
        anchorHotel: anchorObject.anchorHotel,
        meta: {
          searchId,
          hotelsHaveStaticPosition: hotelsHaveStaticPosition(
            searchParameters,
            options
          )
        }
      }

      /** 4.1 - Geolocation search */
      if (searchParameters.skipGeoSearch !== true) {
        output.results = await geoSearchFn(
          prepareGeoSearchParameters(
            anchorObject.anchor,
            searchParameters,
            offset,
            anchorObject.anchorHotel?.objectID
          )
        )
      }
      /** END */

      if (typeof onHotelsReceived === 'function') {
        onHotelsReceived({
          ...output,
          meta: {
            ...output.meta,
            hotelsHaveStaticPosition: hotelsHaveStaticPosition(
              searchParameters,
              options,
              output.results
            )
          }
        })
      }

      /** 4.2 - Get rates */
      if (searchParameters.rates) {
        const ratesParameters = {
          ...searchParameters,
          searchId,
          destination: generateDestinationString(output.results?.hits),
          anchorDestination: anchorObject.anchorHotel?.objectID
        }

        const rates = await raaClient.getRates(
          ratesParameters,
          (response: RatesResponse) => {
            if (typeof onRatesReceived === 'function') {
              onRatesReceived(
                augmentRaaResponse(response, {
                  ...ratesParameters,
                  ...anchorObject.anchor,
                  ...options,
                  exchangeRate
                })
              )
            }
          }
        )

        output.rates = augmentRaaResponse(rates, {
          ...ratesParameters,
          ...anchorObject.anchor,
          ...options,
          exchangeRate
        })
      }
      /** END */

      if (typeof onComplete === 'function') {
        onComplete(output)
      }

      return output as ResultsWithRates
    }

    const searchResults = await run(searchParameters.offset)
    /** END */

    return {
      loadRates: async (objectID) => {
        if (!objectID) {
          throw new Error('Hotel id must be provided')
        }

        const isAnchor = objectID === searchResults.anchorHotel?.objectID

        const ratesParameters = {
          ...searchParameters,
          searchId,
          getAllOffers: true,
          destination: objectID,
          anchorDestination: isAnchor ? objectID : undefined
        }

        const rates = await raaClient.getRates(ratesParameters)

        if (isAnchor) {
          return rates.anchorHotel
        }

        return rates.hotels?.find(({id}: {id: string}) => id === objectID)
      },
      loadMore: async () => {
        loadMoreOffset += getRequestSize(
          anchorObject,
          searchParameters,
          options
        )

        return run(loadMoreOffset)
      },
      getResultsWithRates: () => {
        return {
          anchorHotel: searchResults.anchorHotel
            ? {
                ...searchResults.anchorHotel,
                rates: searchResults.rates?.anchorHotel
              }
            : undefined,
          hits: searchResults.results?.hits.map((hit: Hotel) =>
            augmentHitWithRates(hit, searchResults.rates?.hotels)
          )
        }
      }
    }
  }
}
