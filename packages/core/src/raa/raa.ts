import ReconnectingWebSocket from 'reconnecting-websocket'

import {Rate, RaaResponse} from '../types'

interface RaaClient {
  getRates: GetRates
}

interface RaaOptions {
  includeLocalTaxes?: boolean
  includeTaxes?: boolean
  skipBackendAugmentation?: boolean
  facetsEnabled?: boolean
  WebSocket?: any
  anonymousId: string
  language: string
  currency: string
  country: string
}

export type GetRatesParameters = {
  destination: string
  anchorDestination?: string
  checkIn: string
  checkOut: string
  rooms: string
  anonymousId: string
  language: string
  currency: string
  country: string
  getAllOffers: boolean
  cugDeals: string
  deviceCategory: string
  profileId: string
  searchId: string
  useAlternativeRaaKeys: boolean
}

export interface RatesResponse {
  anchorHotelRate?: Rate
  hotelsRates?: Rate[]
}

export type OnRatesCb = (rates: RatesResponse) => void

export type GetRates = (
  parameters: GetRatesParameters,
  onRatesCb: OnRatesCb
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
): string => {
  const {
    includeLocalTaxes,
    includeTaxes,
    skipBackendAugmentation,
    facetsEnabled,
    anonymousId,
    language,
    currency,
    country
  } = options

  const {
    destination,
    checkIn,
    checkOut,
    rooms,
    anchorDestination,
    getAllOffers,
    cugDeals,
    deviceCategory,
    profileId,
    searchId,
    useAlternativeRaaKeys
  } = parameters

  const query = {
    anonymousId,
    checkIn,
    checkOut,
    currencyCode: currency,
    destination,
    getAllOffers,
    highlightedHotelID: anchorDestination,
    rooms,
    languageCode: language,
    userCountryCode: country,
    cugDeals,
    deviceCategory,
    profileId,
    searchId,
    useAlternativeRaaKeys,
    includeLocalTaxes,
    includeTaxes,
    skipBackendAugmentation,
    facetsEnabled
  }

  let queryString = ''

  try {
    queryString = JSON.stringify(query)
  } catch {
    console.log('WEBSOCKET: error parsing query')
  }

  return queryString
}

export const raa = (raaEndpoint: string, options: RaaOptions): RaaClient => {
  if (typeof raaEndpoint === 'undefined') {
    throw new TypeError('RAA endpoint must is not provided')
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
   * On rates reseived callback
   */
  let onRatesReseived: ((response?: RaaResponse) => void) | undefined

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

    if (onRatesReseived !== undefined) onRatesReseived(response)
  }

  /**
   * Get rates
   *
   * @param parameters - raa request parameters
   * @param onRatesCb - on rates reseived callback
   */
  const getRates: GetRates = (parameters, onRatesCb) => {
    const result: RatesResponse = {}

    requests.current = createRaaRequest(parameters, options)

    return new Promise((resolve) => {
      /** Override onRatesReseived callback with the current promise.resolve method */
      onRatesReseived = (response) => {
        if (response !== undefined) {
          if (response.status.complete) {
            resolve(result)

            requests.current = undefined
          } else {
            const anchorHotelRate = response.results.find(
              ({id}) => id === parameters.anchorDestination
            )

            if (anchorHotelRate) {
              result.anchorHotelRate = anchorHotelRate
            } else {
              result.hotelsRates = response.results
            }

            if (typeof onRatesCb === 'function') {
              onRatesCb({...result})
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
