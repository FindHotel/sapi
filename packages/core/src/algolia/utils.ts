import {omit} from '../utils'
import differenceInDays from 'date-fns/differenceInDays'
import format from 'date-fns/format'
import {dateToMiddayUTC} from '../dates'

import {
  AnchorHit,
  HotelAnchorHit,
  PlaceAnchorHit,
  HotelAnchor,
  PlaceAnchor,
  Hit,
  Hotel,
  TranslatedString,
  TranslatedArray,
  TranslatedHighlightResult,
  Language,
  HotelSuggestHit,
  PlaceSuggestHit,
  SuggestHit,
  Suggestion,
  PlaceTypeName
} from '../types'

type AnchorSuggestOrHit = AnchorHit | Hit | SuggestHit

type TranslatedAttribute = TranslatedString | TranslatedArray

/**
 * Format checkIn + length of stay
 *
 * @returns a string `YYMMDD-lengthOfStay`
 */
export function getCheckInNights(checkIn: string, checkOut: string) {
  const checkInDate = dateToMiddayUTC(checkIn)
  const checkOutDate = dateToMiddayUTC(checkOut)

  const checkInFormatted = format(checkInDate, 'yyMMdd')
  const nights = differenceInDays(checkOutDate, checkInDate)

  return `${checkInFormatted}-${nights}`
}

/**
 * Create tags' facet filter
 *
 * Array with single tags definition.
 */
export function getTagsFilter(checkIn: string, checkOut: string) {
  const checkInNights = getCheckInNights(checkIn, checkOut)

  return [`tags:-u${checkInNights}`]
}

// REVIEW: Move to generic utils?
/**
 * Returns whether input string is empty or consists of only whitespace
 *
 * @param string
 */
export function isNotEmptyOrWhiteSpace(string: string | undefined) {
  return Boolean(string && string?.trim() !== '')
}

/**
 * Creates an array with keys to get translated attributes for each supplied language.
 *
 * @param languages array of languages for which to retreive attributes
 * @param attributes array of attributes to fetch translations for
 *
 * @returns array with keys to get translated attributes. Example:
 * ['fooAttr.en', 'fooAttr.nl']
 */
export function getTranslatedAttributes(
  languages: Language[],
  attributes: string[]
): string[] {
  const output: string[] = []

  languages.forEach((language) => {
    const attributeWithLanguages = attributes.map(
      (attribute) => `${attribute}.${language}`
    )

    output.push(...attributeWithLanguages)
  })

  return output
}

// REVIEW: we should rename this, it is doing more than casting
export function toString(attr: TranslatedString, languages: Language[]) {
  for (const lang of languages) {
    if (isNotEmptyOrWhiteSpace(attr?.[lang])) return attr[lang]
  }

  return ''
}

export function translatedArrayToString(
  attr: TranslatedArray,
  languages: Language[],
  separator: string | undefined = ', ' // Can be overwritten based on localisation logic
): string {
  const out: TranslatedString = {}

  languages.forEach((lang) => {
    const current = attr[lang] || []

    out[lang] = current
      .map((item, index) => {
        if (isNotEmptyOrWhiteSpace(item)) {
          return item
        }

        const fallbackLang = languages.find((lang) =>
          isNotEmptyOrWhiteSpace(attr?.[lang]?.[index])
        )

        return fallbackLang ? attr[fallbackLang][index] : ''
      })
      .join(`${separator}`)
  })

  return toString(out, languages)
}

export function getStringFromTranslatedArray(
  attr: TranslatedArray,
  languages: Language[],
  index: number
) {
  const out: TranslatedString = {}

  languages.forEach((lang) => {
    const current = attr[lang] || []
    const end = index === -1 ? undefined : index + 1
    const item = current.slice(index, end).toString()

    if (isNotEmptyOrWhiteSpace(item)) {
      out[lang] = item
    } else {
      const fallbackLang = languages.find((lang) =>
        isNotEmptyOrWhiteSpace(attr?.[lang]?.[index])
      )

      out[lang] = fallbackLang ? attr[fallbackLang][index] : ''
    }
  })

  return toString(out, languages)
}

export function getValueFromTranslatedHightlightResult(
  attr: TranslatedHighlightResult,
  languages: Language[]
) {
  const out: TranslatedString = {}

  languages.forEach((lang) => {
    const item = attr[lang]?.value

    if (isNotEmptyOrWhiteSpace(item)) {
      out[lang] = item
    } else {
      const fallbackLang = languages.find((lang) =>
        isNotEmptyOrWhiteSpace(attr[lang]?.value)
      )

      out[lang] = fallbackLang ? attr[fallbackLang].value : ''
    }
  })

  return toString(out, languages)
}

export function attributeWithFallback(
  attr: TranslatedAttribute,
  language: string,
  languages: string[]
): string[] {
  let result = attr[language]

  if (!result) {
    const index = languages.indexOf(language)
    // Slice here to start from the right position in languages array
    const fallbackLang =
      languages.slice(index).find((language) => attr[language]) ?? 'en'
    result = attr[fallbackLang]
  }

  if (result === undefined) {
    result = []
  }

  return typeof result === 'string' ? [result] : result
}

