import {
  dateFormat,
  dateStringToMiddayUTC,
  getCheckInNights,
  generateSearchId,
  omit
} from './utils'

const DATE_FORMAT = 'yyyy-MM-dd'

describe('Utils', () => {
  describe('dateFormat', () => {
    it('Formats dates', () => {
      expect(dateFormat(new Date('2018-02-01 13:23:22'), DATE_FORMAT)).toEqual(
        '2018-02-01'
      )
    })
  })

  describe('dateStringToMiddayUTC', () => {
    it('Converts date to midday UTC', () => {
      const dateString = '2018-02-01'

      const formatForTesting = (date: Date) => dateFormat(date, DATE_FORMAT)
      // Without the dateStringToMiddayUTC we're offset by one day
      expect(formatForTesting(new Date(dateString))).toEqual('2018-01-31')
      expect(formatForTesting(dateStringToMiddayUTC(dateString))).toEqual(
        '2018-02-01'
      )
    })
  })

  describe('getCheckInNights', () => {
    it.each([
      [undefined, undefined],
      ['2023-02-04', undefined],
      [undefined, '2023-02-04'],
      ['', '2023-02-04']
    ])(
      'returns undefined with incomplete arguments %s %s',
      (checkIn, checkOut) => {
        expect(getCheckInNights(checkIn, checkOut)).toEqual(undefined)
      }
    )

    it.each`
      title                        | checkIn         | checkOut        | expected
      ${'same day'}                | ${'2023-02-04'} | ${'2023-02-04'} | ${'2023-02-04-00'}
      ${'one day length of stay'}  | ${'2023-02-04'} | ${'2023-02-05'} | ${'2023-02-04-01'}
      ${'11 day length of stay'}   | ${'2023-02-04'} | ${'2023-02-15'} | ${'2023-02-04-11'}
      ${'negative length of stay'} | ${'2023-02-04'} | ${'2023-02-04'} | ${'2023-02-04--01'}
    `('returns $expected for $title', ({checkIn, checkOut, expected}) => {
      expect(getCheckInNights('2023-02-04')).toEqual(undefined)
    })
  })

  describe('generateSearchId', () => {
    it('generates a search id', () => {
      const searchParameters = {
        checkIn: '2019-05-24',
        checkOut: '2019-05-26',
        guestRatings: '7',
        hotelId: '1212868',
        rooms: '1|1',
        sortField: 'popularity',
        sortOrder: 'ascending',
        starRatings: ['4', '3']
      }
      const sapiOptions = {
        anonymousId: '84c376fc-9dd7-54c0-876f-4dab09736545',
        language: 'en',
        currency: 'EUR',
        country: 'US'
      }

      expect(generateSearchId(searchParameters, sapiOptions)).toEqual(
        'c6303dbf88def3ef723b8fdc67f938614f28ce81'
      )
    })
  })

  describe('omit', () => {
    it.each`
      title                             | keys                                  | obj                               | expected
      ${'existing properties'}          | ${['foo', 'bar']}                     | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{baz: 'b'}}
      ${'some non existing properties'} | ${['doesnexist', 'bar']}              | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{foo: 'a', baz: 'b'}}
      ${'no matching properties'}       | ${['doesnexist', 'alsodoesnotexist']} | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{foo: 'a', baz: 'b', bar: 'c'}}
      ${'no properties'}                | ${[]}                                 | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{foo: 'a', baz: 'b', bar: 'c'}}
      ${'empty target object'}          | ${['doesnexist', 'alsodoesnotexist']} | ${{}}                             | ${{}}
    `(
      'returns object without specified properties without modifying original object when passing $title',
      ({title, keys, obj, expected}) => {
        expect(omit(keys, obj)).toEqual(expected)
        expect(obj).toEqual(obj)

        const input = {foo: 'a', bar: 3}
        const output = omit(['foo'], input).bar
      }
    )
  })
})
