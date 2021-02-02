import format from 'date-fns/format'

import {
  dateToMiddayUTC,
} from './dates'

const DATE_FORMAT = 'yyyy-MM-dd'

describe('Utils', () => {
  describe('dateStringToMiddayUTC', () => {
    it('Converts date to midday UTC', () => {
      const dateString = '2018-02-01'

      const formatForTesting = (date: Date) => format(date, DATE_FORMAT)
      // Without the dateStringToMiddayUTC we're offset by one day
      expect(formatForTesting(new Date(dateString))).toEqual('2018-01-31')
      expect(formatForTesting(dateToMiddayUTC(dateString))).toEqual(
        '2018-02-01'
      )
    })
  })
})
