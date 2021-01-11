import hash from 'object-hash'

import {
  AnonymousId,
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

type LocalizedAttribute = LocalizedString | LocalizedArray

type IndexType =
  | 'autocomplete'
  | 'hotel'
  | 'hotelranking'
  | 'lov'
  | 'currency'
  | 'config'

interface GenerateSearchIdOptions {
  anonymousId: AnonymousId
  language: string
  currency: string
  country: string
}

export const getIndexName = (index: IndexType): string => {
  const indexNames = {
    autocomplete: 'prod_autocomplete_v2',
    hotel: 'prod_hotel_v3',
    hotelranking: 'prod_hotelranking_v1_os000002_hso_availability',
    lov: 'prod_lov_v2',
    currency: 'prod_curr_v1',
    config: 'prod_sapicfg_v1'
  }

  const indexName = indexNames[index]

  if (!indexName) throw new TypeError(`Unknown index "${index}"`)

  return indexName
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

export const hitToHotel = (hit: Hit, languages: Language[]): Hotel => {
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
): HotelAnchor => ({
  ...anchorHit,
  hotelName: toLocalizedString(anchorHit.hotelName, languages),
  placeDisplayName: arrayToLocalizedString(anchorHit.placeDN, languages)
})

export const hitToPlaceTypeAnchor = (
  anchorHit: PlaceAnchorHit,
  languages: Language[]
): PlaceAnchor => ({
  ...anchorHit,
  placeDisplayName: arrayToLocalizedString(anchorHit.placeDN, languages)
})
