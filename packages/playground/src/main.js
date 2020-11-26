import sapi from '@findhotel/sapi'

const getSearchParameter = (name) => {
  const queryString = window.location.search
  const urlParameters = new URLSearchParams(queryString)

  return urlParameters.get(name) || ''
}

const createLogger = () => {
  const startTime = new Date().getTime()

  return (name, value = '') => {
    const timeNow = new Date().getTime()
    const timeDifference = timeNow - startTime

    console.log(name, timeDifference, value)
  }
}

const run = async () => {
  const log = createLogger()
  /**
   * Create client
   */
  const client = await sapi('efa703d5c0057a24487bc9bdcb597770', {
    anonymousId: 'fd9dbb5f-b337-4dd7-b640-1f177d1d3caa',
    language: 'en',
    currency: 'EUR',
    country: 'NL'
  })

  log('Client created')

  /**
   * Get config
   */
  const config = client.getConfig()

  log('Config', config)

  /**
   * Run search
   */
  const searchParameters = {
    placeId: getSearchParameter('placeId'),
    checkIn: getSearchParameter('checkIn'),
    checkOut: getSearchParameter('checkOut'),
    rooms: getSearchParameter('rooms') || 2
  }

  log('Search start')

  const search = await client.search(
    searchParameters,
    (response) => {
      log('Hotels fetched', response)
    },
    (response) => {
      log('Rates reseived', response)
    },
    (response) => {
      log('Search completed', response)
    }
  )

  log('Search done', search)
  log('Search: get hits', search.getHits())
  log('Search: get rates', search.getRates())
  log('Search: get hits with rates', search.getHitsWithRates())

  const allRates = await search.loadRates('1055366')
  log('Search: load rates for hotelId = "1055366"', allRates)

  window.Sapi = {
    search
  }
}

run()
