# Search API (SAPI) SDK

SDK provides high level API for searching hotels and rates

## Import

Currently SDK lives in the same daedalus repo in a separate package. 

```
import sapi from '@daedalus/sapi/src'
```

In the future it will be moved to its own findhotel/sapi repo.

## Initialisation of the client

```
const apiKey = "3590093281751dfwdfr238"

const options = {
  anonymousId: 'fd9dbb5f-b337-4dd7-b640-1f177d1d3caa',
  language: 'en',
  currency: 'USD',
  country: 'NL'
}

const sapiClient = sapi(apiKey, options)
```

Provided apiKey is Algolia API Key, and Algolia Application ID is fixed.


## Run a place search

A new place search can be runned by calling `placeSearchWithRates` method:

```
const searchParams = {
  placeId,
  checkIn,
  checkOut,
  rooms,

  ...filters
}

sapiClient.placeSearchWithRates(searchParams, onHotelsCb, onRatesCb)
```

Besides the search params it receives optional callbacks:

- `onHotelsCb` - static hotels from Algolia
- `onRatesCb` - every time client receives a new batch of rates from RAA poling


`placeSearchWithRates` is async method that returns Promise which resolves with the next response 

```
type PlaceSearchWithRatesResponse = {
  place: PlaceMeta
  rates: Rates[]
  results: PlaceSearchWithRatesResults
}
```

- `PlaceMeta` - place metadata contains information about the place (place display name, geo data etc)
- `Rates[]` - final RAA response
- `PlaceSearchWithRatesResults` Hotels with rates

## Integration
The idea is to have a separate monorepo package in SAPI repository for integrations with different frameworks.

Integration with React Deadalus search is done via `useSapiSearch` custom React hook

```
import {useSapiSearch} from '@daedalus/sapi/src'

useSapiSearch(
  searchParams,
  options,
  onSearchStartCb,
  onCompleteCb,
  onHotelsCb,
  onRatesCb
)
```

Internally `useSapiSearch` triggers a new search on every searchParams change


