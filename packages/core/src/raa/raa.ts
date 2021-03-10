import ReconnectingWebSocket from 'reconnecting-websocket'

import {generateSortingBoost} from './utils'

import {omit} from '../utils'

import {HotelOfferEntity, RaaResponse} from '../types'

export interface RaaClient {
  getOffers: GetOffers
}

interface RaaOptions {
  anonymousId: string
  currency: string
  userCountry: string
  language: string
  includeLocalTaxes?: boolean
  includeTaxes?: boolean
  skipBackendAugmentation?: boolean
  facetsEnabled?: boolean
  WebSocket?: any
  sapiCliKey?: string
  deviceCategory: string
}

export interface GetOffersParameters {
  anchorDestination?: string
  cugDeals?: string
  getAllOffers?: boolean
  profileId?: string
  useAlternativeRaaKeys?: boolean
  destination?: string
  checkIn: string
  checkOut: string
  rooms: string
  searchId: string
  filters?: {
    freeCancellation?: boolean
  }
}

export interface OffersResponse {
  anchorHotel?: HotelOfferEntity
  hotels?: HotelOfferEntity[]
}

type GetOffers = (
  parameters: GetOffersParameters,
  onOffersReceived?: (response: OffersResponse) => void
) => Promise<OffersResponse>

enum ReadyStates {
  Connecting,
  Open,
  Closing,
  Closed
}

const MAX_CONNECTION_RETRIES = 20
const CONNECTION_TIMEOUT = 500 // Ms

function createRaaRequest(
  parameters: GetOffersParameters,
  options: RaaOptions
) {
  const query = {
    checkIn: parameters.checkIn,
    checkOut: parameters.checkOut,
    destination: parameters.destination ?? '',
    getAllOffers: parameters.getAllOffers,
    highlightedHotelID: parameters.anchorDestination,
    rooms: parameters.rooms,
    cugDeals: parameters.cugDeals,
    profileId: parameters.profileId,
    searchId: parameters.searchId,
    useAlternativeRaaKeys: parameters.useAlternativeRaaKeys,
    deviceCategory: options.deviceCategory,
    languageCode: options.language,
    userCountryCode: options.userCountry,
    currencyCode: options.currency,
    anonymousId: options.anonymousId,
    includeLocalTaxes: options.includeLocalTaxes,
    includeTaxes: options.includeTaxes,
    skipBackendAugmentation: options.skipBackendAugmentation,
    facetsEnabled: options.facetsEnabled,
    sapiCliKey: options.sapiCliKey,
    sortingBoost: generateSortingBoost(parameters)
  }

  let queryString

  try {
    queryString = JSON.stringify(query)
  } catch {
    console.log('WEBSOCKET: error parsing query')
  }

  return queryString
}

export function raa(raaEndpoint: string, options: RaaOptions) {
  if (typeof raaEndpoint === 'undefined') {
    throw new TypeError('RAA endpoint must be provided')
  }

  if (
    typeof WebSocket === 'undefined' &&
    typeof options.WebSocket === 'undefined'
  ) {
    throw new TypeError('Client does not support WebSocket')
  }

  /**
   * Initialize connection
   */
  const socket = new ReconnectingWebSocket(raaEndpoint, [], {
    connectionTimeout: CONNECTION_TIMEOUT,
    maxRetries: MAX_CONNECTION_RETRIES,
    WebSocket: options.WebSocket
  })

  /**
   * Initialize listeners
   */
  function initialize() {
    socket.addEventListener('open', handleOpen)
    socket.addEventListener('close', handleClose)
    socket.addEventListener('error', handleError)
    socket.addEventListener('message', handleMessage)
  }

  /**
   * Raa requests
   */
  const requests: {current?: string} = {}

  /**
   * On offers received handler
   */
  let handleOffersReceived: ((response?: RaaResponse) => void) | undefined

  /**
   * Handle websocket close
   */
  function handleClose() {
    if (requests.current !== undefined) {
      socket.reconnect()
    }
  }

  /**
   * Handle websocket error
   */
  function handleError() {
    if (requests.current !== undefined) {
      socket.reconnect()
    }
  }

  /**
   * Handle websocket open
   */
  function handleOpen() {
    const {current} = requests

    if (current !== undefined) {
      socket.send(current)
    }
  }

  /**
   * Handle websocket message
   *
   * @param message - websocket message
   */
  function handleMessage(message: MessageEvent) {
    let response: RaaResponse | undefined

    try {
      response = JSON.parse(message.data)
    } catch {
      console.log('WEBSOCKET: error parsing message')
    }

    if (handleOffersReceived !== undefined) handleOffersReceived(response)
  }

  /**
   * Get offers
   *
   * @param parameters - raa request parameters
   * @param onOffersReceived - on offers received callback
   */
  async function getOffers(
    parameters: GetOffersParameters,
    onOffersReceived?: (response: OffersResponse) => void
  ): Promise<OffersResponse> {
    const result: OffersResponse = {}

    requests.current = createRaaRequest(parameters, options)

    return new Promise((resolve) => {
      /** Override offers received handler with the current promise.resolve method */
      handleOffersReceived = (response) => {
        if (response !== undefined) {
          if (response.status.complete) {
            resolve(result)

            requests.current = undefined
          } else {
            const anchorHotel = response.results.find(
              ({id}) => id === parameters.anchorDestination
            )

            if (anchorHotel) {
              result.anchorHotel = omit(['errors'], anchorHotel)
            } else {
              result.hotels = response.results?.map((result) =>
                omit(['errors'], result)
              )
            }

            if (typeof onOffersReceived === 'function') {
              onOffersReceived({...result})
            }
          }
        }
      }

      if (
        socket.readyState === ReadyStates.Open &&
        requests.current !== undefined
      ) {
        socket.send(requests.current)
      }
    })
  }

  initialize()

  return {
    getOffers
  }
}
