import {generateSearchId, omit} from './utils'

describe('Utils', () => {
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
        userCountry: 'US'
      }

      expect(generateSearchId(searchParameters, sapiOptions)).toEqual(
        '544aa26aa253fc95048e8fb240d6085ec1967ad8'
      )
    })
  })

  describe('omit', () => {
    it.each`
      title                             | keys                                   | obj                               | expected
      ${'existing properties'}          | ${['foo', 'bar']}                      | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{baz: 'b'}}
      ${'some non existing properties'} | ${['doesntexist', 'bar']}              | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{foo: 'a', baz: 'b'}}
      ${'no matching properties'}       | ${['doesntexist', 'alsodoesnotexist']} | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{foo: 'a', baz: 'b', bar: 'c'}}
      ${'no properties'}                | ${[]}                                  | ${{foo: 'a', baz: 'b', bar: 'c'}} | ${{foo: 'a', baz: 'b', bar: 'c'}}
      ${'empty target object'}          | ${['doesntexist', 'alsodoesnotexist']} | ${{}}                             | ${{}}
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
