# Search API (SAPI) SDK

SDK provides high level API for searching hotels and offers

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
  userCountry: 'NL'
}

const sapiClient = sapi(apiKey, options)
```

Provided apiKey is Algolia API Key, and Algolia Application ID is fixed.


Besides the search params it receives optional callbacks:

- `onHotelsReceived` - static hotels from Algolia
- `onOffersReceived` - every time client receives a new batch of offers from RAA poling


- `PlaceMeta` - place metadata contains information about the place (place display name, geo data etc)
- `Offers[]` - final RAA response

## Integration
The idea is to have a separate monorepo package in SAPI repository for integrations with different frameworks.

Integration with React Deadalus search is done via `useSapiSearch` custom React hook

```
import {useSapiSearch} from '@daedalus/sapi/src'

useSapiSearch(
  searchParams,
  options,
  onSearchStartCb,
  onComplete,
  onHotelsReceived,
  onOffersReceived
)
```

Internally `useSapiSearch` triggers a new search on every searchParams change


