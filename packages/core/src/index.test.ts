import sapiClient from '.'
import algoliasearch from 'algoliasearch'

import {configOutput, searchOutput} from './__mocks__/search'

jest.mock('algoliasearch')

algoliasearch.mockImplementation(() => ({
  search: jest.fn().mockImplementation((args) => {
    const firstArgIndex = args[0].indexName
    if (firstArgIndex === 'prod_sapicfg_v1') {
      return Promise.resolve(configOutput)
    } if (firstArgIndex === 'prod_hotelranking_v1_pp000003_tags') {
      return Promise.resolve(searchOutput)
    }
  }),
  getConfig: jest.fn().mockResolvedValue(configOutput)
}))

const expectedSapiClient = {search: expect.any(Function), getConfig: expect.any(Function)}

// FIXME: mock RAA calls
describe('SapiClient', () => {
  describe('initialization', () => {
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
      ).resolves.toMatchObject(expectedSapiClient)
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
      ).resolves.toMatchObject(expectedSapiClient)
    })
  })
})