export function mergeTranslatedAttributes(
  a: TranslatedAttribute,
  b: TranslatedAttribute,
  languages: Language[]
): string {
  const output: TranslatedArray = {}

  for (const language of languages) {
    output[language] = [
      ...attributeWithFallback(a, language, languages),
      ...attributeWithFallback(b, language, languages)
    ]
  }

  return translatedArrayToString(output, languages)
}

export function validateHit(
  hit: AnchorSuggestOrHit | undefined,
  requiredAttributes: Record<string, any>,
  skipLoggin?: boolean
): AnchorSuggestOrHit {
  if (hit === undefined) return requiredAttributes as AnchorSuggestOrHit

  try {
    for (const key in requiredAttributes) {
      if (hit[key as keyof AnchorSuggestOrHit] === undefined) {
        throw new TypeError(`Hotel ${hit.objectID} is missing ${key} field`)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
  } catch (error) {
    if (!skipLoggin) {
      console.error(error)
    }
  }

  return {
    ...requiredAttributes,
    ...hit
  }
}

/**
 * Converts the placeType number to meaningfull string
 *
 * @param {number} placeType
 */
export function placeTypeToPlaceTypeName(placeTypeId?: number): PlaceTypeName {
  // Hotels have no place type attribute in algolia index.
  if (placeTypeId === undefined) return 'property'

  switch (placeTypeId) {
    case 0:
      return 'country'
    case 23:
      return 'city'
    case 64:
    case 1010:
      return 'airport'
    case 199:
    case 232:
    case 251:
    case 1024:
      return 'station'
    default:
      return 'area'
  }
}

export function hitToHotel(algoliaHit: Hit, languages: Language[]): Hotel {
  const hit = validateHit(algoliaHit, {
    address: {},
    placeADName: {},
    placeDN: {},
    hotelName: {}
  }) as Hit

  const hotel = {
    ...hit,
    displayAddress: mergeTranslatedAttributes(
      hit.address,
      hit.placeADName,
      languages
    ),
    placeDisplayName: translatedArrayToString(hit.placeDN, languages),
    hotelName: toString(hit.hotelName, languages)
  }

  return omit(['address', 'placeDN', 'placeADName'], hotel)
}

export function hitToHotelTypeAnchor(
  anchorHit: HotelAnchorHit,
  languages: Language[]
): HotelAnchor {
  const hit = validateHit(anchorHit, {
    hotelName: {},
    placeDN: {}
  }) as HotelAnchorHit

  const anchor = {
    ...hit,
    hotelName: toString(hit.hotelName, languages),
    placeDisplayName: translatedArrayToString(hit.placeDN, languages)
  }

  return omit(['placeADN', 'placeDN'], anchor)
}

export function hitToPlaceTypeAnchor(
  anchorHit: PlaceAnchorHit,
  languages: Language[]
): PlaceAnchor {
  const hit = validateHit(anchorHit, {
    placeDN: {}
  }) as PlaceAnchorHit

  const anchor = {
    ...hit,
    placeDisplayName: translatedArrayToString(hit.placeDN, languages)
  }

  return omit(['placeName', 'placeADN', 'placeDN'], anchor)
}

export function hitToHotelSuggest(
  suggestHit: HotelSuggestHit,
  languages: Language[]
): Suggestion {
  const hit = validateHit(suggestHit, {
    objectID: '',
    placeADN: {},
    placeDN: {},
    objectType: '',
    hotelName: {},
    _highlightResult: {}
  }) as HotelSuggestHit

  const country = getStringFromTranslatedArray(hit.placeADN, languages, -1)
  const placeParent = getStringFromTranslatedArray(hit.placeDN, languages, 1)

  const placeDisplayName = isNotEmptyOrWhiteSpace(placeParent)
    ? `${placeParent}, ${country}`
    : country

  const highlightValue = getValueFromTranslatedHightlightResult(
    hit._highlightResult.hotelName,
    languages
  )

  return {
    objectID: hit.objectID.replace(`${hit.objectType}:`, ''),
    value: toString(hit.hotelName, languages),
    highlightValue,
    placeDisplayName,
    placeTypeName: placeTypeToPlaceTypeName()
  }
}

export function hitToPlaceSuggest(
  suggestHit: PlaceSuggestHit,
  languages: Language[]
): Suggestion {
  const hit = validateHit(suggestHit, {
    objectID: '',
    placeADN: {},
    placeDN: {},
    objectType: '',
    placeName: {},
    placeType: 0,
    _highlightResult: {}
  }) as PlaceSuggestHit

  const country = getStringFromTranslatedArray(hit.placeADN, languages, -1)
  const placeParent = getStringFromTranslatedArray(hit.placeDN, languages, 1)

  const placeDisplayName = isNotEmptyOrWhiteSpace(placeParent)
    ? `${placeParent}, ${country}`
    : country

  const highlightValue = getValueFromTranslatedHightlightResult(
    hit._highlightResult.placeName,
    languages
  )

  return {
    objectID: hit.objectID.replace(`${hit.objectType}:`, ''),
    value: toString(hit.placeName, languages),
    highlightValue,
    placeDisplayName,
    placeTypeName: placeTypeToPlaceTypeName(hit.placeType)
  }
}
