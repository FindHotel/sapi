import sapiClient from '.'

const getConfig = jest.fn()
const search = jest.fn()

// FIXME: mock dynamic calls
describe('SapiClient', () => {
  describe('initialization', () => {
    const initializedSapiClient = {search, getConfig}

    it('Initializes correctly when passed required arguments', () => {
      return expect(
        sapiClient('findhotel-website', 'efa703d5c0057a24487bc9bdcb597770', {
          anonymousId: 'fd9dbb5f-b337-4dd7-b640-1f177d1d3caa',
          language: 'pt-BR',
          fallBackLanguages: ['pt', 'en'],
          currency: 'USD',
          country: 'NL',
          pageSize: 20,
          variationIds: {
            currency: 'default',
            hotel: 'default',
            lov: 'default',
            autocomplete: 'os000007-dynamic-pagesize-b',
            hso: 'pp000003-tags-b'
          }
        })
      ).resolves.toMatchObject(initializedSapiClient)
    })

    it('Initializes correctly when passed all arguments', () => {
      return expect(
        sapiClient('findhotel-website', 'efa703d5c0057a24487bc9bdcb597770', {
          anonymousId: 'fd9dbb5f-b337-4dd7-b640-1f177d1d3caa',
          language: 'pt-BR',
          fallBackLanguages: ['pt', 'en'],
          currency: 'USD',
          country: 'NL',
          includeLocalTaxes: true,
          includeTaxes: true,
          skipBackendAugmentation: false,
          facetsEnabled: false,
          pageSize: 20,
          variationIds: {
            currency: 'default',
            hotel: 'default',
            lov: 'default',
            autocomplete: 'os000007-dynamic-pagesize-b',
            hso: 'pp000003-tags-b'
          }
        })
      ).resolves.toEqual(initializedSapiClient)
    })
  })
})
