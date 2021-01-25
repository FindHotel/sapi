import {omit} from '../utils'
import differenceInDays from 'date-fns/differenceInDays'
import format from 'date-fns/format'

import {GeoSearchResults} from './geo-search'

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
  Language
} from '../types'

type AnchorHitOrHit = AnchorHit | Hit

type TranslatedAttribute = TranslatedString | TranslatedArray

/**
 * Formated CheckIn + length of stay
 * @returns a string `YYMMDD-lengthOfStay`
 */
export const getCheckInNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)
  const checkInFormatted = format(checkInDate, 'yyMMdd')
  const nights = differenceInDays(checkOutDate, checkInDate)

  return `${checkInFormatted}-${nights}`
}

/**
 * Create tags' facet filter
 */
export const getTagsFilter = (checkIn: string, checkOut: string) => {
  const checkInNights = getCheckInNights(checkIn, checkOut)

  return [`tags:-u${checkInNights}`]
}

const isNotEmptyOrWhiteSpace = (string: string | undefined) => {
  return Boolean(string && string?.trim() !== '')
}

export const getTranslatedAttributes = (
  languages: Language[],
  attributes: string[]
): string[] => {
  const output: string[] = []

  languages.forEach((language) => {
    const attributeWithLanguages = attributes.map(
      (attribute) => `${attribute}.${language}`
    )

    output.push(...attributeWithLanguages)
  })

  return output
}

const toString = (attr: TranslatedString, languages: Language[]) => {
  for (const lang of languages) {
    if (isNotEmptyOrWhiteSpace(attr?.[lang])) return attr[lang]
  }

  return ''
}

const translatedArrayToString = (
  attr: TranslatedArray,
  languages: Language[],
  separator: string | undefined = ', ' // Can be overwritten based on localisation logic
): string => {
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

const attributeWithFallback = (
  attr: TranslatedAttribute,
  language: string,
  languages: string[]
): string[] => {
  let result = attr[language]

  if (!result) {
    const index = languages.indexOf(language)
    // Slice here to start from the right position in languages array
    const fallbackLang =
      languages.slice(index).find((language) => attr[language]) || 'en'
    result = attr[fallbackLang]
  }

  if (result === undefined) {
    result = []
  }

  return typeof result === 'string' ? [result] : result
}

const mergeTranslatedAttributes = (
  a: TranslatedAttribute,
  b: TranslatedAttribute,
  languages: Language[]
): string => {
  const output: TranslatedArray = {}

  for (const language of languages) {
    output[language] = [
      ...attributeWithFallback(a, language, languages),
      ...attributeWithFallback(b, language, languages)
    ]
  }

  return translatedArrayToString(output, languages)
}

const validateHit = (
  hit: AnchorHitOrHit,
  requiredAttributes: Record<string, unknown>
): AnchorHitOrHit => {
  try {
    for (const key in requiredAttributes) {
      if (hit[key as keyof AnchorHitOrHit] === undefined) {
        throw new TypeError(`Hotel ${hit.objectID} is missing ${key} field`)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
  } catch (error) {
    console.error(error)
  }

  return {
    ...requiredAttributes,
    ...hit
  }
}

export const hitToHotel = (algoliaHit: Hit, languages: Language[]): Hotel => {
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

export const hitToHotelTypeAnchor = (
  anchorHit: HotelAnchorHit,
  languages: Language[]
): HotelAnchor => {
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

export const hitToPlaceTypeAnchor = (
  anchorHit: PlaceAnchorHit,
  languages: Language[]
): PlaceAnchor => {
  const hit = validateHit(anchorHit, {
    placeDN: {}
  }) as PlaceAnchorHit

  const anchor = {
    ...hit,
    placeDisplayName: translatedArrayToString(hit.placeDN, languages)
  }

  return omit(['placeName', 'placeADN', 'placeDN'], anchor)
}

export const geoResponseToResults = (results: GeoSearchResults) => {
  const {facets, hits, length, nbHits, offset} = results

  return {
    facets,
    hits,
    length,
    nbHits,
    offset
  }
}
