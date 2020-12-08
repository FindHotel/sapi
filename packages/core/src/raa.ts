import RobustWebSocket from 'robust-websocket'

const RECONNECT_ATTEMPTS = 20
const RECONNECT_ATTEMPT_INTERVAL = 50 // Ms
const RECONNECT_RETARDER = 1.4 // Factor to slow down reconnect interval
const SOCKET_TIMEOUT = 500 // Ms

const SOCKET_READY_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
}

export type OnRatesCb = (rates: Rates[]) => void

type GetRatesParameters = {
  destination: string
  anchorDestination: string | undefined
  checkIn: string
  checkOut: string
  rooms: string
  anonymousId: string
  language: string
  currency: string
  country: string
  getAllOffers: boolean
}

export type RateBreakdown = {
  baseRate: number
  localTaxes: number
  taxes: number
}

export type Offer = {
  id: string
  providerCode: string
  rateBreakdown: RateBreakdown
}

export type Rates = {
  id: string
  offers: Offer[]
}

export type RatesResponse = {
  results: Rates[]
  status: {
    complete: boolean
  }
}

export type GetRates = (
  parameters: GetRatesParameters,
  onRatesCb: OnRatesCb
) => Promise<RatesResponse>

let lastRequest = ''

const createQuery = (parameters: GetRatesParameters): string => {
  const {
    destination,
    checkIn,
    checkOut,
    rooms,
    anonymousId,
    language,
    currency,
    country,
    anchorDestination,
    getAllOffers = false
  } = parameters

  const query = {
    anonymousId,
    checkIn,
    checkOut,
    destination,
    rooms,
    highlightedHotelID: anchorDestination,
    languageCode: language,
    currencyCode: currency,
    userCountryCode: country,
    cugDeals: 'signed_in,offline',
    deviceCategory: 'desktop',
    facetsEnabled: false,
    getAllOffers,
    includeLocalTaxes: true,
    includeTaxes: true,
    profileId: 'default',
    searchId: '0edf6cf0ae429cd67fe5005c5dffa0b8951897a8',
    skipBackendAugmentation: false,
    useAlternativeRaaKeys: true
  }

  let queryString = ''

  try {
    queryString = JSON.stringify(query)
  } catch {
    console.log('Websocket: error parsing query')
  }

  return queryString
}

let onRatesReseived = (rates) => {
  console.log(rates)
}

const handleWsOpen = () => {
  if (lastRequest) {
    // WebSocket.send(lastRequest)
  }
}

const handleWsClose = () => {
  console.log('Close websocket')
}

const handleWsMessage = (event) => {
  let response = {}

  try {
    response = JSON.parse(event.data)
  } catch {
    console.log('WEBSOCKET: error parsing message')
  }

  onRatesReseived(response)
}

const getRates: GetRates = (webSocket) => (parameters, onRatesCb) => {
  const {anchorDestination} = parameters
  const lastResponse = {}
  lastRequest = createQuery(parameters)

  return new Promise((resolve) => {
    onRatesReseived = (response) => {
      if (response.status?.complete) {
        lastRequest = ''

        resolve(lastResponse)
      } else {
        const current = {}

        const anchorHitRate = response.results.find(
          ({id}) => id === anchorDestination
        )

        if (anchorHitRate) {
          current.anchorHitRate = anchorHitRate
          lastResponse.anchorHitRate = anchorHitRate
        } else {
          current.hitsRates = response.results
          lastResponse.hitsRates = response.results
        }

        if (typeof onRatesCb === 'function') {
          onRatesCb(current)
        }
      }
    }

    if (webSocket.readyState !== SOCKET_READY_STATES.OPEN) {
      webSocket.open()
    }

    webSocket.send(lastRequest)
  })
}

export const raa = (raaEndpoint: string) => {
  if (!raaEndpoint) {
    throw new Error('RAA endpoint must be provided')
  }

  const webSocket = new RobustWebSocket(raaEndpoint, null, {
    timeout: SOCKET_TIMEOUT,

    shouldReconnect(event, ws) {
      const willReconnect =
        ws.attempts <= RECONNECT_ATTEMPTS &&
        RECONNECT_RETARDER ** ws.attempts * RECONNECT_ATTEMPT_INTERVAL

      return willReconnect
    }
  })

  webSocket.addEventListener('message', handleWsMessage)

  webSocket.addEventListener('open', handleWsOpen)

  webSocket.addEventListener('close', handleWsClose)

  return {
    getRates: getRates(webSocket)
  }
}
