import {
  dateFormat,
  dateStringToMiddayUTC,
  getCheckInNights,
  generateSearchId,
  omit
} from './utils'

const DATE_FORMAT = 'yyyy-MM-dd'

describe('Utils', () => {
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
})
