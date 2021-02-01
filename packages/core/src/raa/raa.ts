import ReconnectingWebSocket from 'reconnecting-websocket'

import {generateSortingBoost} from './utils'

import {omit} from '../utils'

import {Rate, RaaResponse} from '../types'

export interface RaaClient {
  getRates: GetRates
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
}

export interface GetRatesParameters {
  anchorDestination?: string
  cugDeals?: string
  getAllOffers?: boolean
  profileId?: string
  useAlternativeRaaKeys?: boolean
  destination?: string
  checkIn: string
  checkOut: string
  rooms: string
  deviceCategory: string
  searchId: string
  filters?: {
    freeCancellation?: boolean
  }
}

export interface RatesResponse {
  anchorHotel?: Rate
  hotels?: Rate[]
}

export type OnRatesReceived = (rates: RatesResponse) => void

type GetRates = (
  parameters: GetRatesParameters,
  onRatesReceived?: OnRatesReceived
) => Promise<RatesResponse>

enum ReadyStates {
  Connecting,
  Open,
  Closing,
  Closed
}

const MAX_CONNECTION_RETRIES = 20
const CONNECTION_TIMEOUT = 500 // Ms

const createRaaRequest = (
  parameters: GetRatesParameters,
  options: RaaOptions
): string | undefined => {
  const query = {
    checkIn: parameters.checkIn,
    checkOut: parameters.checkOut,
    destination: parameters.destination ?? '',
    getAllOffers: parameters.getAllOffers,
    highlightedHotelID: parameters.anchorDestination,
    rooms: parameters.rooms,
    cugDeals: parameters.cugDeals,
    deviceCategory: parameters.deviceCategory,
    profileId: parameters.profileId,
    searchId: parameters.searchId,
    useAlternativeRaaKeys: parameters.useAlternativeRaaKeys,
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

export const raa = (raaEndpoint: string, options: RaaOptions): RaaClient => {
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
  const initialize = () => {
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
   * On rates received handler
   */
  let handleRatesReceived: ((response?: RaaResponse) => void) | undefined

  /**
   * Handle websocket close
   */
  const handleClose = () => {
    if (requests.current !== undefined) {
      socket.reconnect()
    }
  }

  /**
   * Handle websocket error
   */
  const handleError = () => {
    if (requests.current !== undefined) {
      socket.reconnect()
    }
  }

  /**
   * Handle websocket open
   */
  const handleOpen = () => {
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
  const handleMessage = (message: MessageEvent): void => {
    let response: RaaResponse | undefined

    try {
      response = JSON.parse(message.data)
    } catch {
      console.log('WEBSOCKET: error parsing message')
    }

    if (handleRatesReceived !== undefined) handleRatesReceived(response)
  }

  /**
   * Get rates
   *
   * @param parameters - raa request parameters
   * @param onRatesReceived - on rates received callback
   */
  const getRates = async (
    parameters: GetRatesParameters,
    onRatesReceived?: OnRatesReceived
  ): Promise<RatesResponse> => {
    const result: RatesResponse = {}

    requests.current = createRaaRequest(parameters, options)

    return new Promise((resolve) => {
      /** Override rates received handler with the current promise.resolve method */
      handleRatesReceived = (response) => {
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

            if (typeof onRatesReceived === 'function') {
              onRatesReceived({...result})
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
    getRates
  }
}
