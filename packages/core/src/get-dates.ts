import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import lastDayOfISOWeek from 'date-fns/lastDayOfISOWeek'
import addWeeks from 'date-fns/addWeeks'

import {DatesConfig} from './configs'
import {dateToMiddayUTC} from './utils'

interface GetDatesParameters {
  checkIn?: string
  checkOut?: string
  dayDistance?: number
  nights?: number
}

interface CheckInCheckOutDates {
  checkIn: string
  checkOut: string
}

const DATE_FORMAT = 'yyyy-MM-dd'

const getNonBlockedDefaultCheckInDate = ({
  daysFromNow,
  blockedDefaultDates
}: DatesConfig): Date => {
  const todayUTC = dateToMiddayUTC(format(new Date(), DATE_FORMAT))
  let checkIn = lastDayOfISOWeek(addDays(todayUTC, daysFromNow))

  const isDateBlocked = (date: string): boolean => blockedDefaultDates.has(date)

  while (isDateBlocked(format(checkIn, DATE_FORMAT))) {
    checkIn = addWeeks(checkIn, 1)
  }

  return checkIn
}

export const getCheckInCheckOutDates = (
  parameters: GetDatesParameters,
  datesConfig: DatesConfig
): CheckInCheckOutDates => {
  const {checkIn, checkOut, dayDistance, nights = 1} = parameters
  const todayUTC = dateToMiddayUTC(format(new Date(), DATE_FORMAT))

  let checkInDate: Date

  if (checkIn) {
    checkInDate = new Date(checkIn)
  } else if (dayDistance) {
    checkInDate = addDays(todayUTC, dayDistance)
  } else {
    checkInDate = getNonBlockedDefaultCheckInDate(datesConfig)
  }

  const checkOutDate = checkOut
    ? new Date(checkOut)
    : addDays(checkInDate, nights)

  return {
    checkIn: format(checkInDate, DATE_FORMAT),
    checkOut: format(checkOutDate, DATE_FORMAT)
  }
}
