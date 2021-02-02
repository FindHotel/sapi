import {
  getCheckInNights, getTagsFilter, getTranslatedAttributes, isNotEmptyOrWhiteSpace
} from './utils'

const DATE_FORMAT = 'yyyy-MM-dd'

describe('Algolia Utils', () => {
  describe('getCheckInNights', () => {
    it.each`
      title                        | checkIn         | checkOut        | expected
      ${'same day'}                | ${'2023-02-04'} | ${'2023-02-04'} | ${'230204-0'}
      ${'one day length of stay'}  | ${'2023-02-04'} | ${'2023-02-05'} | ${'230204-1'}
      ${'11 day length of stay'}   | ${'2023-02-04'} | ${'2023-02-15'} | ${'230204-11'}
      ${'negative length of stay'} | ${'2023-02-04'} | ${'2023-02-03'} | ${'230204--1'}
    `('returns $expected for $title', ({checkIn, checkOut, expected}) => {
      expect(getCheckInNights(checkIn, checkOut)).toEqual(expected)
    })
  })

  describe('getTagsFilter', () => {
    it.each`
      title                        | checkIn         | checkOut        | expected
      ${'same day'}                | ${'2023-02-04'} | ${'2023-02-04'} | ${['tags:-u230204-0']}
      ${'one day length of stay'}  | ${'2023-02-04'} | ${'2023-02-05'} | ${['tags:-u230204-1']}
      ${'11 day length of stay'}   | ${'2023-02-04'} | ${'2023-02-15'} | ${['tags:-u230204-11']}
      ${'negative length of stay'} | ${'2023-02-04'} | ${'2023-02-03'} | ${['tags:-u230204--1']}
    `('returns $expected for $title', ({checkIn, checkOut, expected}) => {
      expect(getTagsFilter(checkIn, checkOut)).toEqual(expected)
    })
  })

  describe('isNotEmptyOrWhiteSpace', () => {
    it.each`
      input                        | expected
      ${'some string'}             | ${true}
      ${''}                        | ${false}
      ${undefined}                 | ${false}
      ${'ƒünk¥ chårs'}             | ${true}
    `('returns $expected for $input', ({input, expected}) => {
      expect(isNotEmptyOrWhiteSpace(input)).toEqual(expected)
    })
  })

  describe('getTranslatedAttributes', () => {
    it.each`
      languages                    | attributes         | expected
      ${['en', 'nl']}              | ${['foo', 'bar']}  | ${['foo.en', 'bar.en', 'foo.nl', 'bar.nl']}
      ${['pt-BR']}                 | ${['bax']}         | ${['bax.pt-BR']}
    `('returns $expected for $attributes in $languages', ({languages, attributes, expected}) => {
      expect(getTranslatedAttributes(languages, attributes)).toEqual(expected)
    })
  })

  describe.skip('toString', () => {})
  describe.skip('translatedArrayToString', () => {})
  describe.skip('attributeWithFallback', () => {})
  describe.skip('mergeTranslatedAttributes', () => {})
  describe.skip('validateHit', () => {})
  describe.skip('hitToHotel', () => {})
  describe.skip('hitToHotelTypeAnchor', () => {})
  describe.skip('hitToPlaceTypeAnchor', () => {})
  describe.skip('geoResponseToResults', () => {})
})
