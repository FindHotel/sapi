import hash from 'object-hash'

import {
  AnonymousId,
  AnchorHit,
  HotelAnchorHit,
  PlaceAnchorHit,
  HotelAnchor,
  PlaceAnchor,
  Hit,
  Hotel,
  LocalizedString,
  LocalizedArray,
  Language
} from '../types'

type AnchorHitOrHit = AnchorHit | Hit

type LocalizedAttribute = LocalizedString | LocalizedArray

interface GenerateSearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  country: string
}

export const generateSearchId = (
  parameters: Record<string, unknown>,
  options: GenerateSearchIdOptions
): string => {
  const {anonymousId, language, currency, country} = options

  return hash({...parameters, anonymousId, language, currency, country})
}

export const getLocalizedAttributes = (
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

const toLocalizedString = (attr: LocalizedString, languages: Language[]) => {
  for (const lang of languages) {
    if (attr[lang] && attr[lang].trim() !== '') return attr[lang]
  }

  return ''
}

const arrayToLocalizedString = (
  attr: LocalizedArray,
  languages: Language[],
  separator: string | undefined = ', ' // Can be overwritten based on localisation logic
): string => {
  const out: LocalizedString = {}

  languages.forEach((lang) => {
    const current = attr[lang] || []

    out[lang] = current
      .map((item, index) => {
        if (item && item.trim() !== '') {
          return item
        }

        const fallbackLang = languages.find(
          (lang) => attr?.[lang]?.[index] && attr[lang][index].trim() !== ''
        )

        return fallbackLang ? attr[fallbackLang][index] : ''
      })
      .join(`${separator}`)
  })

  return toLocalizedString(out, languages)
}

const attributeWithFallback = (
  attr: LocalizedAttribute,
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

const mergeToLocalizedString = (
  a: LocalizedAttribute,
  b: LocalizedAttribute,
  languages: Language[]
): string => {
  const output: LocalizedArray = {}

  for (const language of languages) {
    output[language] = [
      ...attributeWithFallback(a, language, languages),
      ...attributeWithFallback(b, language, languages)
    ]
  }

  return arrayToLocalizedString(output, languages)
}

const generateHit = (
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
  const hit = generateHit(algoliaHit, {
    address: {},
    placeADName: {},
    placeDN: {},
    hotelName: {}
  }) as Hit

  return {
    ...hit,
    displayAddress: mergeToLocalizedString(
      hit.address,
      hit.placeADName,
      languages
    ),
    placeDisplayName: arrayToLocalizedString(hit.placeDN, languages),
    hotelName: toLocalizedString(hit.hotelName, languages)
  }
}

export const hitToHotelTypeAnchor = (
  anchorHit: HotelAnchorHit,
  languages: Language[]
): HotelAnchor => {
  const hit = generateHit(anchorHit, {
    hotelName: {},
    placeDN: {}
  }) as HotelAnchorHit

  return {
    ...hit,
    hotelName: toLocalizedString(hit.hotelName, languages),
    placeDisplayName: arrayToLocalizedString(hit.placeDN, languages)
  }
}

export const hitToPlaceTypeAnchor = (
  anchorHit: PlaceAnchorHit,
  languages: Language[]
): PlaceAnchor => {
  const hit = generateHit(anchorHit, {
    placeDN: {}
  }) as PlaceAnchorHit

  return {
    ...hit,
    placeDisplayName: arrayToLocalizedString(hit.placeDN, languages)
  }
}
