import sapi from '@findhotel/sapi'

const getSearchParameter = (name, isMultiValue, type) => {
  const queryString = window.location.search
  const urlParameters = new URLSearchParams(queryString)
  const urlParameterArray = urlParameters.getAll(name) || []

  if (urlParameterArray.length === 0) return undefined

  const typeCasts = {
    number: (parameter) => parameter && Number(parameter),
    string: (parameter) => parameter && parameter.toString()
  }

  return urlParameterArray.length === 1 && !isMultiValue
    ? type
      ? typeCasts[type](urlParameterArray[0])
      : urlParameterArray[0]
    : urlParameterArray
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
  const client = await sapi(
    'findhotel-website',
    'efa703d5c0057a24487bc9bdcb597770',
    {
      anonymousId: 'fd9dbb5f-b337-4dd7-b640-1f177d1d3caa',
      language: 'pt-BR',
      fallBackLanguages: ['pt', 'en'],
      currency: 'USD',
      country: 'NL',
      includeLocalTaxes: true,
      includeTaxes: true,
      skipBackendAugmentation: false,
      facetsEnabled: false,
      variationIds: {
        currency: 'default',
        hotel: 'default',
        lov: 'default',
        autocomplete: 'os000007-dynamic-pagesize-b',
        hso: 'pp000003-tags-b'
      }
    }
  )

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
    hotelId: getSearchParameter('hotelId'),
    placeId: getSearchParameter('placeId'),
    checkIn: getSearchParameter('checkIn'),
    checkOut: getSearchParameter('checkOut'),
    dayDistance: getSearchParameter('dayDistance', false, 'number'),
    nights: getSearchParameter('nights', false, 'number'),
    sortField: getSearchParameter('sortField'),
    sortOrder: getSearchParameter('sortOrder'),
    rooms: getSearchParameter('rooms') || '2',
    filters: {
      starRating: getSearchParameter('starRatings', true),
      guestRating: getSearchParameter('guestRatings', true),
      propertyTypes: getSearchParameter('propertyTypes', true),
      facilities: getSearchParameter('features', true),
      themes: getSearchParameter('themes', true),
      noHostels: getSearchParameter('noHostels'),
      priceMin: getSearchParameter('priceMin', false, 'number'),
      priceMax: getSearchParameter('priceMax', false, 'number')
    },
    cugDeals: 'signed_in, offline',
    deviceCategory: 'desktop',
    profileId: getSearchParameter('profile') ?? 'default',
    searchId: '0edf6cf0ae429cd67fe5005c5dffa0b8951897a8',
    useAlternativeRaaKeys: true,
    rates: true
  }

  log('Search start')

  const search = await client.search(searchParameters, {
    onSearch: (response) => {
      log('Search started', response)
    },
    onHotels: (response) => {
      log('Hotels fetched', response)
    },
    onRates: (response) => {
      log('Rates reseived', response)
    },
    onComplete: (response) => {
      log('Search completed', response)
    }
  })

  log('Search done', search)

  window.Sapi = {
    client,
    currentSearch: search
  }
}

run()
