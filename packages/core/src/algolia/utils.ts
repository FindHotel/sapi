type IndexType = 'autocomplete' | 'hotel' | 'hotelranking' | 'lov' | 'currency'

export const getIndexName = (index: IndexType): string => {
  const indexNames = {
    autocomplete: 'prod_autocomplete_v2',
    hotel: 'prod_hotel_v3',
    hotelranking: 'prod_hotelranking_v1_os000002_hso_availability',
    lov: 'prod_lov_v2',
    currency: 'prod_curr_v1'
  }

  const indexName = indexNames[index]

  if (!indexName) throw new TypeError(`Unknown index "${index}"`)

  return indexName
}

export const getLocalizedAttributes = (
  languages: string[],
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