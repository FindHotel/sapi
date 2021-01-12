const XHR = require('node-http-xhr')
const WS = require('ws')
const sapi = require('@findhotel/sapi')

global.XMLHttpRequest = XHR

async function search(placeId) {
  const client = await sapi('efa703d5c0057a24487bc9bdcb597770', {
    anonymousId: 'fd9dbb5f-b337-4dd7-b640-1f177d1d3caa',
    sapiCliKey: 'vtn_a70eh8cKRe741K5GCFxQd3AwCm0z',
    language: 'pt-BR',
    fallBackLanguages: ['pt', 'en'],
    currency: 'USD',
    country: 'NL',
    includeLocalTaxes: true,
    includeTaxes: true,
    skipBackendAugmentation: false,
    facetsEnabled: false,
    WebSocket: WS
  })

  const search = await client.search(
    {
      placeId,
      rooms: '2',
      cugDeals: 'signed_in, offline',
      deviceCategory: 'desktop',
      profileId: 'default',
      useAlternativeRaaKeys: true,
      rates: true,
      getAllOffers: false
    },
    {
      onSearch: (response) => {
        console.log('Search started', JSON.stringify(response))
      },
      onHotels: (response) => {
        console.log('Hotels fetched', JSON.stringify(response))
      },
      onRates: (response) => {
        console.log('Rates reseived', JSON.stringify(response))
      },
      onComplete: (response) => {
        console.log('Search completed', JSON.stringify(response))
      }
    }
  )

  return search
}

module.exports = {
  search
}
