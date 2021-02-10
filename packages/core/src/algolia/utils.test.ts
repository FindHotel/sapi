import {
  getCheckInNights,
  getTagsFilter,
  getTranslatedAttributes,
  isNotEmptyOrWhiteSpace,
  toString,
  translatedArrayToString,
  getStringFromTranslatedArray,
  getValueFromTranslatedHightlightResult,
  attributeWithFallback,
  mergeTranslatedAttributes,
  validateHit,
  placeTypeToPlaceTypeName,
  hitToHotel,
  hitToHotelTypeAnchor,
  hitToPlaceTypeAnchor,
  hitToHotelSuggest,
  hitToPlaceSuggest
} from './utils'

import {hotelHit, hotel} from '../__fixtures__/hotel'
import {
  hotelAnchorHit,
  hotelAnchor,
  placeAnchorHit,
  placeAnchor
} from '../__fixtures__/anchor'
import {
  placeSuggest,
  placeSuggestHit,
  hotelSuggest,
  hotelSuggestHit
} from '../__fixtures__/suggest'

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
      input            | expected
      ${'some string'} | ${true}
      ${''}            | ${false}
      ${undefined}     | ${false}
      ${'ƒünk¥ chårs'} | ${true}
    `('returns $expected for $input', ({input, expected}) => {
      expect(isNotEmptyOrWhiteSpace(input)).toEqual(expected)
    })
  })

  describe('getTranslatedAttributes', () => {
    it.each`
      languages       | attributes        | expected
      ${['en', 'nl']} | ${['foo', 'bar']} | ${['foo.en', 'bar.en', 'foo.nl', 'bar.nl']}
      ${['pt-BR']}    | ${['bax']}        | ${['bax.pt-BR']}
    `(
      'returns $expected for $attributes in $languages',
      ({languages, attributes, expected}) => {
        expect(getTranslatedAttributes(languages, attributes)).toEqual(expected)
      }
    )
  })

  describe('toString', () => {
    it.each`
      attr                                                  | languages                | expected
      ${{en: 'foo.en'}}                                     | ${['en']}                | ${'foo.en'}
      ${{en: 'foo.en', nl: 'foo.nl'}}                       | ${['nl', 'en']}          | ${'foo.nl'}
      ${{en: 'foo.en', nl: ''}}                             | ${['nl', 'en']}          | ${'foo.en'}
      ${{en: 'foo.en'}}                                     | ${['nl', 'en']}          | ${'foo.en'}
      ${{en: 'foo.en', pt: 'foo.pt', 'pt-BR': 'foo.pt-BR'}} | ${['pt-BR', 'pt', 'en']} | ${'foo.pt-BR'}
      ${{en: 'foo.en', pt: 'foo.pt', 'pt-BR': ''}}          | ${['pt-BR', 'pt', 'en']} | ${'foo.pt'}
      ${{en: 'foo.en', pt: '', 'pt-BR': ''}}                | ${['pt-BR', 'pt', 'en']} | ${'foo.en'}
      ${{en: '', pt: '', 'pt-BR': ''}}                      | ${['pt-BR', 'pt', 'en']} | ${''}
    `(
      'returns $expected for $attr in $languages',
      ({languages, attr, expected}) => {
        expect(toString(attr, languages)).toEqual(expected)
      }
    )
  })

  describe('translatedArrayToString', () => {
    it.each`
      attr                                                                                         | languages                | separator    | expected
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': ['foo.pt-BR', 'bar.pt-BR']}} | ${['pt-BR', 'pt', 'en']} | ${undefined} | ${'foo.pt-BR, bar.pt-BR'}
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': ['', 'bar.pt-BR']}}          | ${['pt-BR', 'pt', 'en']} | ${undefined} | ${'foo.pt, bar.pt-BR'}
      ${{en: ['foo.en', 'bar.en'], pt: ['', 'bar.pt'], 'pt-BR': ['', '']}}                         | ${['pt-BR', 'pt', 'en']} | ${undefined} | ${'foo.en, bar.pt'}
      ${{en: ['foo.en', 'bar.en'], pt: ['', ''], 'pt-BR': ['foo.pt-BR', '']}}                      | ${['pt-BR', 'pt', 'en']} | ${undefined} | ${'foo.pt-BR, bar.en'}
      ${{en: ['foo.en', 'bar.en'], pt: ['', ''], 'pt-BR': ['foo.pt-BR', '']}}                      | ${['pt-BR', 'pt', 'en']} | ${'--'}      | ${'foo.pt-BR--bar.en'}
    `(
      'returns $expected for $attr in $languages with separator="$separator"',
      ({languages, attr, separator, expected}) => {
        expect(translatedArrayToString(attr, languages, separator)).toEqual(
          expected
        )
      }
    )
  })

  describe('getStringFromTranslatedArray', () => {
    it.each`
      attr                                                                                                        | languages                | index | expected
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': ['foo.pt-BR', 'bar.pt-BR']}}                | ${['pt-BR', 'pt', 'en']} | ${0}  | ${'foo.pt-BR'}
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': ['foo.pt-BR', 'bar.pt-BR']}}                | ${['pt-BR', 'pt', 'en']} | ${1}  | ${'bar.pt-BR'}
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': ['foo.pt-BR', '']}}                         | ${['pt-BR', 'pt', 'en']} | ${-1} | ${'bar.pt'}
      ${{en: ['foo.en', 'bar.en', 'baz.en'], pt: ['foo.pt', 'bar.pt', 'baz.pt'], 'pt-BR': ['foo.pt-BR', '', '']}} | ${['pt-BR', 'pt', 'en']} | ${-1} | ${'baz.pt'}
      ${{en: ['foo.en', 'bar.en', 'baz.en'], pt: ['foo.pt', 'bar.pt', ''], 'pt-BR': ['foo.pt-BR', '', '']}}       | ${['pt-BR', 'pt', 'en']} | ${-1} | ${'baz.en'}
      ${{en: ['foo.en', 'bar.en', 'baz.en'], pt: ['foo.pt', '', 'baz.pt'], 'pt-BR': ['', '', '']}}                | ${['pt-BR', 'pt', 'en']} | ${-2} | ${'bar.en'}
    `(
      'returns $expected for $attr in $languages for index=$index',
      ({languages, attr, index, expected}) => {
        expect(getStringFromTranslatedArray(attr, languages, index)).toEqual(
          expected
        )
      }
    )
  })

  describe('getValueFromTranslatedHightlightResult', () => {
    it.each`
      attr                                                                             | languages                | expected
      ${{en: {value: 'foo.en'}, pt: {value: 'foo.pt'}, 'pt-BR': {value: 'foo.pt-BR'}}} | ${['pt-BR', 'pt', 'en']} | ${'foo.pt-BR'}
      ${{en: {value: 'foo.en'}, pt: {value: 'foo.pt'}, 'pt-BR': {value: ''}}}          | ${['pt-BR', 'pt', 'en']} | ${'foo.pt'}
      ${{en: {value: 'foo.en'}, pt: {value: ''}, 'pt-BR': {value: ''}}}                | ${['pt-BR', 'pt', 'en']} | ${'foo.en'}
    `(
      'returns $expected for $attr in $languages',
      ({languages, attr, expected}) => {
        expect(getValueFromTranslatedHightlightResult(attr, languages)).toEqual(
          expected
        )
      }
    )
  })

  describe('attributeWithFallback', () => {
    it.each`
      attr                                                                                         | language   | languages                | expected
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': ['foo.pt-BR', 'bar.pt-BR']}} | ${'pt-BR'} | ${['pt-BR', 'pt', 'en']} | ${['foo.pt-BR', 'bar.pt-BR']}
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt'], 'pt-BR': undefined}}                  | ${'pt-BR'} | ${['pt-BR', 'pt', 'en']} | ${['foo.pt', 'bar.pt']}
      ${{en: ['foo.en', 'bar.en'], pt: ['foo.pt', 'bar.pt']}}                                      | ${'pt-BR'} | ${['pt-BR', 'pt', 'en']} | ${['foo.pt', 'bar.pt']}
      ${{en: ['foo.en', 'bar.en']}}                                                                | ${'pt-BR'} | ${['pt-BR', 'pt', 'en']} | ${['foo.en', 'bar.en']}
    `(
      'returns $expected for $attr and language in $languages',
      ({languages, language, attr, expected}) => {
        expect(attributeWithFallback(attr, language, languages)).toEqual(
          expected
        )
      }
    )
  })

  describe('mergeTranslatedAttributes', () => {
    it.each`
      a                                                     | b                                                                                            | languages                | expected
      ${{en: 'foo.en', pt: 'foo.pt', 'pt-BR': 'foo.pt-BR'}} | ${{en: ['bar.en', 'baz.en'], pt: ['bar.pt', 'baz.pt'], 'pt-BR': ['bar.pt-BR', 'baz.pt-BR']}} | ${['pt-BR', 'pt', 'en']} | ${'foo.pt-BR, bar.pt-BR, baz.pt-BR'}
      ${{en: 'foo.en', pt: 'foo.pt', 'pt-BR': 'foo.pt-BR'}} | ${{en: ['bar.en', 'baz.en'], pt: ['bar.pt', 'baz.pt'], 'pt-BR': ['', 'baz.pt-BR']}}          | ${['pt-BR', 'pt', 'en']} | ${'foo.pt-BR, bar.pt, baz.pt-BR'}
      ${{en: 'foo.en', pt: 'foo.pt', 'pt-BR': 'foo.pt-BR'}} | ${{en: ['bar.en', 'baz.en'], pt: ['', 'baz.pt'], 'pt-BR': ['', 'baz.pt-BR']}}                | ${['pt-BR', 'pt', 'en']} | ${'foo.pt-BR, bar.en, baz.pt-BR'}
      ${{en: 'foo.en', pt: '', 'pt-BR': ''}}                | ${{en: ['bar.en', 'baz.en'], pt: ['', 'baz.pt'], 'pt-BR': ['', 'baz.pt-BR']}}                | ${['pt-BR', 'pt', 'en']} | ${'foo.en, bar.en, baz.pt-BR'}
    `(
      'returns "$expected" for a=$a and b=$b in $languages',
      ({languages, a, b, expected}) => {
        expect(mergeTranslatedAttributes(a, b, languages)).toEqual(expected)
      }
    )
  })

  describe('validateHit', () => {
    it.each`
      hit                                | required              | expected
      ${{foo: 'foo', bar: {baz: 'baz'}}} | ${{foo: '', bar: {}}} | ${{foo: 'foo', bar: {baz: 'baz'}}}
      ${{foo: 'foo'}}                    | ${{foo: '', bar: {}}} | ${{foo: 'foo', bar: {}}}
      ${{}}                              | ${{foo: '', bar: {}}} | ${{foo: '', bar: {}}}
    `(
      'returns "$expected" for hit=$hit and required=$required',
      ({hit, required, expected}) => {
        expect(validateHit(hit, required, true)).toEqual(expected)
      }
    )
  })

  describe('placeTypeToPlaceTypeName', () => {
    it.each`
      placeType    | expected
      ${undefined} | ${'property'}
      ${0}         | ${'country'}
      ${23}        | ${'city'}
      ${64}        | ${'airport'}
      ${1010}      | ${'airport'}
      ${199}       | ${'station'}
      ${232}       | ${'station'}
      ${251}       | ${'station'}
      ${1024}      | ${'station'}
      ${666}       | ${'area'}
    `('returns $expected for $placeType', ({placeType, expected}) => {
      expect(placeTypeToPlaceTypeName(placeType)).toEqual(expected)
    })
  })

  describe('hitToHotel', () => {
    it.each`
      hit         | languages                | expected
      ${hotelHit} | ${['pt-BR', 'pt', 'en']} | ${hotel}
    `(
      'returns "$expected" for hit=$hit in $languages',
      ({hit, languages, expected}) => {
        expect(hitToHotel(hit, languages)).toEqual(expected)
      }
    )
  })

  describe('hitToHotelTypeAnchor', () => {
    it.each`
      hit               | languages                | expected
      ${hotelAnchorHit} | ${['pt-BR', 'pt', 'en']} | ${hotelAnchor}
    `(
      'returns "$expected" for hit=$hit in $languages',
      ({hit, languages, expected}) => {
        expect(hitToHotelTypeAnchor(hit, languages)).toEqual(expected)
      }
    )
  })

  describe('hitToPlaceTypeAnchor', () => {
    it.each`
      hit               | languages                | expected
      ${placeAnchorHit} | ${['pt-BR', 'pt', 'en']} | ${placeAnchor}
    `(
      'returns "$expected" for hit=$hit in $languages',
      ({hit, languages, expected}) => {
        expect(hitToPlaceTypeAnchor(hit, languages)).toEqual(expected)
      }
    )
  })

  describe('hitToPlaceSuggest', () => {
    it.each`
      hit                | languages                | expected
      ${placeSuggestHit} | ${['pt-BR', 'pt', 'en']} | ${placeSuggest}
    `(
      'returns "$expected" for hit=$hit in $languages',
      ({hit, languages, expected}) => {
        expect(hitToPlaceSuggest(hit, languages)).toEqual(expected)
      }
    )
  })

  describe('hitToHotelSuggest', () => {
    it.each`
      hit                | languages                | expected
      ${hotelSuggestHit} | ${['pt-BR', 'pt', 'en']} | ${hotelSuggest}
    `(
      'returns "$expected" for hit=$hit in $languages',
      ({hit, languages, expected}) => {
        expect(hitToHotelSuggest(hit, languages)).toEqual(expected)
      }
    )
  })
})
