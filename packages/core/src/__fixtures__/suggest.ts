export const placeSuggestHit = {
  objectType: 'place',
  placeADN: {
    en: ['Paris', 'France'],
    pt: ['Paris', 'França'],
    'pt-BR': ['Paris', 'França']
  },
  placeDN: {
    en: ['Paris'],
    pt: ['Paris'],
    'pt-BR': ['Paris']
  },
  placeName: {
    en: 'Paris',
    pt: 'Paris',
    'pt-BR': 'Paris'
  },
  placeType: 23,
  objectID: 'place:43958',
  _highlightResult: {
    placeName: {
      en: {
        value: '<em>Pari</em>s',
        matchLevel: 'full',
        fullyHighlighted: false,
        matchedWords: ['pari']
      },
      pt: {
        value: '<em>Pari</em>s',
        matchLevel: 'full',
        fullyHighlighted: false,
        matchedWords: ['pari']
      },
      'pt-BR': {
        value: '<em>Pari</em>s',
        matchLevel: 'full',
        fullyHighlighted: false,
        matchedWords: ['pari']
      }
    }
  }
}

export const placeSuggest = {
  highlightValue: '<em>Pari</em>s',
  objectID: '43958',
  placeDisplayName: 'França',
  placeTypeName: 'city',
  value: 'Paris'
}

export const hotelSuggestHit = {
  hotelName: {
    en: 'Movenpick Hotel Amsterdam City Centre'
  },
  objectType: 'hotel',
  placeADN: {
    en: ['Oostelijk Havengebied', 'Amsterdam', 'The Netherlands'],
    pt: ['', 'Amesterdão', 'Holanda'],
    'pt-BR': ['', 'Amsterdã', 'Holanda']
  },
  placeDN: {
    en: ['Oostelijk Havengebied', 'Amsterdam'],
    pt: ['', 'Amesterdão'],
    'pt-BR': ['', 'Amsterdã']
  },
  objectID: 'hotel:1196472',
  _highlightResult: {
    hotelName: {
      en: {
        value: '<em>Movenpic</em>k Hotel Amsterdam City Centre',
        matchLevel: 'full',
        fullyHighlighted: false,
        matchedWords: ['movenpic']
      }
    }
  }
}

export const hotelSuggest = {
  highlightValue: '<em>Movenpic</em>k Hotel Amsterdam City Centre',
  objectID: '1196472',
  placeDisplayName: 'Amsterdã, Holanda',
  placeTypeName: 'property',
  value: 'Movenpick Hotel Amsterdam City Centre'
}
