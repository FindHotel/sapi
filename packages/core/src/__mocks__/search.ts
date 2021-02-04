export const searchInput = {
  rooms: '2',
  filters: {},
  cugDeals: 'signed_in, offline',
  deviceCategory: 'desktop',
  profileId: 'default',
  searchId: '0edf6cf0ae429cd67fe5005c5dffa0b8951897a8',
  useAlternativeRaaKeys: true,
  getAllOffers: false,
  offers: true
}

export const searchOutput = {
    "results":[
       {
          "hits":[
             {
                "description":"Configuration applied for place searches",
                "filters":[
                   {
                      "criteria":"searchParams.chainIds != undefined",
                      "description":"If chainIds are specified, hotels from those chains got promoted",
                      "value":[
                         "'tags:a' + checkInNights + '<score=100>'",
                         "searchParams.chainIds|map('chainID:%s<score=200>')",
                         "'stats.nbOfReviewsBkt:1<score=1>'",
                         "'stats.nbOfReviewsBkt:2<score=2>'",
                         "'stats.nbOfReviewsBkt:3<score=3>'",
                         "'stats.nbOfReviewsBkt:4<score=4>'",
                         "'stats.nbOfReviewsBkt:5<score=5>'",
                         "'stats.nbOfReviewsBkt:6<score=6>'",
                         "'stats.nbOfReviewsBkt:7<score=7>'",
                         "'stats.nbOfReviewsBkt:8<score=8>'",
                         "'stats.nbOfReviewsBkt:9<score=9>'",
                         "'stats.nbOfReviewsBkt:10<score=10>'",
                         "'stats.shareOfGhaAhLeadersBkt:3<score=1>'",
                         "'stats.shareOfGhaAhLeadersBkt:4<score=2>'",
                         "'stats.shareOfGhaAhLeadersBkt:5<score=3>'",
                         "'stats.shareOfGhaAhLeadersBkt:6<score=4>'",
                         "'stats.shareOfGhaAhLeadersBkt:7<score=5>'",
                         "'stats.shareOfGhaAhLeadersBkt:8<score=6>'",
                         "'stats.shareOfGhaAhLeadersBkt:9<score=6>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:4<score=1>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:5<score=1>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:6<score=2>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:7<score=2>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:8<score=3>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:9<score=3>'",
                         "'stats.hasFhtPrivDealProbBkt:4<score=1>'",
                         "'stats.hasFhtPrivDealProbBkt:5<score=1>'",
                         "'stats.hasFhtPrivDealProbBkt:6<score=2>'",
                         "'stats.hasFhtPrivDealProbBkt:7<score=2>'",
                         "'stats.hasFhtPrivDealProbBkt:8<score=3>'",
                         "'stats.hasFhtPrivDealProbBkt:9<score=3>'",
                         "'stats.overallRatingRounded:7<score=1>'",
                         "'stats.overallRatingRounded:8<score=2>'",
                         "'stats.overallRatingRounded:9<score=2>'",
                         "'stats.overallRatingRounded:10<score=2>'",
                         "'stats.websiteUnavailabilityBkt:0<score=6>'",
                         "'stats.websiteUnavailabilityBkt:1<score=6>'",
                         "'stats.websiteUnavailabilityBkt:2<score=5>'",
                         "'stats.websiteUnavailabilityBkt:3<score=4>'",
                         "'stats.websiteUnavailabilityBkt:4<score=2>'",
                         "'stats.websiteUnavailabilityBkt:10<score=2>'",
                         "'stats.rateTypePromotion:1<score=5>'"
                      ]
                   },
                   {
                      "criteria":"true",
                      "value":[
                         "'tags:a' + checkInNights + '<score=100>'",
                         "'stats.nbOfReviewsBkt:1<score=1>'",
                         "'stats.nbOfReviewsBkt:2<score=2>'",
                         "'stats.nbOfReviewsBkt:3<score=3>'",
                         "'stats.nbOfReviewsBkt:4<score=4>'",
                         "'stats.nbOfReviewsBkt:5<score=5>'",
                         "'stats.nbOfReviewsBkt:6<score=6>'",
                         "'stats.nbOfReviewsBkt:7<score=7>'",
                         "'stats.nbOfReviewsBkt:8<score=8>'",
                         "'stats.nbOfReviewsBkt:9<score=9>'",
                         "'stats.nbOfReviewsBkt:10<score=10>'",
                         "'stats.shareOfGhaAhLeadersBkt:3<score=1>'",
                         "'stats.shareOfGhaAhLeadersBkt:4<score=2>'",
                         "'stats.shareOfGhaAhLeadersBkt:5<score=3>'",
                         "'stats.shareOfGhaAhLeadersBkt:6<score=4>'",
                         "'stats.shareOfGhaAhLeadersBkt:7<score=5>'",
                         "'stats.shareOfGhaAhLeadersBkt:8<score=6>'",
                         "'stats.shareOfGhaAhLeadersBkt:9<score=6>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:4<score=1>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:5<score=1>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:6<score=2>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:7<score=2>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:8<score=3>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:9<score=3>'",
                         "'stats.hasFhtPrivDealProbBkt:4<score=1>'",
                         "'stats.hasFhtPrivDealProbBkt:5<score=1>'",
                         "'stats.hasFhtPrivDealProbBkt:6<score=2>'",
                         "'stats.hasFhtPrivDealProbBkt:7<score=2>'",
                         "'stats.hasFhtPrivDealProbBkt:8<score=3>'",
                         "'stats.hasFhtPrivDealProbBkt:9<score=3>'",
                         "'stats.overallRatingRounded:7<score=1>'",
                         "'stats.overallRatingRounded:8<score=2>'",
                         "'stats.overallRatingRounded:9<score=2>'",
                         "'stats.overallRatingRounded:10<score=2>'",
                         "'stats.websiteUnavailabilityBkt:0<score=6>'",
                         "'stats.websiteUnavailabilityBkt:1<score=6>'",
                         "'stats.websiteUnavailabilityBkt:2<score=5>'",
                         "'stats.websiteUnavailabilityBkt:3<score=4>'",
                         "'stats.websiteUnavailabilityBkt:4<score=2>'",
                         "'stats.websiteUnavailabilityBkt:10<score=2>'",
                         "'stats.rateTypePromotion:1<score=5>'"
                      ]
                   }
                ],
                "objectID":"place_search"
             },
             {
                "description":"Filters that will be applied to hotel searches only",
                "filters":[
                   {
                      "criteria":"true",
                      "value":[
                         "'tags:a' + checkInNights + '<score=100>'",
                         "'starRating:' + (anchorHotel.starRating-1// 1) + '<score=3>'",
                         "'starRating:' + (anchorHotel.starRating// 1) + '<score=6>'",
                         "'starRating:' + (anchorHotel.starRating+1// 1) + '<score=3>'",
                         "'stats.nbOfReviewsBkt:1<score=1>'",
                         "'stats.nbOfReviewsBkt:2<score=2>'",
                         "'stats.nbOfReviewsBkt:3<score=3>'",
                         "'stats.nbOfReviewsBkt:4<score=4>'",
                         "'stats.nbOfReviewsBkt:5<score=5>'",
                         "'stats.nbOfReviewsBkt:6<score=6>'",
                         "'stats.nbOfReviewsBkt:7<score=7>'",
                         "'stats.nbOfReviewsBkt:8<score=8>'",
                         "'stats.nbOfReviewsBkt:9<score=9>'",
                         "'stats.nbOfReviewsBkt:10<score=10>'",
                         "'stats.shareOfGhaAhLeadersBkt:3<score=1>'",
                         "'stats.shareOfGhaAhLeadersBkt:4<score=2>'",
                         "'stats.shareOfGhaAhLeadersBkt:5<score=3>'",
                         "'stats.shareOfGhaAhLeadersBkt:6<score=4>'",
                         "'stats.shareOfGhaAhLeadersBkt:7<score=5>'",
                         "'stats.shareOfGhaAhLeadersBkt:8<score=6>'",
                         "'stats.shareOfGhaAhLeadersBkt:9<score=6>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:4<score=1>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:5<score=1>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:6<score=2>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:7<score=2>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:8<score=3>'",
                         "'stats.shareOfRedirectWithPriceDropBkt:9<score=3>'",
                         "'stats.hasFhtPrivDealProbBkt:4<score=1>'",
                         "'stats.hasFhtPrivDealProbBkt:5<score=1>'",
                         "'stats.hasFhtPrivDealProbBkt:6<score=2>'",
                         "'stats.hasFhtPrivDealProbBkt:7<score=2>'",
                         "'stats.hasFhtPrivDealProbBkt:8<score=3>'",
                         "'stats.hasFhtPrivDealProbBkt:9<score=3>'",
                         "'stats.overallRatingRounded:7<score=1>'",
                         "'stats.overallRatingRounded:8<score=2>'",
                         "'stats.overallRatingRounded:9<score=2>'",
                         "'stats.overallRatingRounded:10<score=2>'",
                         "'stats.websiteUnavailabilityBkt:0<score=6>'",
                         "'stats.websiteUnavailabilityBkt:1<score=6>'",
                         "'stats.websiteUnavailabilityBkt:2<score=5>'",
                         "'stats.websiteUnavailabilityBkt:3<score=4>'",
                         "'stats.websiteUnavailabilityBkt:4<score=2>'",
                         "'stats.websiteUnavailabilityBkt:10<score=2>'",
                         "'stats.rateTypePromotion:1<score=5>'"
                      ]
                   }
                ],
                "objectID":"hotel_search"
             }
          ],
          "nbHits":2,
          "page":0,
          "nbPages":1,
          "hitsPerPage":20,
          "exhaustiveNbHits":true,
          "query":"",
          "params":"attributesToHighlight=%5B%5D",
          "index":"prod_hotelranking_v1_pp000003_tags",
          "processingTimeMS":1
       },
       {
          "hits":[
             {
                "categoryID":19,
                "id":9,
                "value":{
                   "en":"Airport shuttle",
                   "pt":"Serviço de transporte ao aeroporto",
                   "pt-BR":"Transporte de e para o aeroporto"
                },
                "objectID":"Facility:9",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":521,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":7,
                "value":{
                   "en":"Swimming pool",
                   "pt":"Piscina",
                   "pt-BR":"Piscina"
                },
                "objectID":"Facility:7",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":520,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":6,
                "value":{
                   "en":"Parking",
                   "pt":"Estacionamento",
                   "pt-BR":"Estacionamento"
                },
                "objectID":"Facility:6",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":519,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":50,
                "value":{
                   "en":"Kitchen",
                   "pt":"Cozinha",
                   "pt-BR":"Cozinha"
                },
                "objectID":"Facility:50",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":518,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":5,
                "value":{
                   "en":"Restaurant",
                   "pt":"Restaurante",
                   "pt-BR":"Restaurante"
                },
                "objectID":"Facility:5",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":517,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":4,
                "value":{
                   "en":"Fitness Room/Gym",
                   "pt":"Sala de ginástica/Ginásio",
                   "pt-BR":"Sala de ginástica/Academia"
                },
                "objectID":"Facility:4",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":516,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":13,
                "id":3,
                "value":{
                   "en":"High-speed Internet",
                   "pt":"Internet de alta velocidade",
                   "pt-BR":"Internet de alta velocidade"
                },
                "objectID":"Facility:3",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":515,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":13,
                "id":299,
                "value":{
                   "en":"Free Wi-Fi",
                   "pt":"Wi-Fi gratuito",
                   "pt-BR":"Wi-Fi grátis"
                },
                "objectID":"Facility:299",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":514,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":298,
                "value":{
                   "en":"Kitchenette",
                   "pt":"Kitchenette",
                   "pt-BR":"Kitchenette"
                },
                "objectID":"Facility:298",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":513,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":13,
                "id":202,
                "value":{
                   "en":"WiFi",
                   "pt":"Wi-Fi",
                   "pt-BR":"WiFi"
                },
                "objectID":"Facility:202",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":512,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":193,
                "value":{
                   "en":"Spa & Wellness Centre",
                   "pt":"Spa/Health Club",
                   "pt-BR":"Spa e centro de bem-estar"
                },
                "objectID":"Facility:193",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":511,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":18,
                "value":{
                   "en":"24-Hour Reception",
                   "pt":"Receção 24 horas",
                   "pt-BR":"Recepção 24 horas"
                },
                "objectID":"Facility:18",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":510,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":14,
                "id":8,
                "value":{
                   "en":"Pet Friendly",
                   "pt":"Permitido animais",
                   "pt-BR":"Permitido animais"
                },
                "objectID":"Facility:8",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":509,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":65,
                "value":{
                   "en":"Excursions",
                   "pt":"Excursões",
                   "pt-BR":"Excursões"
                },
                "objectID":"Facility:65",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":508,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":8,
                "id":63,
                "value":{
                   "en":"Casino",
                   "pt":"Casino",
                   "pt-BR":"Cassino"
                },
                "objectID":"Facility:63",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":507,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":61,
                "value":{
                   "en":"Hot Tub / Jacuzzi",
                   "pt":"Banheira de hidromassagem/Jacúzi",
                   "pt-BR":"Banheira/Jacuzzi"
                },
                "objectID":"Facility:61",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":506,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":60,
                "value":{
                   "en":"Laundry service",
                   "pt":"Serviço de lavandaria",
                   "pt-BR":"Serviço de lavanderia"
                },
                "objectID":"Facility:60",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":505,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":56,
                "value":{
                   "en":"TV",
                   "pt":"TV",
                   "pt-BR":"TV"
                },
                "objectID":"Facility:56",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":504,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":51,
                "value":{
                   "en":"Coffee / Tea Maker",
                   "pt":"Máquina de café/chá",
                   "pt-BR":"Máquina de café/chá"
                },
                "objectID":"Facility:51",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":503,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":45,
                "value":{
                   "en":"Bath",
                   "pt":"Banheira",
                   "pt-BR":"Banheira"
                },
                "objectID":"Facility:45",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":502,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":44,
                "value":{
                   "en":"Connecting Rooms",
                   "pt":"Quartos interligados",
                   "pt-BR":"Quartos interligados"
                },
                "objectID":"Facility:44",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":501,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":41,
                "value":{
                   "en":"Cable / Satellite TV",
                   "pt":"TV a cabo/satélite",
                   "pt-BR":"TV à cabo/satélite"
                },
                "objectID":"Facility:41",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":500,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":297,
                "value":{
                   "en":"Spa Bath",
                   "pt":"Banheira de hidromassagem",
                   "pt-BR":"Banheira de Hidromassagem"
                },
                "objectID":"Facility:297",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":499,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":295,
                "value":{
                   "en":"Bedding/Pillow Choices",
                   "pt":"Opções de roupa de cama e almofada",
                   "pt-BR":"Opções de almofada/roupa de cama"
                },
                "objectID":"Facility:295",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":498,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":14,
                "id":293,
                "value":{
                   "en":"Fireplace",
                   "pt":"Lareira",
                   "pt-BR":"Lareira"
                },
                "objectID":"Facility:293",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":497,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":29,
                "value":{
                   "en":"Banquet Facilities",
                   "pt":"Instalações para banquetes",
                   "pt-BR":"Instalações para jantares/eventos"
                },
                "objectID":"Facility:29",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":496,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":281,
                "value":{
                   "en":"Self Laundry",
                   "pt":"Lavagem de roupa própria",
                   "pt-BR":"Lavanderia self-service"
                },
                "objectID":"Facility:281",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":495,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":27,
                "value":{
                   "en":"Golf Course",
                   "pt":"Campo de golfe",
                   "pt-BR":"Campo de golfe"
                },
                "objectID":"Facility:27",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":494,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":266,
                "value":{
                   "en":"Family Room",
                   "pt":"Sala familiar",
                   "pt-BR":"Sala para família"
                },
                "objectID":"Facility:266",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":493,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":23,
                "value":{
                   "en":"Tennis Courts",
                   "pt":"Campos de ténis",
                   "pt-BR":"Quadra de tênis"
                },
                "objectID":"Facility:23",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":492,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":222,
                "value":{
                   "en":"Pool Outdoor",
                   "pt":"Piscina exterior",
                   "pt-BR":"Piscina externa"
                },
                "objectID":"Facility:222",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":491,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":221,
                "value":{
                   "en":"Pool Indoor",
                   "pt":"Piscina interior",
                   "pt-BR":"Piscina interna"
                },
                "objectID":"Facility:221",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":490,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":22,
                "value":{
                   "en":"Non-Smoking Rooms",
                   "pt":"Quartos de não fumadores",
                   "pt-BR":"Quartos de não fumantes"
                },
                "objectID":"Facility:22",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":489,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":21,
                "value":{
                   "en":"Air Conditioned",
                   "pt":"Ar condicionado",
                   "pt-BR":"Ar condicionado"
                },
                "objectID":"Facility:21",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":488,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":20,
                "value":{
                   "en":"Babysitting / Child Services",
                   "pt":"Babysitting/Serviço para crianças",
                   "pt-BR":"Serviço de babá"
                },
                "objectID":"Facility:20",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":487,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":2,
                "value":{
                   "en":"Room Service",
                   "pt":"Serviço de quartos",
                   "pt-BR":"Serviço de quarto"
                },
                "objectID":"Facility:2",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":486,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":19,
                "value":{
                   "en":"Dry Cleaning",
                   "pt":"Limpeza a seco",
                   "pt-BR":"lavagem a seco"
                },
                "objectID":"Facility:19",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":485,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":17,
                "value":{
                   "en":"Elevator / Lift",
                   "pt":"Elevador",
                   "pt-BR":"Elevador"
                },
                "objectID":"Facility:17",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":484,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":15,
                "value":{
                   "en":"Bar / Lounge",
                   "pt":"Bar/Lounge",
                   "pt-BR":"Bar/Lounge"
                },
                "objectID":"Facility:15",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":483,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":11,
                "value":{
                   "en":"Concierge",
                   "pt":"Porteiro",
                   "pt-BR":"Porteiro"
                },
                "objectID":"Facility:11",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":482,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":1,
                "id":10,
                "value":{
                   "en":"Disabled Access",
                   "pt":"Acessível a pessoas com mobilidade condicionada",
                   "pt-BR":"Acesso para deficientes"
                },
                "objectID":"Facility:10",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":481,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":1,
                "value":{
                   "en":"Business Center",
                   "pt":"Centro de negócios",
                   "pt-BR":"Centro de Negócios"
                },
                "objectID":"Facility:1",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":480,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":99,
                "value":{
                   "en":"Dart Board",
                   "pt":"Jogo de dardos",
                   "pt-BR":"Jogo de dardos"
                },
                "objectID":"Facility:99",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":479,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":98,
                "value":{
                   "en":"Billiards",
                   "pt":"Snooker",
                   "pt-BR":"Snooker/Sinuca"
                },
                "objectID":"Facility:98",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":478,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":97,
                "value":{
                   "en":"Wine Tasting",
                   "pt":"Prova de vinhos",
                   "pt-BR":"Degustação de vinhos"
                },
                "objectID":"Facility:97",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":477,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":96,
                "value":{
                   "en":"Water Activities",
                   "pt":"Atividades aquáticas",
                   "pt-BR":"Actividades aquáticas"
                },
                "objectID":"Facility:96",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":476,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":95,
                "value":{
                   "en":"Tennis Courts (indoor)",
                   "pt":"Campos de ténis (interior)",
                   "pt-BR":"Quadra de tênis - interna"
                },
                "objectID":"Facility:95",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":475,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":94,
                "value":{
                   "en":"Shopping (outlet)",
                   "pt":"Compras (outlet)",
                   "pt-BR":"Compras - outlet"
                },
                "objectID":"Facility:94",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":474,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":8,
                "id":92,
                "value":{
                   "en":"Nightclubs",
                   "pt":"Clubes noturnos",
                   "pt-BR":"Casas noturnas"
                },
                "objectID":"Facility:92",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":473,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":91,
                "value":{
                   "en":"Mountain Climbing",
                   "pt":"Montanhismo",
                   "pt-BR":"Montanhismo"
                },
                "objectID":"Facility:91",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":472,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":90,
                "value":{
                   "en":"Karaoke",
                   "pt":"Karaoke",
                   "pt-BR":"Karaokê"
                },
                "objectID":"Facility:90",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":471,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":89,
                "value":{
                   "en":"Horse Racing",
                   "pt":"Corrida de cavalos",
                   "pt-BR":"Corrida de cavalos"
                },
                "objectID":"Facility:89",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":470,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":88,
                "value":{
                   "en":"Football Field",
                   "pt":"Campo de futebol",
                   "pt-BR":"Campo de futebol"
                },
                "objectID":"Facility:88",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":469,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":87,
                "value":{
                   "en":"Fine Dining",
                   "pt":"Culinária requintada",
                   "pt-BR":"Jantar fino"
                },
                "objectID":"Facility:87",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":468,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":86,
                "value":{
                   "en":"Cycling",
                   "pt":"Andar de bicicleta",
                   "pt-BR":"Passeio de bicicleta"
                },
                "objectID":"Facility:86",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":467,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":85,
                "value":{
                   "en":"Windsurfing",
                   "pt":"Windsurf",
                   "pt-BR":"Windsurf"
                },
                "objectID":"Facility:85",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":466,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":84,
                "value":{
                   "en":"Walking",
                   "pt":"Caminhada",
                   "pt-BR":"Caminhada"
                },
                "objectID":"Facility:84",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":465,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":83,
                "value":{
                   "en":"Skating Rink",
                   "pt":"Ringue de patinagem",
                   "pt-BR":"Pista de patinação"
                },
                "objectID":"Facility:83",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":464,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":82,
                "value":{
                   "en":"Scuba Diving",
                   "pt":"Mergulho",
                   "pt-BR":"Mergulho"
                },
                "objectID":"Facility:82",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":463,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":81,
                "value":{
                   "en":"Nature Trail",
                   "pt":"Percurso pela natureza",
                   "pt-BR":"Trilhas naturais"
                },
                "objectID":"Facility:81",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":462,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":80,
                "value":{
                   "en":"Mountain Biking",
                   "pt":"Bicicleta de montanha",
                   "pt-BR":"Mountain Biking"
                },
                "objectID":"Facility:80",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":461,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":79,
                "value":{
                   "en":"Jet-Ski",
                   "pt":"Jet-ski",
                   "pt-BR":"Jet-ski"
                },
                "objectID":"Facility:79",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":460,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":78,
                "value":{
                   "en":"Gym off-site",
                   "pt":"Ginásio fora das instalações",
                   "pt-BR":"Ginásio externo"
                },
                "objectID":"Facility:78",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":459,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":75,
                "value":{
                   "en":"Dog Racing",
                   "pt":"Corrida de cães",
                   "pt-BR":"Corrida de cães"
                },
                "objectID":"Facility:75",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":458,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":74,
                "value":{
                   "en":"Boating",
                   "pt":"Andar de barco",
                   "pt-BR":"Passeio de barco"
                },
                "objectID":"Facility:74",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":457,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":73,
                "value":{
                   "en":"Beach (Nearby)",
                   "pt":"Praia (na proximidade)",
                   "pt-BR":"Praia (Na proximidade)"
                },
                "objectID":"Facility:73",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":456,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":72,
                "value":{
                   "en":"Beach (Direct Access)",
                   "pt":"Praia - Acesso direto",
                   "pt-BR":"Praia (Acesso Direto)"
                },
                "objectID":"Facility:72",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":455,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":71,
                "value":{
                   "en":"Water Sports (non-motorized)",
                   "pt":"Desportos aquáticos (não motorizados)",
                   "pt-BR":"Esportes aquáticos (não motorizados)"
                },
                "objectID":"Facility:71",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":454,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":70,
                "value":{
                   "en":"Water Sports (motorized)",
                   "pt":"Desportos aquáticos (motorizados)",
                   "pt-BR":"Esportes aquáticos (motorizados)"
                },
                "objectID":"Facility:70",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":453,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":69,
                "value":{
                   "en":"Squash Courts",
                   "pt":"Campos de squash",
                   "pt-BR":"Quadra de squash"
                },
                "objectID":"Facility:69",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":452,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":68,
                "value":{
                   "en":"Golf Course (nearby)",
                   "pt":"Campo de golfe (na proximidade)",
                   "pt-BR":"Campo de golfe (na proximidade)"
                },
                "objectID":"Facility:68",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":451,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":67,
                "value":{
                   "en":"Golf Course (on site)",
                   "pt":"Campo de golfe (nas instalações)",
                   "pt-BR":"Campo de golfe (nas instalações)"
                },
                "objectID":"Facility:67",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":450,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":66,
                "value":{
                   "en":"Garden",
                   "pt":"Jardim",
                   "pt-BR":"Jardim"
                },
                "objectID":"Facility:66",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":449,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":64,
                "value":{
                   "en":"Shops",
                   "pt":"Lojas",
                   "pt-BR":"Lojas"
                },
                "objectID":"Facility:64",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":448,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":62,
                "value":{
                   "en":"Bicycle Rental",
                   "pt":"Aluguer de bicicletas",
                   "pt-BR":"aluguel de bicicletas"
                },
                "objectID":"Facility:62",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":447,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":59,
                "value":{
                   "en":"Private beach",
                   "pt":"Praia Privada",
                   "pt-BR":"Praia privada"
                },
                "objectID":"Facility:59",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":446,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":58,
                "value":{
                   "en":"DVD Player",
                   "pt":"Leitor de DVD",
                   "pt-BR":"Aparelho de DVD"
                },
                "objectID":"Facility:58",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":445,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":57,
                "value":{
                   "en":"CD Player",
                   "pt":"Leitor de CD",
                   "pt-BR":"Aparelho de CD"
                },
                "objectID":"Facility:57",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":444,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":13,
                "id":55,
                "value":{
                   "en":"Modem / Data Port",
                   "pt":"Modem/Porta de dados",
                   "pt-BR":"Modem/Porta de dados"
                },
                "objectID":"Facility:55",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":443,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":54,
                "value":{
                   "en":"Complimentary Toiletries",
                   "pt":"Artigos de higiene de cortesia",
                   "pt-BR":"Artigos de higiene de cortesia"
                },
                "objectID":"Facility:54",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":442,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":53,
                "value":{
                   "en":"Hair Dryer",
                   "pt":"Secador de cabelo",
                   "pt-BR":"Secador de cabelo"
                },
                "objectID":"Facility:53",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":441,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":52,
                "value":{
                   "en":"Microwave",
                   "pt":"Micro-ondas",
                   "pt-BR":"Microondas"
                },
                "objectID":"Facility:52",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":440,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":49,
                "value":{
                   "en":"Meeting Rooms",
                   "pt":"Salas de Reuniões",
                   "pt-BR":"Salas de Reuniões"
                },
                "objectID":"Facility:49",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":439,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":48,
                "value":{
                   "en":"Florist",
                   "pt":"Florista",
                   "pt-BR":"Floricultura"
                },
                "objectID":"Facility:48",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":438,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":47,
                "value":{
                   "en":"Wake-up Service",
                   "pt":"Serviço de despertar",
                   "pt-BR":"Serviço de despertador"
                },
                "objectID":"Facility:47",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":437,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":46,
                "value":{
                   "en":"Porters",
                   "pt":"Bagageiro",
                   "pt-BR":"Bagageiro"
                },
                "objectID":"Facility:46",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":436,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":43,
                "value":{
                   "en":"In Room Movies",
                   "pt":"Filmes no quarto",
                   "pt-BR":"Filmes no quarto"
                },
                "objectID":"Facility:43",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":435,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":42,
                "value":{
                   "en":"Secretarial Service",
                   "pt":"Serviço de Secretariado",
                   "pt-BR":"Serviço de secretária"
                },
                "objectID":"Facility:42",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":434,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":40,
                "value":{
                   "en":"Refrigerator",
                   "pt":"Frigorífico",
                   "pt-BR":"Geladeira"
                },
                "objectID":"Facility:40",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":433,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":39,
                "value":{
                   "en":"Mini Bar",
                   "pt":"Mini Bar",
                   "pt-BR":"Mini Bar"
                },
                "objectID":"Facility:39",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":432,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":38,
                "value":{
                   "en":"ATM / Cash Machine",
                   "pt":"Caixa ATM/Multibanco",
                   "pt-BR":"Caixa eletrônico"
                },
                "objectID":"Facility:38",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":431,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":37,
                "value":{
                   "en":"News Stand",
                   "pt":"Quiosque de jornais",
                   "pt-BR":"Banca de jornais"
                },
                "objectID":"Facility:37",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":430,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":36,
                "value":{
                   "en":"Security Guard",
                   "pt":"Agente de segurança",
                   "pt-BR":"Segurança"
                },
                "objectID":"Facility:36",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":429,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":35,
                "value":{
                   "en":"Sauna",
                   "pt":"Sauna",
                   "pt-BR":"Sauna"
                },
                "objectID":"Facility:35",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":428,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":34,
                "value":{
                   "en":"Safe-Deposit Box",
                   "pt":"Cofre",
                   "pt-BR":"Cofre"
                },
                "objectID":"Facility:34",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":427,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":33,
                "value":{
                   "en":"Multilingual Staff",
                   "pt":"Funcionários multilingues",
                   "pt-BR":"Funcionários multilíngues"
                },
                "objectID":"Facility:33",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":426,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":32,
                "value":{
                   "en":"Medical Assistance Available",
                   "pt":"Assistência médica disponível",
                   "pt-BR":"Assistência médica disponível"
                },
                "objectID":"Facility:32",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":425,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":31,
                "value":{
                   "en":"Currency Exchange",
                   "pt":"Câmbio de moeda",
                   "pt-BR":"Serviço de câmbio"
                },
                "objectID":"Facility:31",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":424,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":30,
                "value":{
                   "en":"Conference Room(s)",
                   "pt":"Sala(s) de conferência",
                   "pt-BR":"Sala(s) de conferência"
                },
                "objectID":"Facility:30",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":423,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":296,
                "value":{
                   "en":"Doctor on call",
                   "pt":"Médico de permanência",
                   "pt-BR":"Médico permanente"
                },
                "objectID":"Facility:296",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":422,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":294,
                "value":{
                   "en":"Pillow Top Mattress",
                   "pt":"Sobrecolchão",
                   "pt-BR":"Cama em tecido alcochoado"
                },
                "objectID":"Facility:294",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":421,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":292,
                "value":{
                   "en":"Free Parking",
                   "pt":"Estacionamento gratuito",
                   "pt-BR":"Estacionamento gratuito"
                },
                "objectID":"Facility:292",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":420,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":291,
                "value":{
                   "en":"Paid Parking",
                   "pt":"Estacionamento pago",
                   "pt-BR":"Estacionamento pago"
                },
                "objectID":"Facility:291",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":419,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":288,
                "value":{
                   "en":"Bus Parking",
                   "pt":"Estacionamento de autocarro",
                   "pt-BR":"Estacionamento de ônibus"
                },
                "objectID":"Facility:288",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":418,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":285,
                "value":{
                   "en":"No Parking",
                   "pt":"Sem parque de estacionamento",
                   "pt-BR":"Sem estacionamento"
                },
                "objectID":"Facility:285",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":417,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":28,
                "value":{
                   "en":"Housekeeping",
                   "pt":"Serviço de limpeza",
                   "pt-BR":"Serviço de quarto"
                },
                "objectID":"Facility:28",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":416,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":279,
                "value":{
                   "en":"Forgotten items service",
                   "pt":"Serviço de artigos esquecidos",
                   "pt-BR":"Achados e perdidos"
                },
                "objectID":"Facility:279",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":415,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":278,
                "value":{
                   "en":"Shoe Shine",
                   "pt":"Engraxamento de sapatos",
                   "pt-BR":"Engraxamento de sapatos"
                },
                "objectID":"Facility:278",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":414,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":14,
                "id":275,
                "value":{
                   "en":"Designer Hotel",
                   "pt":"Hotel Design",
                   "pt-BR":"Hotel de alto design"
                },
                "objectID":"Facility:275",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":413,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":14,
                "id":274,
                "value":{
                   "en":"Gay/Lesbian Friendly",
                   "pt":"Gay/Lesbian Friendly",
                   "pt-BR":"Simpatizante homosexual"
                },
                "objectID":"Facility:274",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":412,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":272,
                "value":{
                   "en":"Late check-out (subject to availability)",
                   "pt":"Check-out tardio (sujeito a disponibilidade)",
                   "pt-BR":"Check-out tardio (sujeito a disponibilidade)"
                },
                "objectID":"Facility:272",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":411,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":271,
                "value":{
                   "en":"Separate check-in and check-out",
                   "pt":"Check-in e check-out separado",
                   "pt-BR":"Check-in e check-out separado"
                },
                "objectID":"Facility:271",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":410,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":270,
                "value":{
                   "en":"Express Check-In/Check-Out",
                   "pt":"Check-in/Check-out expresso",
                   "pt-BR":"Check-in/Check-out expresso"
                },
                "objectID":"Facility:270",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":409,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":264,
                "value":{
                   "en":"Smoking Room",
                   "pt":"Sala para fumador",
                   "pt-BR":"Sala de fumantes"
                },
                "objectID":"Facility:264",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":408,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":263,
                "value":{
                   "en":"Cell phone/mobile rental",
                   "pt":"Aluguer de telemóvel",
                   "pt-BR":"Aluguel de telefone celular"
                },
                "objectID":"Facility:263",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":407,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":259,
                "value":{
                   "en":"Vending Machines",
                   "pt":"Máquinas de venda automática",
                   "pt-BR":"Vending Machines"
                },
                "objectID":"Facility:259",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":406,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":258,
                "value":{
                   "en":"Ice Machine",
                   "pt":"Máquina de gelo",
                   "pt-BR":"Máquina de gelo"
                },
                "objectID":"Facility:258",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":405,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":257,
                "value":{
                   "en":"Souvenirs/Gift Shop",
                   "pt":"Loja de lembranças",
                   "pt-BR":"Loja de souvenirs"
                },
                "objectID":"Facility:257",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":404,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":256,
                "value":{
                   "en":"Shops in Hotel",
                   "pt":"Lojas no hotel",
                   "pt-BR":"Lojas no hotel"
                },
                "objectID":"Facility:256",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":403,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":255,
                "value":{
                   "en":"Designated Smoking Area",
                   "pt":"Área designada para fumadores",
                   "pt-BR":"Área de fumantes"
                },
                "objectID":"Facility:255",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":402,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":1,
                "id":254,
                "value":{
                   "en":"Allergy-Free Room Available",
                   "pt":"Quarto para pessoas com alergia",
                   "pt-BR":"Quarto para alérgicos disponível"
                },
                "objectID":"Facility:254",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":401,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":253,
                "value":{
                   "en":"Luggage Storage",
                   "pt":"Depósito de bagagem",
                   "pt-BR":"Armazenamento de bagagem"
                },
                "objectID":"Facility:253",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":400,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":252,
                "value":{
                   "en":"Executive Floor",
                   "pt":"Andar executivo",
                   "pt-BR":"Andar executivo"
                },
                "objectID":"Facility:252",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":399,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":251,
                "value":{
                   "en":"Security and video surveillance in public areas",
                   "pt":"Segurança e vigilância de vídeo em áreas públicas",
                   "pt-BR":"Segurança e vigilância de vídeo em áreas públicas"
                },
                "objectID":"Facility:251",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":398,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":248,
                "value":{
                   "en":"Personal Shopper Service",
                   "pt":"Serviço de assistente de compras personalizado",
                   "pt-BR":"Serviço de assistente de compras personalizado"
                },
                "objectID":"Facility:248",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":397,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":247,
                "value":{
                   "en":"Doorman/doorwoman",
                   "pt":"Porteiro",
                   "pt-BR":"Porteiro(a)"
                },
                "objectID":"Facility:247",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":396,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":244,
                "value":{
                   "en":"Breakfast in the Room",
                   "pt":"Pequeno-almoço no quarto",
                   "pt-BR":"Café da manhã no quarto"
                },
                "objectID":"Facility:244",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":395,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":243,
                "value":{
                   "en":"Packed Lunches",
                   "pt":"Almoços embalados",
                   "pt-BR":"Almoços embalados"
                },
                "objectID":"Facility:243",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":394,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":242,
                "value":{
                   "en":"Picnic Area/Tables",
                   "pt":"Área de piquenique/Mesas",
                   "pt-BR":"Área de piquenique/Mesas"
                },
                "objectID":"Facility:242",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":393,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":240,
                "value":{
                   "en":"Coffee Shop/Cafeteria",
                   "pt":"Cafetaria",
                   "pt-BR":"Cafetaria/Casa de café"
                },
                "objectID":"Facility:240",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":392,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":24,
                "value":{
                   "en":"Convention Center",
                   "pt":"Centro de convenções",
                   "pt-BR":"Centro de convenções"
                },
                "objectID":"Facility:24",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":391,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":239,
                "value":{
                   "en":"Poolside Bar",
                   "pt":"Bar junto à piscina",
                   "pt-BR":"Bar junto à piscina"
                },
                "objectID":"Facility:239",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":390,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":238,
                "value":{
                   "en":"Pub",
                   "pt":"Bar",
                   "pt-BR":"Bar"
                },
                "objectID":"Facility:238",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":389,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":8,
                "id":236,
                "value":{
                   "en":"Theatre",
                   "pt":"Teatro",
                   "pt-BR":"Teatro"
                },
                "objectID":"Facility:236",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":388,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":8,
                "id":235,
                "value":{
                   "en":"Live Music",
                   "pt":"Música ao vivo",
                   "pt-BR":"Música ao vivo"
                },
                "objectID":"Facility:235",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":387,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":234,
                "value":{
                   "en":"Disco",
                   "pt":"Discoteca",
                   "pt-BR":"Discoteca"
                },
                "objectID":"Facility:234",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":386,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":232,
                "value":{
                   "en":"Supervised child care/activities",
                   "pt":"Atividades supervisionadas para crianças",
                   "pt-BR":"Actividades supervisionadas para de crianças"
                },
                "objectID":"Facility:232",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":385,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":9,
                "id":230,
                "value":{
                   "en":"Highchairs",
                   "pt":"Cadeiras altas",
                   "pt-BR":"Cadeiras altas"
                },
                "objectID":"Facility:230",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":384,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":8,
                "id":229,
                "value":{
                   "en":"Games Available",
                   "pt":"Jogos disponíveis",
                   "pt-BR":"Jogos disponíveis"
                },
                "objectID":"Facility:229",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":383,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":10,
                "id":228,
                "value":{
                   "en":"Family Friendly Menu",
                   "pt":"Menu para crianças",
                   "pt-BR":"Cardápio para crianças"
                },
                "objectID":"Facility:228",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":382,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":227,
                "value":{
                   "en":"Baby Listening/Monitoring",
                   "pt":"Monitorização/Vigilância áudio de bebé",
                   "pt-BR":"Babá eletrônica"
                },
                "objectID":"Facility:227",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":381,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":226,
                "value":{
                   "en":"Cots",
                   "pt":"Beliches",
                   "pt-BR":"Berço"
                },
                "objectID":"Facility:226",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":380,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":9,
                "id":225,
                "value":{
                   "en":"Kids Club",
                   "pt":"Clube para crianças",
                   "pt-BR":"Clube para crianças"
                },
                "objectID":"Facility:225",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":379,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":223,
                "value":{
                   "en":"Outdoor heated pool",
                   "pt":"Piscina exterior aquecida",
                   "pt-BR":"Piscina externa aquecida"
                },
                "objectID":"Facility:223",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":378,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":220,
                "value":{
                   "en":"Child Pool",
                   "pt":"Piscina para crianças",
                   "pt-BR":"Piscina para crianças"
                },
                "objectID":"Facility:220",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":377,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":219,
                "value":{
                   "en":"Spa/Jetted Tub",
                   "pt":"Spa/Jacúzi",
                   "pt-BR":"Hidromassagem"
                },
                "objectID":"Facility:219",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":376,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":218,
                "value":{
                   "en":"Jetted Tub",
                   "pt":"Jacúzi",
                   "pt-BR":"Banheira com jato de água"
                },
                "objectID":"Facility:218",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":375,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":216,
                "value":{
                   "en":"Bath Menu",
                   "pt":"Menu de banho",
                   "pt-BR":"Menu de banho"
                },
                "objectID":"Facility:216",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":374,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":215,
                "value":{
                   "en":"Grab bars in bathroom",
                   "pt":"Barras de suporte na casa de banho",
                   "pt-BR":"Barras de suporte no chuveiro"
                },
                "objectID":"Facility:215",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":373,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":214,
                "value":{
                   "en":"Bidet",
                   "pt":"Bidé",
                   "pt-BR":"Bidê"
                },
                "objectID":"Facility:214",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":372,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":213,
                "value":{
                   "en":"Bathtub/Shower Combination",
                   "pt":"Combinação de banheira/chuveiro",
                   "pt-BR":"Banheira/Chuveiro Integrados"
                },
                "objectID":"Facility:213",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":371,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":212,
                "value":{
                   "en":"Private Toilet",
                   "pt":"Sanitário privado",
                   "pt-BR":"Sanitário privado"
                },
                "objectID":"Facility:212",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":370,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":211,
                "value":{
                   "en":"Private Bathroom",
                   "pt":"Casa de banho privativa",
                   "pt-BR":"Banheiro privado"
                },
                "objectID":"Facility:211",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":369,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":210,
                "value":{
                   "en":"En suite",
                   "pt":"Na suite",
                   "pt-BR":"Suíte"
                },
                "objectID":"Facility:210",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":368,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":209,
                "value":{
                   "en":"Shower",
                   "pt":"Chuveiro",
                   "pt-BR":"Chuveiro"
                },
                "objectID":"Facility:209",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":367,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":208,
                "value":{
                   "en":"Shared Bathroom",
                   "pt":"Casa de banho partilhada",
                   "pt-BR":"Banheiro compartilhado"
                },
                "objectID":"Facility:208",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":366,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":204,
                "value":{
                   "en":"Towels",
                   "pt":"Toalhas",
                   "pt-BR":"Toalhas"
                },
                "objectID":"Facility:204",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":365,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":7,
                "id":203,
                "value":{
                   "en":"Bathrobes",
                   "pt":"Roupões de banho",
                   "pt-BR":"Roupões de banho"
                },
                "objectID":"Facility:203",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":364,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":13,
                "id":200,
                "value":{
                   "en":"Analogue dial-up data port",
                   "pt":"Porta analógica de marcação de dados",
                   "pt-BR":"Conexão dial-up analógica"
                },
                "objectID":"Facility:200",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":363,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":199,
                "value":{
                   "en":"Facial Treatments",
                   "pt":"Tratamentos de beleza",
                   "pt-BR":"Tratamentos faciais"
                },
                "objectID":"Facility:199",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":362,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":198,
                "value":{
                   "en":"Body Treatments",
                   "pt":"Tratamentos corporais",
                   "pt-BR":"Tratamentos corporais"
                },
                "objectID":"Facility:198",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":361,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":197,
                "value":{
                   "en":"Health Centre",
                   "pt":"Centro de saúde",
                   "pt-BR":"Centro de saúde"
                },
                "objectID":"Facility:197",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":360,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":195,
                "value":{
                   "en":"Barber/Beauty Shop",
                   "pt":"Cabeleireiro/Salão de beleza",
                   "pt-BR":"Cabeleireiro/Salão de beleza"
                },
                "objectID":"Facility:195",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":359,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":194,
                "value":{
                   "en":"Steam Bath",
                   "pt":"Banho turco",
                   "pt-BR":"Banho turco"
                },
                "objectID":"Facility:194",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":358,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":192,
                "value":{
                   "en":"Solarium",
                   "pt":"Solário",
                   "pt-BR":"Solário"
                },
                "objectID":"Facility:192",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":357,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":191,
                "value":{
                   "en":"Massage",
                   "pt":"Massagem",
                   "pt-BR":"Massagem"
                },
                "objectID":"Facility:191",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":356,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":190,
                "value":{
                   "en":"Steam Room",
                   "pt":"Banho Turco",
                   "pt-BR":"Sauna a vapor"
                },
                "objectID":"Facility:190",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":355,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":189,
                "value":{
                   "en":"Jacuzzi",
                   "pt":"Jacúzi",
                   "pt-BR":"Jacuzzi"
                },
                "objectID":"Facility:189",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":354,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":187,
                "value":{
                   "en":"Fitness Facilities",
                   "pt":"Instalações para exercício físico",
                   "pt-BR":"Espaço para exercício físico"
                },
                "objectID":"Facility:187",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":353,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":185,
                "value":{
                   "en":"Salon",
                   "pt":"Salão",
                   "pt-BR":"Salão"
                },
                "objectID":"Facility:185",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":352,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":1,
                "id":184,
                "value":{
                   "en":"Knock Light (Hearing Impaired)",
                   "pt":"Campainha com sinal luminoso (para pessoas com audição condicionada)",
                   "pt-BR":"Luz de atençao à porta (para pessoas com problemas de audição)"
                },
                "objectID":"Facility:184",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":351,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":1,
                "id":183,
                "value":{
                   "en":"Wheel Chair Access",
                   "pt":"Acesso para cadeiras de rodas",
                   "pt-BR":"Acesso para cadeirantes"
                },
                "objectID":"Facility:183",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":350,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":1,
                "id":182,
                "value":{
                   "en":"Disabled Parking",
                   "pt":"Estacionamento para pessoas com mobilidade condicionada",
                   "pt-BR":"Estacionamento para deficientes"
                },
                "objectID":"Facility:182",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":349,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":1,
                "id":181,
                "value":{
                   "en":"Disabled Accessible Rooms",
                   "pt":"Acesso a quartos para pessoas com mobilidade condicionada",
                   "pt-BR":"Quartos de hotel com acesso para deficientes"
                },
                "objectID":"Facility:181",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":348,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":180,
                "value":{
                   "en":"Flowers and Gift Arrangements For Individuals or Conference Attendees",
                   "pt":"Preparativos de presentes e de flores para pessoas individuais ou participantes de conferências",
                   "pt-BR":"Organização de presentes e flores individuais ou grupos em conferências"
                },
                "objectID":"Facility:180",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":347,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":179,
                "value":{
                   "en":"Exhibit Space",
                   "pt":"Espaço de exposições",
                   "pt-BR":"Centro de exposições"
                },
                "objectID":"Facility:179",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":346,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":178,
                "value":{
                   "en":"Custom event planning available",
                   "pt":"Planeamento de eventos personalizados disponível",
                   "pt-BR":"Planejamento de eventos customizados disponível"
                },
                "objectID":"Facility:178",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":345,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":177,
                "value":{
                   "en":"Rehearsal Dinners",
                   "pt":"Jantares de ensaio",
                   "pt-BR":"Jantares de ensaio"
                },
                "objectID":"Facility:177",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":344,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":176,
                "value":{
                   "en":"Engagement Parties",
                   "pt":"Festas de noivado",
                   "pt-BR":"Festas de noivado"
                },
                "objectID":"Facility:176",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":343,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":175,
                "value":{
                   "en":"Ceremonies",
                   "pt":"Cerimónias",
                   "pt-BR":"Cerimônias"
                },
                "objectID":"Facility:175",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":342,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":174,
                "value":{
                   "en":"Bridal Showers",
                   "pt":"Festas de despedida de solteira",
                   "pt-BR":"Festas para noivas (chá de cozinha/panela)"
                },
                "objectID":"Facility:174",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":341,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":173,
                "value":{
                   "en":"Full-service catering",
                   "pt":"Serviço de catering completo",
                   "pt-BR":"Serviço de buffet completo"
                },
                "objectID":"Facility:173",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":340,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":172,
                "value":{
                   "en":"Slide Projector",
                   "pt":"Projetor de diapositivos",
                   "pt-BR":"Projetor de slides"
                },
                "objectID":"Facility:172",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":339,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":171,
                "value":{
                   "en":"Portable Phone",
                   "pt":"Telefone portátil",
                   "pt-BR":"Telefone portátil"
                },
                "objectID":"Facility:171",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":338,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":170,
                "value":{
                   "en":"Mini-cassette Recorder",
                   "pt":"Gravador de mini-cassetes",
                   "pt-BR":"Gravador de mini-cassetes"
                },
                "objectID":"Facility:170",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":337,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":169,
                "value":{
                   "en":"White board",
                   "pt":"Quadro branco",
                   "pt-BR":"Lousa/Quadro branco"
                },
                "objectID":"Facility:169",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":336,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":168,
                "value":{
                   "en":"TV set cabinet",
                   "pt":"Armário de TV",
                   "pt-BR":"Rack de TV"
                },
                "objectID":"Facility:168",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":335,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":167,
                "value":{
                   "en":"Stage",
                   "pt":"Palco",
                   "pt-BR":"Palco"
                },
                "objectID":"Facility:167",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":334,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":166,
                "value":{
                   "en":"Screen and Moveable Screen",
                   "pt":"Ecrã e ecrã móvel",
                   "pt-BR":"telão fixo e móvel"
                },
                "objectID":"Facility:166",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":333,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":165,
                "value":{
                   "en":"Podium",
                   "pt":"Pódio",
                   "pt-BR":"Pódio"
                },
                "objectID":"Facility:165",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":332,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":164,
                "value":{
                   "en":"Microphone and Wireless Microphone",
                   "pt":"Microfone e microfone sem fios",
                   "pt-BR":"Microfone e microfone sem fios"
                },
                "objectID":"Facility:164",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":331,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":163,
                "value":{
                   "en":"LCD Projector",
                   "pt":"Projetor LCD",
                   "pt-BR":"Projetor LCD"
                },
                "objectID":"Facility:163",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":330,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":162,
                "value":{
                   "en":"Flip chart",
                   "pt":"Flipchart",
                   "pt-BR":"Flip chart"
                },
                "objectID":"Facility:162",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":329,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":6,
                "id":161,
                "value":{
                   "en":"Conference Manager",
                   "pt":"Gestor de conferência",
                   "pt-BR":"Gestor de conferência"
                },
                "objectID":"Facility:161",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":328,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":160,
                "value":{
                   "en":"Video Conferencing",
                   "pt":"Videoconferência",
                   "pt-BR":"Videoconferência"
                },
                "objectID":"Facility:160",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":327,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":158,
                "value":{
                   "en":"Audio/Visual Equipment",
                   "pt":"Equipamento audiovisual",
                   "pt-BR":"Equipamento audiovisual"
                },
                "objectID":"Facility:158",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":326,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":156,
                "value":{
                   "en":"Meeting Coordinator",
                   "pt":"Coordenador de reunião",
                   "pt-BR":"Coordenador de reunião"
                },
                "objectID":"Facility:156",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":325,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":155,
                "value":{
                   "en":"Function Rooms",
                   "pt":"Salas multifunções",
                   "pt-BR":"Salas para eventos"
                },
                "objectID":"Facility:155",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":324,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":5,
                "id":154,
                "value":{
                   "en":"Ballroom",
                   "pt":"Sala de baile",
                   "pt-BR":"Ballroom"
                },
                "objectID":"Facility:154",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":323,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":153,
                "value":{
                   "en":"Scanning",
                   "pt":"Digitalização",
                   "pt-BR":"Escaneamento de documentos"
                },
                "objectID":"Facility:153",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":322,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":152,
                "value":{
                   "en":"Posting",
                   "pt":"Colocação de mensagens",
                   "pt-BR":"Envio de mensagens"
                },
                "objectID":"Facility:152",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":321,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":151,
                "value":{
                   "en":"Blackboard",
                   "pt":"Quadro preto",
                   "pt-BR":"Lousa/Quadro Negro"
                },
                "objectID":"Facility:151",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":320,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":150,
                "value":{
                   "en":"Laser printing",
                   "pt":"Impressão a laser",
                   "pt-BR":"Impressora a laser"
                },
                "objectID":"Facility:150",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":319,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":149,
                "value":{
                   "en":"Lamination",
                   "pt":"Plastificação",
                   "pt-BR":"Plastificação"
                },
                "objectID":"Facility:149",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":318,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":148,
                "value":{
                   "en":"Facsimile",
                   "pt":"Fax",
                   "pt-BR":"Fax"
                },
                "objectID":"Facility:148",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":317,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":147,
                "value":{
                   "en":"Dictaphone",
                   "pt":"Gravador áudio",
                   "pt-BR":"Gravador de áudio"
                },
                "objectID":"Facility:147",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":316,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":146,
                "value":{
                   "en":"Binding",
                   "pt":"Encadernação",
                   "pt-BR":"Quartos interligados"
                },
                "objectID":"Facility:146",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":315,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":145,
                "value":{
                   "en":"Colour Printing",
                   "pt":"Impressão a cores",
                   "pt-BR":"Impressora colorida"
                },
                "objectID":"Facility:145",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":314,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":144,
                "value":{
                   "en":"Courier",
                   "pt":"Mensageiro",
                   "pt-BR":"Mensageiro"
                },
                "objectID":"Facility:144",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":313,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":142,
                "value":{
                   "en":"Office Supplies",
                   "pt":"Objetos de escritório",
                   "pt-BR":"Material de escritório"
                },
                "objectID":"Facility:142",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":312,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":141,
                "value":{
                   "en":"Ticket Service",
                   "pt":"Serviço de bilhetes",
                   "pt-BR":"Serviço de ingressos"
                },
                "objectID":"Facility:141",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":311,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":140,
                "value":{
                   "en":"Direct dial phone",
                   "pt":"Telefone de marcação direta",
                   "pt-BR":"Telefone de ligação direta"
                },
                "objectID":"Facility:140",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":310,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":3,
                "id":14,
                "value":{
                   "en":"Massage / Beauty Centre",
                   "pt":"Massagem/Centro de beleza",
                   "pt-BR":"Massagem/Centro de beleza"
                },
                "objectID":"Facility:14",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":309,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":17,
                "id":139,
                "value":{
                   "en":"Desk",
                   "pt":"Secretária",
                   "pt-BR":"Mesa de trabalho"
                },
                "objectID":"Facility:139",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":308,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":136,
                "value":{
                   "en":"Photocopier",
                   "pt":"Fotocopiadora",
                   "pt-BR":"Fotocopiadora"
                },
                "objectID":"Facility:136",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":307,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":134,
                "value":{
                   "en":"Laptop",
                   "pt":"Computador portátil",
                   "pt-BR":"Laptop"
                },
                "objectID":"Facility:134",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":306,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":4,
                "id":133,
                "value":{
                   "en":"Computer",
                   "pt":"Computador",
                   "pt-BR":"Computador"
                },
                "objectID":"Facility:133",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":305,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":132,
                "value":{
                   "en":"Water-skiing",
                   "pt":"Esqui aquático",
                   "pt-BR":"Esqui aquático"
                },
                "objectID":"Facility:132",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":304,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":131,
                "value":{
                   "en":"Sightseeing Tours",
                   "pt":"Percursos turísticos",
                   "pt-BR":"Passeios turísticas"
                },
                "objectID":"Facility:131",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":303,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":16,
                "id":130,
                "value":{
                   "en":"Shopping (antiques)",
                   "pt":"Compras – Antiguidades",
                   "pt-BR":"Compras - Antiguidades"
                },
                "objectID":"Facility:130",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":302,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":12,
                "id":13,
                "value":{
                   "en":"Tour Desk",
                   "pt":"Balcão de turismo",
                   "pt-BR":"Balcão de turismo"
                },
                "objectID":"Facility:13",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":301,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":18,
                "id":129,
                "value":{
                   "en":"Museums/Galleries",
                   "pt":"Museus/Galerias",
                   "pt-BR":"Museus/Galerias"
                },
                "objectID":"Facility:129",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":300,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":128,
                "value":{
                   "en":"Lake",
                   "pt":"Lago",
                   "pt-BR":"Lago"
                },
                "objectID":"Facility:128",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":299,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":127,
                "value":{
                   "en":"Aerobics on site",
                   "pt":"Aeróbica no local",
                   "pt-BR":"Exercícios aeróbicos"
                },
                "objectID":"Facility:127",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":298,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":126,
                "value":{
                   "en":"Motor Boating on site",
                   "pt":"Andar de barco a motor no local",
                   "pt-BR":"Passeio de barco a motor no local"
                },
                "objectID":"Facility:126",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":297,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":15,
                "id":125,
                "value":{
                   "en":"Ecotours on Site",
                   "pt":"Percursos ecológicos no local",
                   "pt-BR":"Passeios ecológicos no local"
                },
                "objectID":"Facility:125",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":296,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":124,
                "value":{
                   "en":"Scooter/Moped Rentals on site",
                   "pt":"Aluguer de scooter/lambreta no local",
                   "pt-BR":"Aluguel de scooter no local"
                },
                "objectID":"Facility:124",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":295,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":8,
                "id":123,
                "value":{
                   "en":"Easel",
                   "pt":"Cavalete",
                   "pt-BR":"Cavalete"
                },
                "objectID":"Facility:123",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":294,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":122,
                "value":{
                   "en":"Diving Centre",
                   "pt":"Centro de mergulho",
                   "pt-BR":"Centro de mergulho"
                },
                "objectID":"Facility:122",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":293,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":121,
                "value":{
                   "en":"Pool Games",
                   "pt":"Jogos de piscina",
                   "pt-BR":"Recreação em piscina"
                },
                "objectID":"Facility:121",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":292,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":120,
                "value":{
                   "en":"Beach Soccer and Volleyball",
                   "pt":"Futebol de praia e voleibol",
                   "pt-BR":"Futebol de praia e voleibol"
                },
                "objectID":"Facility:120",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":291,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":19,
                "id":12,
                "value":{
                   "en":"Valet Parking",
                   "pt":"Serviço de estacionamento",
                   "pt-BR":"Estacionamento com manobrista"
                },
                "objectID":"Facility:12",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":290,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":119,
                "value":{
                   "en":"Ice skating",
                   "pt":"Patinagem no gelo",
                   "pt-BR":"Patinação no gelo"
                },
                "objectID":"Facility:119",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":289,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":118,
                "value":{
                   "en":"Jogging and exercise trail",
                   "pt":"Percurso para corrida e exercício",
                   "pt-BR":"Percurso para corrida e exercício"
                },
                "objectID":"Facility:118",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":288,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":11,
                "id":117,
                "value":{
                   "en":"Hiking",
                   "pt":"Caminhada",
                   "pt-BR":"Caminhada"
                },
                "objectID":"Facility:117",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":287,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":116,
                "value":{
                   "en":"Clay Pigeon Shooting",
                   "pt":"Tiro aos pratos",
                   "pt-BR":"Tiro aos pratos"
                },
                "objectID":"Facility:116",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":286,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":115,
                "value":{
                   "en":"Kayaking",
                   "pt":"Caiaque",
                   "pt-BR":"Caiaque"
                },
                "objectID":"Facility:115",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":285,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":114,
                "value":{
                   "en":"Bird Watching",
                   "pt":"Observação de pássaros",
                   "pt-BR":"Observação de pássaros"
                },
                "objectID":"Facility:114",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":284,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":113,
                "value":{
                   "en":"Surfing",
                   "pt":"Surf",
                   "pt-BR":"Surfe"
                },
                "objectID":"Facility:113",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":283,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":112,
                "value":{
                   "en":"Canoeing",
                   "pt":"Canoagem",
                   "pt-BR":"Canoagem"
                },
                "objectID":"Facility:112",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":282,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":111,
                "value":{
                   "en":"Animal Watching",
                   "pt":"Observação de fauna",
                   "pt-BR":"Observação de Animais"
                },
                "objectID":"Facility:111",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":281,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":110,
                "value":{
                   "en":"Rock Climbing",
                   "pt":"Escalada",
                   "pt-BR":"Escalada"
                },
                "objectID":"Facility:110",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":280,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":109,
                "value":{
                   "en":"Tennis Courts (outdoor)",
                   "pt":"Campos de ténis (exterior)",
                   "pt-BR":"Quadra de tênis - externa"
                },
                "objectID":"Facility:109",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":279,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":108,
                "value":{
                   "en":"Volleyball",
                   "pt":"Voleibol",
                   "pt-BR":"Voleibol"
                },
                "objectID":"Facility:108",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":278,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":107,
                "value":{
                   "en":"Bowling Alley",
                   "pt":"Pista de bowling",
                   "pt-BR":"Pista de boliche"
                },
                "objectID":"Facility:107",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":277,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":106,
                "value":{
                   "en":"Dancing",
                   "pt":"Dança",
                   "pt-BR":"Dança"
                },
                "objectID":"Facility:106",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":276,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":105,
                "value":{
                   "en":"Cricket Pitch",
                   "pt":"Campo de críquete",
                   "pt-BR":"Campo de críquete"
                },
                "objectID":"Facility:105",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":275,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":104,
                "value":{
                   "en":"Playground",
                   "pt":"Parque infantil",
                   "pt-BR":"Playground"
                },
                "objectID":"Facility:104",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":274,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":103,
                "value":{
                   "en":"Horse Riding",
                   "pt":"Andar a cavalo",
                   "pt-BR":"Cavalgada"
                },
                "objectID":"Facility:103",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":273,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":102,
                "value":{
                   "en":"Golf (miniature)",
                   "pt":"Golfe (miniatura)",
                   "pt-BR":"Mini golfe"
                },
                "objectID":"Facility:102",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":272,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "categoryID":2,
                "id":100,
                "value":{
                   "en":"Fishing",
                   "pt":"Pesca",
                   "pt-BR":"Pesca"
                },
                "objectID":"Facility:100",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":271,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":9,
                "value":{
                   "en":"Family",
                   "pt":"Família"
                },
                "objectID":"Theme:9",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":270,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":8,
                "value":{
                   "en":"Luxury",
                   "pt":"Luxo"
                },
                "objectID":"Theme:8",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":269,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":7,
                "value":{
                   "en":"Food / Dining",
                   "pt":"Gourmet",
                   "pt-BR":"Gastronomia"
                },
                "objectID":"Theme:7",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":268,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":6,
                "value":{
                   "en":"Sightseeing",
                   "pt":"Paisagens",
                   "pt-BR":"Paisagens / Montanhas"
                },
                "objectID":"Theme:6",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":267,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":5,
                "value":{
                   "en":"Shopping",
                   "pt":"Compras"
                },
                "objectID":"Theme:5",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":266,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":3,
                "value":{
                   "en":"Budget / Backpacker",
                   "pt":"Económico / Turista de Mochila"
                },
                "objectID":"Theme:3",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":265,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":21,
                "value":{
                   "en":"Eco-friendly",
                   "pt":"Amigo do ambiente"
                },
                "objectID":"Theme:21",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":264,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":20,
                "value":{
                   "en":"LGBT-friendly",
                   "pt":"Simpatizante LGBT"
                },
                "objectID":"Theme:20",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":263,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":2,
                "value":{
                   "en":"City",
                   "pt":"Cidade"
                },
                "objectID":"Theme:2",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":262,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":19,
                "value":{
                   "en":"Skiing / Winter Sports",
                   "pt":"Esqui / Desportos de Inverno"
                },
                "objectID":"Theme:19",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":261,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":18,
                "value":{
                   "en":"Wildlife / Outdoors",
                   "pt":"Vida Selvagem / Ar Livre"
                },
                "objectID":"Theme:18",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":260,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":17,
                "value":{
                   "en":"Boutique / Design",
                   "pt":"Boutique / Design"
                },
                "objectID":"Theme:17",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":259,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":16,
                "value":{
                   "en":"Historic",
                   "pt":"Histórico"
                },
                "objectID":"Theme:16",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":258,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":15,
                "value":{
                   "en":"Countryside",
                   "pt":"Campo"
                },
                "objectID":"Theme:15",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":257,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":14,
                "value":{
                   "en":"Spa / Relaxation",
                   "pt":"Spa / Relaxamento"
                },
                "objectID":"Theme:14",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":256,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":13,
                "value":{
                   "en":"Sports / Leisure",
                   "pt":"Desportos / Lazer",
                   "pt-BR":"Esporte / Lazer"
                },
                "objectID":"Theme:13",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":255,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":12,
                "value":{
                   "en":"Business",
                   "pt":"Empresarial"
                },
                "objectID":"Theme:12",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":254,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":106,
                "value":{
                   "en":"Golf"
                },
                "objectID":"Theme:106",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":253,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":105,
                "value":{
                   "en":"Japanese business property"
                },
                "objectID":"Theme:105",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":252,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":104,
                "value":{
                   "en":"Hot springs"
                },
                "objectID":"Theme:104",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":251,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":103,
                "value":{
                   "en":"Winery"
                },
                "objectID":"Theme:103",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":250,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":102,
                "value":{
                   "en":"Adventure"
                },
                "objectID":"Theme:102",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":249,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":101,
                "value":{
                   "en":"Casino"
                },
                "objectID":"Theme:101",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":248,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":10,
                "value":{
                   "en":"Romantic",
                   "pt":"Romântico"
                },
                "objectID":"Theme:10",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":247,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":1,
                "value":{
                   "en":"Beach / Coast",
                   "pt":"Praia / Costa"
                },
                "objectID":"Theme:1",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":246,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":96,
                "value":{
                   "en":"Beautiful beach",
                   "pt":"Praia muito bonita",
                   "pt-BR":"Praia bonita"
                },
                "objectID":"Sentiment:96",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":245,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":95,
                "value":{
                   "en":"Amazing beach",
                   "pt":"Praia espetacular",
                   "pt-BR":"Praia incrível"
                },
                "objectID":"Sentiment:95",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":244,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":94,
                "value":{
                   "en":"Great beach",
                   "pt":"Ótima praia",
                   "pt-BR":"Praia excelente"
                },
                "objectID":"Sentiment:94",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":243,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":93,
                "value":{
                   "en":"Loved the beach",
                   "pt":"Adoraram a praia",
                   "pt-BR":"Adorou a praia"
                },
                "objectID":"Sentiment:93",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":242,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":9,
                "value":{
                   "en":"Loved the pool",
                   "pt":"Adoraram a piscina",
                   "pt-BR":"Adorou a piscina"
                },
                "objectID":"Sentiment:9",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":241,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":84,
                "value":{
                   "en":"Loved the spacious bathroom",
                   "pt":"Adoraram a casa de banho espaçosa",
                   "pt-BR":"Adorou o banheiro espaçoso"
                },
                "objectID":"Sentiment:84",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":240,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":83,
                "value":{
                   "en":"Sizeable bathroom",
                   "pt":"Casa de banho espaçosa",
                   "pt-BR":"Banheiro de tamanho bom"
                },
                "objectID":"Sentiment:83",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":239,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":82,
                "value":{
                   "en":"Well-appointed bathroom",
                   "pt":"Casa de banho bem equipada",
                   "pt-BR":"Banheiro bem decorado"
                },
                "objectID":"Sentiment:82",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":238,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":81,
                "value":{
                   "en":"Spacious bathroom",
                   "pt":"Casa de banho espaçosa",
                   "pt-BR":"Banheiro espaçoso"
                },
                "objectID":"Sentiment:81",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":237,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":786,
                "value":{
                   "en":"Lovely views of the sea",
                   "pt":"Vistas bonitas do mar",
                   "pt-BR":"Vista encantadora do mar"
                },
                "objectID":"Sentiment:786",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":236,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":785,
                "value":{
                   "en":"Great views of the sea",
                   "pt":"Ótimas vistas do mar",
                   "pt-BR":"Vista excelente do mar"
                },
                "objectID":"Sentiment:785",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":235,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":784,
                "value":{
                   "en":"Impressive sea views",
                   "pt":"Vistas fantásticas do mar",
                   "pt-BR":"Vista impressionante do mar"
                },
                "objectID":"Sentiment:784",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":234,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":783,
                "value":{
                   "en":"Stunning sea views",
                   "pt":"Vistas deslumbrantes do mar",
                   "pt-BR":"Vista fenomenal do mar"
                },
                "objectID":"Sentiment:783",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":233,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":774,
                "value":{
                   "en":"Lovely views of the strip",
                   "pt":"Vistas bonitas da marginal",
                   "pt-BR":"Vista encantadora da avenida principal"
                },
                "objectID":"Sentiment:774",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":232,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":773,
                "value":{
                   "en":"Great views of the strip",
                   "pt":"Ótimas vistas da marginal",
                   "pt-BR":"Vista excelente da avenida principal"
                },
                "objectID":"Sentiment:773",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":231,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":772,
                "value":{
                   "en":"Impressive views of the strip",
                   "pt":"Vistas fantásticas para a marginal",
                   "pt-BR":"Vista impressionante da avenida principal"
                },
                "objectID":"Sentiment:772",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":230,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":771,
                "value":{
                   "en":"Stunning views of the strip",
                   "pt":"Vistas deslumbrantes da marginal",
                   "pt-BR":"Vista fenomenal da avenida principal"
                },
                "objectID":"Sentiment:771",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":229,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":762,
                "value":{
                   "en":"Lovely views of the mountain",
                   "pt":"Vistas bonitas da montanha",
                   "pt-BR":"Vista encantadora da montanha"
                },
                "objectID":"Sentiment:762",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":228,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":761,
                "value":{
                   "en":"Great views of the mountain",
                   "pt":"Ótimas vistas da montanha",
                   "pt-BR":"Vista excelente da montanha"
                },
                "objectID":"Sentiment:761",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":227,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":760,
                "value":{
                   "en":"Impressive mountain views",
                   "pt":"Vistas fantásticas das montanhas",
                   "pt-BR":"Vista impressionante da montanha"
                },
                "objectID":"Sentiment:760",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":226,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":759,
                "value":{
                   "en":"Stunning mountain views",
                   "pt":"Vistas deslumbrantes da montanha",
                   "pt-BR":"Vista fenomenal da montanha"
                },
                "objectID":"Sentiment:759",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":225,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":750,
                "value":{
                   "en":"Had fun on the lazy river",
                   "pt":"Divertiram-se no rio lento",
                   "pt-BR":"Divertiu-se no rio artificial"
                },
                "objectID":"Sentiment:750",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":224,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":749,
                "value":{
                   "en":"Really enjoyed the lazy river",
                   "pt":"Gostaram muito do rio lento",
                   "pt-BR":"Gostou muito do rio artificial"
                },
                "objectID":"Sentiment:749",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":223,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":748,
                "value":{
                   "en":"Loved the lazy river",
                   "pt":"Adoraram o rio lento",
                   "pt-BR":"Adorou o rio artificial"
                },
                "objectID":"Sentiment:748",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":222,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":747,
                "value":{
                   "en":"Great lazy river ride",
                   "pt":"Ótima viagem pelo rio lento",
                   "pt-BR":"Excelente passeio no rio artificial"
                },
                "objectID":"Sentiment:747",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":221,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":738,
                "value":{
                   "en":"Speedy internet connection",
                   "pt":"Ligação rápida à internet",
                   "pt-BR":"Conexão com a Internet rápida"
                },
                "objectID":"Sentiment:738",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":220,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":737,
                "value":{
                   "en":"High-speed internet",
                   "pt":"Internet de alta velocidade",
                   "pt-BR":"Internet de alta velocidade"
                },
                "objectID":"Sentiment:737",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":219,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":736,
                "value":{
                   "en":"Good internet connection",
                   "pt":"Boa ligação à internet",
                   "pt-BR":"Boa conexão com a Internet"
                },
                "objectID":"Sentiment:736",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":218,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":735,
                "value":{
                   "en":"Great high-speed internet",
                   "pt":"Excelente internet de alta velocidade",
                   "pt-BR":"Internet de alta velocidade excelente"
                },
                "objectID":"Sentiment:735",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":217,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":726,
                "value":{
                   "en":"Lovely views of the harbour",
                   "pt":"Vistas bonitas do porto",
                   "pt-BR":"Vista encantadora do porto"
                },
                "objectID":"Sentiment:726",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":216,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":725,
                "value":{
                   "en":"Great views of the harbour",
                   "pt":"Ótimas vistas do porto",
                   "pt-BR":"Vista excelente do porto"
                },
                "objectID":"Sentiment:725",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":215,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":724,
                "value":{
                   "en":"Impressive harbour views",
                   "pt":"Vistas fantásticas do porto",
                   "pt-BR":"Vista impressionante do porto"
                },
                "objectID":"Sentiment:724",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":214,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":723,
                "value":{
                   "en":"Stunning harbour views",
                   "pt":"Vistas deslumbrantes do porto",
                   "pt-BR":"Vista fenomenal do porto"
                },
                "objectID":"Sentiment:723",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":213,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":72,
                "value":{
                   "en":"Liked the bathroom",
                   "pt":"Gostaram da casa de banho",
                   "pt-BR":"Gostou do banheiro"
                },
                "objectID":"Sentiment:72",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":212,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":714,
                "value":{
                   "en":"Lovely golf course views",
                   "pt":"Vistas bonitas do campo de golfe",
                   "pt-BR":"Vista encantadora do campo de golfe"
                },
                "objectID":"Sentiment:714",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":211,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":713,
                "value":{
                   "en":"Great views of the golf course",
                   "pt":"Ótimas vistas do campo de golfe",
                   "pt-BR":"Vista excelente do campo de golfe"
                },
                "objectID":"Sentiment:713",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":210,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":712,
                "value":{
                   "en":"Impressive views of the golf course",
                   "pt":"Vistas magníficas do campo de golfe",
                   "pt-BR":"Vista impressionante do campo de golfe"
                },
                "objectID":"Sentiment:712",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":209,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":711,
                "value":{
                   "en":"Stunning views of the golf course",
                   "pt":"Vistas deslumbrantes do campo de golfe",
                   "pt-BR":"Vista fenomenal da pista de golfe"
                },
                "objectID":"Sentiment:711",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":208,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":71,
                "value":{
                   "en":"Loved the bathroom",
                   "pt":"Adoraram a casa de banho",
                   "pt-BR":"Adorou o banheiro"
                },
                "objectID":"Sentiment:71",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":207,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":702,
                "value":{
                   "en":"Lovely views of the city",
                   "pt":"Vistas bonitas da cidade",
                   "pt-BR":"Vista encantadora da cidade"
                },
                "objectID":"Sentiment:702",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":206,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":701,
                "value":{
                   "en":"Great views of the city",
                   "pt":"Ótimas vistas da cidade",
                   "pt-BR":"Vista excelente da cidade"
                },
                "objectID":"Sentiment:701",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":205,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":700,
                "value":{
                   "en":"Impressive city views",
                   "pt":"Vistas fantásticas da cidade",
                   "pt-BR":"Vista impressionante da cidade"
                },
                "objectID":"Sentiment:700",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":204,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":70,
                "value":{
                   "en":"Well-equipped bathroom",
                   "pt":"Casa de banho bem equipada",
                   "pt-BR":"Banheiro bem equipado"
                },
                "objectID":"Sentiment:70",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":203,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":699,
                "value":{
                   "en":"Stunning city views",
                   "pt":"Vistas deslumbrantes da cidade",
                   "pt-BR":"Vista fenomenal da cidade"
                },
                "objectID":"Sentiment:699",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":202,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":690,
                "value":{
                   "en":"Lovely views of the beach",
                   "pt":"Vistas bonitas para a praia",
                   "pt-BR":"Vista encantadora da praia"
                },
                "objectID":"Sentiment:690",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":201,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":69,
                "value":{
                   "en":"Great bathroom",
                   "pt":"Ótima casa de banho",
                   "pt-BR":"Banheiro excelente"
                },
                "objectID":"Sentiment:69",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":200,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":689,
                "value":{
                   "en":"Great views of the beach",
                   "pt":"Ótimas vistas da praia",
                   "pt-BR":"Vista excelente da praia"
                },
                "objectID":"Sentiment:689",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":199,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":688,
                "value":{
                   "en":"Impressive beach views",
                   "pt":"Vistas fantásticas da praia",
                   "pt-BR":"Vista impressionante da praia"
                },
                "objectID":"Sentiment:688",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":198,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":687,
                "value":{
                   "en":"Stunning beach views",
                   "pt":"Vistas deslumbrantes da praia",
                   "pt-BR":"Vista fenomenal da praia"
                },
                "objectID":"Sentiment:687",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":197,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":678,
                "value":{
                   "en":"Lovely views of the bay",
                   "pt":"Vistas bonitas da baía",
                   "pt-BR":"Vista encantadora da baía"
                },
                "objectID":"Sentiment:678",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":196,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":677,
                "value":{
                   "en":"Great views of the bay",
                   "pt":"Ótimas vistas da baía",
                   "pt-BR":"Vista excelente da baía"
                },
                "objectID":"Sentiment:677",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":195,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":676,
                "value":{
                   "en":"Impressive bay views",
                   "pt":"Vistas fantásticas da baía",
                   "pt-BR":"Vista impressionante da baía"
                },
                "objectID":"Sentiment:676",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":194,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":675,
                "value":{
                   "en":"Stunning bay views",
                   "pt":"Vistas deslumbrantes da baía",
                   "pt-BR":"Vista fenomenal da baía"
                },
                "objectID":"Sentiment:675",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":193,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":612,
                "value":{
                   "en":"Outstanding views",
                   "pt":"Vistas espetaculares",
                   "pt-BR":"Vista espetacular"
                },
                "objectID":"Sentiment:612",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":192,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":611,
                "value":{
                   "en":"Great views",
                   "pt":"Ótimas vistas",
                   "pt-BR":"Vista excelente"
                },
                "objectID":"Sentiment:611",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":191,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":610,
                "value":{
                   "en":"Impressive views",
                   "pt":"Vistas fantásticas",
                   "pt-BR":"Vista impressionante"
                },
                "objectID":"Sentiment:610",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":190,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":609,
                "value":{
                   "en":"Stunning views",
                   "pt":"Vistas deslumbrantes",
                   "pt-BR":"Vista fenomenal"
                },
                "objectID":"Sentiment:609",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":189,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":60,
                "value":{
                   "en":"Happy with the bath",
                   "pt":"Satisfeitos com a banheira",
                   "pt-BR":"Ficou feliz com a banheira"
                },
                "objectID":"Sentiment:60",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":188,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":59,
                "value":{
                   "en":"Loved the bath",
                   "pt":"Adoraram a banheira",
                   "pt-BR":"Adorou a banheira"
                },
                "objectID":"Sentiment:59",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":187,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":58,
                "value":{
                   "en":"Liked the bath",
                   "pt":"Gostaram da banheira",
                   "pt-BR":"Gostou da banheira"
                },
                "objectID":"Sentiment:58",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":186,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":57,
                "value":{
                   "en":"Great bath",
                   "pt":"Ótima banheira",
                   "pt-BR":"Banheira excelente"
                },
                "objectID":"Sentiment:57",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":185,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":564,
                "value":{
                   "en":"Had a wonderful stay",
                   "pt":"Tiveram uma estadia maravilhosa",
                   "pt-BR":"Teve uma estadia maravilhosa"
                },
                "objectID":"Sentiment:564",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":184,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":563,
                "value":{
                   "en":"Had a lovely stay",
                   "pt":"Tiveram uma estadia agradável",
                   "pt-BR":"Teve uma estadia encantadora"
                },
                "objectID":"Sentiment:563",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":183,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":562,
                "value":{
                   "en":"Had a great time",
                   "pt":"Passaram ótimos momentos",
                   "pt-BR":"Teve uma ótima estadia"
                },
                "objectID":"Sentiment:562",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":182,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":561,
                "value":{
                   "en":"Thoroughly enjoyed my stay",
                   "pt":"Adorei a minha estadia",
                   "pt-BR":"Aproveitei minha estadia por completo"
                },
                "objectID":"Sentiment:561",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":181,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":516,
                "value":{
                   "en":"Staff were helpful and professional",
                   "pt":"Os funcionários eram prestativos e profissionais",
                   "pt-BR":"A equipe foi atenciosa e profissional"
                },
                "objectID":"Sentiment:516",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":180,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":515,
                "value":{
                   "en":"Accommodating staff",
                   "pt":"Funcionários prestativos",
                   "pt-BR":"Equipe atenciosa"
                },
                "objectID":"Sentiment:515",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":179,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":514,
                "value":{
                   "en":"Welcoming staff",
                   "pt":"Funcionários acolhedores",
                   "pt-BR":"Equipe receptiva"
                },
                "objectID":"Sentiment:514",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":178,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":513,
                "value":{
                   "en":"Staff provided great service",
                   "pt":"Os funcionários prestaram um excelente serviço",
                   "pt-BR":"A equipe ofereceu um ótimo serviço"
                },
                "objectID":"Sentiment:513",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":177,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":504,
                "value":{
                   "en":"Shuttle service was convenient and efficient",
                   "pt":"O serviço de transfer era conveniente e eficiente",
                   "pt-BR":"Serviço de transporte conveniente e eficiente"
                },
                "objectID":"Sentiment:504",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":176,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":503,
                "value":{
                   "en":"Convenient shuttle service",
                   "pt":"Serviço de transfer conveniente",
                   "pt-BR":"Serviço de transporte conveniente"
                },
                "objectID":"Sentiment:503",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":175,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":502,
                "value":{
                   "en":"Efficient shuttle service",
                   "pt":"Serviço de transfer eficiente",
                   "pt-BR":"Serviço de transporte eficiente"
                },
                "objectID":"Sentiment:502",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":174,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":501,
                "value":{
                   "en":"Great shuttle service",
                   "pt":"Ótimo serviço de transfer",
                   "pt-BR":"Serviço de transporte excelente"
                },
                "objectID":"Sentiment:501",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":173,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":492,
                "value":{
                   "en":"Happy with the shower",
                   "pt":"Satisfeitos com o chuveiro",
                   "pt-BR":"Ficou feliz com o chuveiro"
                },
                "objectID":"Sentiment:492",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":172,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":491,
                "value":{
                   "en":"Loved the shower",
                   "pt":"Adoraram o chuveiro",
                   "pt-BR":"Adorou o chuveiro"
                },
                "objectID":"Sentiment:491",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":171,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":490,
                "value":{
                   "en":"Liked the shower",
                   "pt":"Gostaram do chuveiro",
                   "pt-BR":"Gostou do chuveiro"
                },
                "objectID":"Sentiment:490",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":170,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":489,
                "value":{
                   "en":"Great shower",
                   "pt":"Ótimo chuveiro",
                   "pt-BR":"Chuveiro excelente"
                },
                "objectID":"Sentiment:489",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":169,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":480,
                "value":{
                   "en":"Great local shopping area",
                   "pt":"Ótima zona para compras",
                   "pt-BR":"Área de compras local excelente"
                },
                "objectID":"Sentiment:480",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":168,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":48,
                "value":{
                   "en":"Great bar",
                   "pt":"Ótimo bar",
                   "pt-BR":"Bar excelente"
                },
                "objectID":"Sentiment:48",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":167,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":479,
                "value":{
                   "en":"Convenient shopping nearby",
                   "pt":"Conveniência de lojas nas proximidades",
                   "pt-BR":"Lojas próximas convenientes"
                },
                "objectID":"Sentiment:479",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":166,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":478,
                "value":{
                   "en":"Plenty of shopping options nearby",
                   "pt":"Várias opções de lojas nas proximidades",
                   "pt-BR":"Muitas opções de lojas nos arredores"
                },
                "objectID":"Sentiment:478",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":165,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":477,
                "value":{
                   "en":"Great nearby shopping",
                   "pt":"Ótimas lojas nas proximidades",
                   "pt-BR":"Lojas próximas excelentes"
                },
                "objectID":"Sentiment:477",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":164,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":47,
                "value":{
                   "en":"Amazing bar",
                   "pt":"Excelente bar",
                   "pt-BR":"Bar incrível"
                },
                "objectID":"Sentiment:47",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":163,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":46,
                "value":{
                   "en":"Liked the bar",
                   "pt":"Gostaram do bar",
                   "pt-BR":"Gostou do bar"
                },
                "objectID":"Sentiment:46",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":162,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":456,
                "value":{
                   "en":"Rooms were well sized",
                   "pt":"Os quartos tinham boas dimensões",
                   "pt-BR":"Quartos de bom tamanho"
                },
                "objectID":"Sentiment:456",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":161,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":455,
                "value":{
                   "en":"Ample-sized rooms",
                   "pt":"Quartos amplos",
                   "pt-BR":"Quartos amplos"
                },
                "objectID":"Sentiment:455",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":160,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":454,
                "value":{
                   "en":"Spacious rooms",
                   "pt":"Quartos espaçosos",
                   "pt-BR":"Quartos espaçosos"
                },
                "objectID":"Sentiment:454",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":159,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":453,
                "value":{
                   "en":"Well-sized rooms",
                   "pt":"Quartos com boas dimensões",
                   "pt-BR":"Quartos com tamanho bom"
                },
                "objectID":"Sentiment:453",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":158,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":45,
                "value":{
                   "en":"Loved the bar",
                   "pt":"Adoraram o bar",
                   "pt-BR":"Adorou o bar"
                },
                "objectID":"Sentiment:45",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":157,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":420,
                "value":{
                   "en":"Rooms were immaculate",
                   "pt":"Os quartos estavam impecáveis",
                   "pt-BR":"Quartos impecáveis"
                },
                "objectID":"Sentiment:420",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":156,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":419,
                "value":{
                   "en":"Rooms were clean and comfortable",
                   "pt":"Os quartos eram limpos e confortáveis",
                   "pt-BR":"Quartos limpos e confortáveis"
                },
                "objectID":"Sentiment:419",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":155,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":418,
                "value":{
                   "en":"Immaculate rooms",
                   "pt":"Quartos impecáveis",
                   "pt-BR":"Quartos impecáveis"
                },
                "objectID":"Sentiment:418",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":154,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":417,
                "value":{
                   "en":"Clean rooms",
                   "pt":"Quartos limpos",
                   "pt-BR":"Quartos limpos"
                },
                "objectID":"Sentiment:417",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":153,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":408,
                "value":{
                   "en":"Comfortable rooms",
                   "pt":"Quartos confortáveis",
                   "pt-BR":"Quartos confortáveis"
                },
                "objectID":"Sentiment:408",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":152,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":407,
                "value":{
                   "en":"Pleasant rooms",
                   "pt":"Quartos agradáveis",
                   "pt-BR":"Quartos agradáveis"
                },
                "objectID":"Sentiment:407",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":151,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":406,
                "value":{
                   "en":"Loved the rooms",
                   "pt":"Adoraram os quartos",
                   "pt-BR":"Adorou os quartos"
                },
                "objectID":"Sentiment:406",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":150,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":405,
                "value":{
                   "en":"Great, comfortable rooms",
                   "pt":"Quartos ótimos e confortáveis",
                   "pt-BR":"Quartos excelentes e confortáveis"
                },
                "objectID":"Sentiment:405",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":149,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":384,
                "value":{
                   "en":"Lovely views of the river",
                   "pt":"Vistas bonitas do rio",
                   "pt-BR":"Vista encantadora do rio"
                },
                "objectID":"Sentiment:384",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":148,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":383,
                "value":{
                   "en":"Great views of the river",
                   "pt":"Ótimas vistas do rio",
                   "pt-BR":"Vista excelente do rio"
                },
                "objectID":"Sentiment:383",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":147,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":382,
                "value":{
                   "en":"Impressive river views",
                   "pt":"Vistas fantásticas do rio",
                   "pt-BR":"Vista impressionante do rio"
                },
                "objectID":"Sentiment:382",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":146,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":381,
                "value":{
                   "en":"Stunning river views",
                   "pt":"Vistas deslumbrantes do rio",
                   "pt-BR":"Vista fenomenal do rio"
                },
                "objectID":"Sentiment:381",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":145,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":372,
                "value":{
                   "en":"Great on-site restaurant",
                   "pt":"Excelente restaurante no hotel",
                   "pt-BR":"Restaurante próprio excelente"
                },
                "objectID":"Sentiment:372",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":144,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":371,
                "value":{
                   "en":"Loved the restaurant",
                   "pt":"Adoraram o restaurante",
                   "pt-BR":"Adorou o restaurante"
                },
                "objectID":"Sentiment:371",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":143,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":370,
                "value":{
                   "en":"Excellent in-house restaurant",
                   "pt":"Excelente restaurante na unidade hoteleira",
                   "pt-BR":"Restaurante próprio excelente"
                },
                "objectID":"Sentiment:370",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":142,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":369,
                "value":{
                   "en":"Superb restaurant",
                   "pt":"Restaurante fabuloso",
                   "pt-BR":"Restaurante soberbo"
                },
                "objectID":"Sentiment:369",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":141,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":36,
                "value":{
                   "en":"Balcony was great",
                   "pt":"A varanda era ótima",
                   "pt-BR":"Varanda ótima"
                },
                "objectID":"Sentiment:36",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":140,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":35,
                "value":{
                   "en":"Great balcony",
                   "pt":"Ótima varanda",
                   "pt-BR":"Varanda excelente"
                },
                "objectID":"Sentiment:35",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":139,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":348,
                "value":{
                   "en":"The pool was great",
                   "pt":"A piscina era ótima",
                   "pt-BR":"A piscina era ótima"
                },
                "objectID":"Sentiment:348",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":138,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":347,
                "value":{
                   "en":"Loved the swimming pool",
                   "pt":"Adoraram a piscina",
                   "pt-BR":"Adorou a piscina de nadar"
                },
                "objectID":"Sentiment:347",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":137,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":346,
                "value":{
                   "en":"Great pool",
                   "pt":"Ótima piscina",
                   "pt-BR":"Piscina excelente"
                },
                "objectID":"Sentiment:346",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":136,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":345,
                "value":{
                   "en":"Loved the pool",
                   "pt":"Adoraram a piscina",
                   "pt-BR":"Adorou a piscina"
                },
                "objectID":"Sentiment:345",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":135,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":34,
                "value":{
                   "en":"Liked the balcony",
                   "pt":"Gostaram da varanda",
                   "pt-BR":"Gostou da varanda"
                },
                "objectID":"Sentiment:34",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":134,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":336,
                "value":{
                   "en":"Convenient parking",
                   "pt":"Estacionamento conveniente",
                   "pt-BR":"Estacionamento conveniente"
                },
                "objectID":"Sentiment:336",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":133,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":335,
                "value":{
                   "en":"Plenty of parking on-site",
                   "pt":"Muitos lugares de estacionamento disponíveis no local",
                   "pt-BR":"Estacionamento amplo no local"
                },
                "objectID":"Sentiment:335",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":132,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":334,
                "value":{
                   "en":"Sufficient on-site parking",
                   "pt":"Lugares de estacionamento suficientes no hotel",
                   "pt-BR":"Estacionamento suficiente no local"
                },
                "objectID":"Sentiment:334",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":131,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":333,
                "value":{
                   "en":"Great parking facilities",
                   "pt":"Ótimos parques de estacionamento",
                   "pt-BR":"Estacionamento excelente"
                },
                "objectID":"Sentiment:333",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":130,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":33,
                "value":{
                   "en":"Loved the balcony",
                   "pt":"Adoraram a varanda",
                   "pt-BR":"Adorou a varanda"
                },
                "objectID":"Sentiment:33",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":129,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":324,
                "value":{
                   "en":"Lovely views of the ocean",
                   "pt":"Vistas bonitas do mar",
                   "pt-BR":"Vista encantadora do oceano"
                },
                "objectID":"Sentiment:324",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":128,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":323,
                "value":{
                   "en":"Great views of the ocean",
                   "pt":"Ótimas vistas do mar",
                   "pt-BR":"Vista excelente do oceano"
                },
                "objectID":"Sentiment:323",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":127,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":322,
                "value":{
                   "en":"Impressive ocean views",
                   "pt":"Vistas fantásticas do mar",
                   "pt-BR":"Vista impressionante do oceano"
                },
                "objectID":"Sentiment:322",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":126,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":321,
                "value":{
                   "en":"Stunning ocean views",
                   "pt":"Vistas deslumbrantes do mar",
                   "pt-BR":"Vista fenomenal para o oceano"
                },
                "objectID":"Sentiment:321",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":125,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":300,
                "value":{
                   "en":"Well located",
                   "pt":"Bem localizado",
                   "pt-BR":"Bem localizado"
                },
                "objectID":"Sentiment:300",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":124,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":299,
                "value":{
                   "en":"Conveniently located",
                   "pt":"Convenientemente localizado",
                   "pt-BR":"Localização conveniente"
                },
                "objectID":"Sentiment:299",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":123,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":298,
                "value":{
                   "en":"Convenient location",
                   "pt":"Localização conveniente",
                   "pt-BR":"Local conveniente"
                },
                "objectID":"Sentiment:298",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":122,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":297,
                "value":{
                   "en":"Great location",
                   "pt":"Ótima localização",
                   "pt-BR":"Excelente localização"
                },
                "objectID":"Sentiment:297",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":121,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":288,
                "value":{
                   "en":"Lovely views of the lake",
                   "pt":"Vistas bonitas do lago",
                   "pt-BR":"Vista encantadora do lago"
                },
                "objectID":"Sentiment:288",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":120,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":287,
                "value":{
                   "en":"Great views of the lake",
                   "pt":"Ótimas vistas do lago",
                   "pt-BR":"Vista excelente do lago"
                },
                "objectID":"Sentiment:287",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":119,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":286,
                "value":{
                   "en":"Impressive lake views",
                   "pt":"Vistas fantásticas do lago",
                   "pt-BR":"Vista impressionante do lago"
                },
                "objectID":"Sentiment:286",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":118,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":285,
                "value":{
                   "en":"Stunning lake views",
                   "pt":"Vistas deslumbrantes do lago",
                   "pt-BR":"Vista fenomenal do lago"
                },
                "objectID":"Sentiment:285",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":117,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":276,
                "value":{
                   "en":"The kids pool was great",
                   "pt":"A piscina para crianças era ótima",
                   "pt-BR":"A piscina infantil era ótima"
                },
                "objectID":"Sentiment:276",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":116,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":275,
                "value":{
                   "en":"Great kids pool",
                   "pt":"Ótima piscina para crianças",
                   "pt-BR":"Piscina infantil excelente"
                },
                "objectID":"Sentiment:275",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":115,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":274,
                "value":{
                   "en":"Great pool for kids",
                   "pt":"Ótima piscina para crianças",
                   "pt-BR":"Piscina infantil excelente"
                },
                "objectID":"Sentiment:274",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":114,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":273,
                "value":{
                   "en":"Loved the kids pool",
                   "pt":"Adoraram a piscina para crianças",
                   "pt-BR":"Adorou a piscina infantil"
                },
                "objectID":"Sentiment:273",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":113,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":264,
                "value":{
                   "en":"Speedy internet connection",
                   "pt":"Ligação rápida à internet",
                   "pt-BR":"Conexão com a Internet rápida"
                },
                "objectID":"Sentiment:264",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":112,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":263,
                "value":{
                   "en":"High-speed internet",
                   "pt":"Internet de alta velocidade",
                   "pt-BR":"Internet de alta velocidade"
                },
                "objectID":"Sentiment:263",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":111,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":262,
                "value":{
                   "en":"Fast internet connection",
                   "pt":"Ligação rápida à internet",
                   "pt-BR":"Conexão de Internet rápida"
                },
                "objectID":"Sentiment:262",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":110,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":261,
                "value":{
                   "en":"Great high-speed internet",
                   "pt":"Excelente internet de alta velocidade",
                   "pt-BR":"Internet de alta velocidade excelente"
                },
                "objectID":"Sentiment:261",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":109,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":252,
                "value":{
                   "en":"The internet was reasonably priced",
                   "pt":"O preço da internet era razoável",
                   "pt-BR":"A internet tinha preço sensato"
                },
                "objectID":"Sentiment:252",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":108,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":251,
                "value":{
                   "en":"Reasonably-priced internet",
                   "pt":"Internet a preço razoável",
                   "pt-BR":"Internet com preço sensato"
                },
                "objectID":"Sentiment:251",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":107,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":250,
                "value":{
                   "en":"The internet was fairly priced",
                   "pt":"O preço da internet era acessível",
                   "pt-BR":"A internet tinha preço justo"
                },
                "objectID":"Sentiment:250",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":106,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":249,
                "value":{
                   "en":"Well-priced internet",
                   "pt":"Internet a um preço acessível",
                   "pt-BR":"Internet com bom preço"
                },
                "objectID":"Sentiment:249",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":105,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":240,
                "value":{
                   "en":"Loved the on-site gym",
                   "pt":"Adoraram o ginásio do hotel",
                   "pt-BR":"Adorou a academia interna"
                },
                "objectID":"Sentiment:240",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":104,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":24,
                "value":{
                   "en":"The baby pool was great",
                   "pt":"A piscina para bebés era ótima",
                   "pt-BR":"A piscina para bebês era ótima"
                },
                "objectID":"Sentiment:24",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":103,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":239,
                "value":{
                   "en":"Impressive gym facilities",
                   "pt":"Excelente ginásio",
                   "pt-BR":"Academia impressionante"
                },
                "objectID":"Sentiment:239",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":102,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":238,
                "value":{
                   "en":"Loved the gym",
                   "pt":"Adoraram o ginásio",
                   "pt-BR":"Adorou a academia"
                },
                "objectID":"Sentiment:238",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":101,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":237,
                "value":{
                   "en":"Great in-house gym",
                   "pt":"Ótimo ginásio no hotel",
                   "pt-BR":"Academia interna excelente"
                },
                "objectID":"Sentiment:237",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":100,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":23,
                "value":{
                   "en":"Great pool for babies",
                   "pt":"Ótima piscina para bebés",
                   "pt-BR":"Piscina excelente para bebês"
                },
                "objectID":"Sentiment:23",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":99,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":228,
                "value":{
                   "en":"Great on-site golf course",
                   "pt":"Excelente campo de golfe no local",
                   "pt-BR":"Campo de golfe local excelente"
                },
                "objectID":"Sentiment:228",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":98,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":227,
                "value":{
                   "en":"Loved the on-site golf course",
                   "pt":"Adoraram o campo de golfe do hotel",
                   "pt-BR":"Adorou o campo de golfe local"
                },
                "objectID":"Sentiment:227",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":97,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":226,
                "value":{
                   "en":"Impressive golf course",
                   "pt":"Excelente campo de golfe",
                   "pt-BR":"Campo de golfe impressionante"
                },
                "objectID":"Sentiment:226",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":96,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":225,
                "value":{
                   "en":"Great golf course",
                   "pt":"Ótimo campo de golfe",
                   "pt-BR":"Campo de golfe excelente"
                },
                "objectID":"Sentiment:225",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":95,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":22,
                "value":{
                   "en":"Great baby pool",
                   "pt":"Ótima piscina para bebés",
                   "pt-BR":"Piscina para bebês excelente"
                },
                "objectID":"Sentiment:22",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":94,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":216,
                "value":{
                   "en":"Great dining options",
                   "pt":"Excelentes opções de refeição",
                   "pt-BR":"Opções de jantar excelentes"
                },
                "objectID":"Sentiment:216",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":93,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":215,
                "value":{
                   "en":"Delicious food",
                   "pt":"Comida deliciosa",
                   "pt-BR":"Comida deliciosa"
                },
                "objectID":"Sentiment:215",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":92,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":214,
                "value":{
                   "en":"Loved the food",
                   "pt":"Adoraram a comida",
                   "pt-BR":"Adorou a comida"
                },
                "objectID":"Sentiment:214",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":91,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":213,
                "value":{
                   "en":"Great food menu",
                   "pt":"Excelente cardápio",
                   "pt-BR":"Cardápio excelente"
                },
                "objectID":"Sentiment:213",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":90,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":21,
                "value":{
                   "en":"Loved the baby pool",
                   "pt":"Adoraram a piscina para bebés",
                   "pt-BR":"Adorou a piscina para bebês"
                },
                "objectID":"Sentiment:21",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":89,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":204,
                "value":{
                   "en":"Good entertainment options",
                   "pt":"Boas opções de entretenimento",
                   "pt-BR":"Boas opções de entretenimento"
                },
                "objectID":"Sentiment:204",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":88,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":203,
                "value":{
                   "en":"Great range of entertainment",
                   "pt":"Grande variedade de entretenimento",
                   "pt-BR":"Excelentes opções de entretenimento"
                },
                "objectID":"Sentiment:203",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":87,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":202,
                "value":{
                   "en":"Loved the entertainment",
                   "pt":"Adoraram o entretenimento",
                   "pt-BR":"Adorou o entretenimento"
                },
                "objectID":"Sentiment:202",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":86,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":201,
                "value":{
                   "en":"Great entertainment",
                   "pt":"Ótimo entretenimento",
                   "pt-BR":"Entretenimento excelente"
                },
                "objectID":"Sentiment:201",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":85,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":180,
                "value":{
                   "en":"Speedy check-in/check-out process",
                   "pt":"Processo de check-in/check-out rápido",
                   "pt-BR":"Processo rápido de check-in/check-out"
                },
                "objectID":"Sentiment:180",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":84,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":179,
                "value":{
                   "en":"Smooth check-in/check-out process",
                   "pt":"Fácil processo de check-in/check-out",
                   "pt-BR":"Processo fácil de check-in/check-out"
                },
                "objectID":"Sentiment:179",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":83,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":178,
                "value":{
                   "en":"Great check-in/check-out process",
                   "pt":"Ótimo processo de check-in/check-out",
                   "pt-BR":"Processo de check-in/check-out excelente"
                },
                "objectID":"Sentiment:178",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":82,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":177,
                "value":{
                   "en":"Efficient check-in/check-out",
                   "pt":"Check-in/check-out eficientes",
                   "pt-BR":"Check-in/check-out eficiente"
                },
                "objectID":"Sentiment:177",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":81,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":168,
                "value":{
                   "en":"Satisfying breakfast",
                   "pt":"Pequeno-almoço que satisfaz",
                   "pt-BR":"Café da manhã satisfatório"
                },
                "objectID":"Sentiment:168",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":80,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":167,
                "value":{
                   "en":"Great breakfast",
                   "pt":"Ótimo pequeno-almoço",
                   "pt-BR":"Café da manhã excelente"
                },
                "objectID":"Sentiment:167",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":79,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":166,
                "value":{
                   "en":"Loved the breakfast",
                   "pt":"Adoraram o pequeno-almoço",
                   "pt-BR":"Adorou o café da manhã"
                },
                "objectID":"Sentiment:166",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":78,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":165,
                "value":{
                   "en":"Delicious breakfast",
                   "pt":"Pequeno-almoço delicioso",
                   "pt-BR":"Café da manhã delicioso"
                },
                "objectID":"Sentiment:165",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":77,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":144,
                "value":{
                   "en":"Beds were well sized",
                   "pt":"As camas tinham boas dimensões",
                   "pt-BR":"Camas de tamanho bom"
                },
                "objectID":"Sentiment:144",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":76,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":143,
                "value":{
                   "en":"Great beds",
                   "pt":"Ótimas camas",
                   "pt-BR":"Camas excelentes"
                },
                "objectID":"Sentiment:143",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":75,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":142,
                "value":{
                   "en":"Large beds",
                   "pt":"Camas grandes",
                   "pt-BR":"Camas grandes"
                },
                "objectID":"Sentiment:142",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":74,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":141,
                "value":{
                   "en":"Well-sized beds",
                   "pt":"Camas de boas dimensões",
                   "pt-BR":"Camas com tamanho bom"
                },
                "objectID":"Sentiment:141",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":73,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":132,
                "value":{
                   "en":"Loved the beds",
                   "pt":"Adoraram as camas",
                   "pt-BR":"Adorou as camas"
                },
                "objectID":"Sentiment:132",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":72,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":131,
                "value":{
                   "en":"Lovely beds",
                   "pt":"Boas camas",
                   "pt-BR":"Camas encantadoras"
                },
                "objectID":"Sentiment:131",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":71,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":130,
                "value":{
                   "en":"Comfy beds",
                   "pt":"Camas confortáveis",
                   "pt-BR":"Camas confortáveis"
                },
                "objectID":"Sentiment:130",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":70,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":129,
                "value":{
                   "en":"Comfortable beds",
                   "pt":"Camas confortáveis",
                   "pt-BR":"Camas confortáveis"
                },
                "objectID":"Sentiment:129",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":69,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":120,
                "value":{
                   "en":"Beds were immaculate",
                   "pt":"As camas estavam impecáveis",
                   "pt-BR":"Camas impecáveis"
                },
                "objectID":"Sentiment:120",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":68,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":12,
                "value":{
                   "en":"The pool was great",
                   "pt":"A piscina era ótima",
                   "pt-BR":"A piscina era ótima"
                },
                "objectID":"Sentiment:12",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":67,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":119,
                "value":{
                   "en":"Beds were clean",
                   "pt":"As camas estavam limpas",
                   "pt-BR":"Camas limpas"
                },
                "objectID":"Sentiment:119",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":66,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":118,
                "value":{
                   "en":"Immaculate beds",
                   "pt":"Camas impecáveis",
                   "pt-BR":"Camas impecáveis"
                },
                "objectID":"Sentiment:118",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":65,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":117,
                "value":{
                   "en":"Clean beds",
                   "pt":"Camas limpas",
                   "pt-BR":"Camas limpas"
                },
                "objectID":"Sentiment:117",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":64,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":11,
                "value":{
                   "en":"Loved the swimming pool",
                   "pt":"Adoraram a piscina",
                   "pt-BR":"Adorou a piscina de nadar"
                },
                "objectID":"Sentiment:11",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":63,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":108,
                "value":{
                   "en":"Great beds",
                   "pt":"Ótimas camas",
                   "pt-BR":"Camas excelentes"
                },
                "objectID":"Sentiment:108",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":62,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":107,
                "value":{
                   "en":"Comfortable beds",
                   "pt":"Camas confortáveis",
                   "pt-BR":"Camas confortáveis"
                },
                "objectID":"Sentiment:107",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":61,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":106,
                "value":{
                   "en":"Liked the beds",
                   "pt":"Gostaram das camas",
                   "pt-BR":"Gostou das camas"
                },
                "objectID":"Sentiment:106",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":60,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":105,
                "value":{
                   "en":"Loved the beds",
                   "pt":"Adoraram as camas",
                   "pt-BR":"Adorou as camas"
                },
                "objectID":"Sentiment:105",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":59,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":10,
                "value":{
                   "en":"Great pool",
                   "pt":"Ótima piscina",
                   "pt-BR":"Piscina excelente"
                },
                "objectID":"Sentiment:10",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":58,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":9,
                "value":{
                   "en":"Apartment",
                   "pt":"Apartamento"
                },
                "objectID":"PropertyType:9",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":57,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":8,
                "value":{
                   "en":"Other",
                   "pt":"Outro"
                },
                "objectID":"PropertyType:8",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":56,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":7,
                "value":{
                   "en":"Resort",
                   "pt":"Aldeamento/Resort"
                },
                "objectID":"PropertyType:7",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":55,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":6,
                "value":{
                   "en":"Retreat",
                   "pt":"Retiro"
                },
                "objectID":"PropertyType:6",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":54,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":5,
                "value":{
                   "en":"Hostel",
                   "pt":"Hostel"
                },
                "objectID":"PropertyType:5",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":53,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":4,
                "value":{
                   "en":"Holiday Home",
                   "pt":"Alojamento turístico"
                },
                "objectID":"PropertyType:4",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":52,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":34,
                "value":{
                   "en":"Pension"
                },
                "objectID":"PropertyType:34",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":51,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":33,
                "value":{
                   "en":"Serviced Apartment"
                },
                "objectID":"PropertyType:33",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":50,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":32,
                "value":{
                   "en":"Homestay"
                },
                "objectID":"PropertyType:32",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":49,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":31,
                "value":{
                   "en":"Eco Hotel"
                },
                "objectID":"PropertyType:31",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":48,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":30,
                "value":{
                   "en":"Boat",
                   "pt":"Barco"
                },
                "objectID":"PropertyType:30",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":47,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":3,
                "value":{
                   "en":"Bed & Breakfast",
                   "pt":"Bed & breakfast"
                },
                "objectID":"PropertyType:3",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":46,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":29,
                "value":{
                   "en":"Holiday Park/Campsite",
                   "pt":"Parque de campismo"
                },
                "objectID":"PropertyType:29",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":45,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":28,
                "value":{
                   "en":"Capsule Hotel",
                   "pt":"Hotel cápsula"
                },
                "objectID":"PropertyType:28",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":44,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":27,
                "value":{
                   "en":"Luxury Tents/Yurts",
                   "pt":"Tendas de luxo"
                },
                "objectID":"PropertyType:27",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":43,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":26,
                "value":{
                   "en":"Country House/Manor",
                   "pt":"Casa de campo",
                   "pt-BR":"Casa de campo"
                },
                "objectID":"PropertyType:26",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":42,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":25,
                "value":{
                   "en":"Chateau/Country House",
                   "pt":"Casa de Campo/Castelo"
                },
                "objectID":"PropertyType:25",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":41,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":24,
                "value":{
                   "en":"Agriturismo / Farm Stay",
                   "pt":"Agroturismo"
                },
                "objectID":"PropertyType:24",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":40,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":23,
                "value":{
                   "en":"Lodge",
                   "pt":"Lodge"
                },
                "objectID":"PropertyType:23",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":39,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":22,
                "value":{
                   "en":"Dormitory",
                   "pt":"Dormitório"
                },
                "objectID":"PropertyType:22",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":38,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":21,
                "value":{
                   "en":"Bungalow",
                   "pt":"Bungalows"
                },
                "objectID":"PropertyType:21",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":37,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":20,
                "value":{
                   "en":"Villa",
                   "pt":"Villas"
                },
                "objectID":"PropertyType:20",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":36,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":2,
                "value":{
                   "en":"Inn",
                   "pt":"Estalagem"
                },
                "objectID":"PropertyType:2",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":35,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":19,
                "value":{
                   "en":"Cottage",
                   "pt":"Cottages"
                },
                "objectID":"PropertyType:19",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":34,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":18,
                "value":{
                   "en":"Fisherman's Cabin",
                   "pt":"Cabana de pescadores"
                },
                "objectID":"PropertyType:18",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":33,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":17,
                "value":{
                   "en":"Chalet",
                   "pt":"Chalés"
                },
                "objectID":"PropertyType:17",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":32,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":16,
                "value":{
                   "en":"Guest House",
                   "pt":"Casa de hóspedes"
                },
                "objectID":"PropertyType:16",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":31,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":15,
                "value":{
                   "en":"Farm Stay",
                   "pt":"Herdade"
                },
                "objectID":"PropertyType:15",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":30,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":14,
                "value":{
                   "en":"Tzimmer / Bed & Breakfast",
                   "pt":"Tzimmer",
                   "pt-BR":"Tzimmer"
                },
                "objectID":"PropertyType:14",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":29,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":13,
                "value":{
                   "en":"Mini Hotel",
                   "pt":"Mini hotel"
                },
                "objectID":"PropertyType:13",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":28,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":122,
                "value":{
                   "en":"Boutique Hotel"
                },
                "objectID":"PropertyType:122",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":27,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":121,
                "value":{
                   "en":"Caravan Park"
                },
                "objectID":"PropertyType:121",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":26,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":120,
                "value":{
                   "en":"Student accommodation"
                },
                "objectID":"PropertyType:120",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":25,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":12,
                "value":{
                   "en":"Riad",
                   "pt":"Riad"
                },
                "objectID":"PropertyType:12",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":24,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":119,
                "value":{
                   "en":"Love hotels"
                },
                "objectID":"PropertyType:119",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":23,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":118,
                "value":{
                   "en":"Health resorts"
                },
                "objectID":"PropertyType:118",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":22,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":117,
                "value":{
                   "en":"Guest accommodation"
                },
                "objectID":"PropertyType:117",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":21,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":116,
                "value":{
                   "en":"Gites"
                },
                "objectID":"PropertyType:116",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":20,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":115,
                "value":{
                   "en":"Tree house property"
                },
                "objectID":"PropertyType:115",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":19,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":114,
                "value":{
                   "en":"TownHouse"
                },
                "objectID":"PropertyType:114",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":18,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":113,
                "value":{
                   "en":"Safari/Tentalow"
                },
                "objectID":"PropertyType:113",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":17,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":112,
                "value":{
                   "en":"Residence"
                },
                "objectID":"PropertyType:112",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":16,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":111,
                "value":{
                   "en":"Ranch"
                },
                "objectID":"PropertyType:111",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":15,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":110,
                "value":{
                   "en":"Private vacation home"
                },
                "objectID":"PropertyType:110",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":14,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":11,
                "value":{
                   "en":"Ryokan",
                   "pt":"Ryokan"
                },
                "objectID":"PropertyType:11",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":13,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":109,
                "value":{
                   "en":"Palace"
                },
                "objectID":"PropertyType:109",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":12,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":108,
                "value":{
                   "en":"Cruise"
                },
                "objectID":"PropertyType:108",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":11,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":107,
                "value":{
                   "en":"Condominium resort"
                },
                "objectID":"PropertyType:107",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":10,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":106,
                "value":{
                   "en":"Condo"
                },
                "objectID":"PropertyType:106",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":9,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":105,
                "value":{
                   "en":"Castle"
                },
                "objectID":"PropertyType:105",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":8,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":104,
                "value":{
                   "en":"Campsite"
                },
                "objectID":"PropertyType:104",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":7,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":103,
                "value":{
                   "en":"Cabin"
                },
                "objectID":"PropertyType:103",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":6,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":102,
                "value":{
                   "en":"Aparthotel"
                },
                "objectID":"PropertyType:102",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":5,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":101,
                "value":{
                   "en":"All-inclusive property"
                },
                "objectID":"PropertyType:101",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":4,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":100,
                "value":{
                   "en":"Economy hotel"
                },
                "objectID":"PropertyType:100",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":3,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":10,
                "value":{
                   "en":"Pousada / Guest House",
                   "pt":"Pousada"
                },
                "objectID":"PropertyType:10",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":2,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":1,
                "value":{
                   "en":"Motel",
                   "pt":"Motel"
                },
                "objectID":"PropertyType:1",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":1,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             },
             {
                "id":0,
                "value":{
                   "en":"Hotel",
                   "pt":"Hotel"
                },
                "objectID":"PropertyType:0",
                "_rankingInfo":{
                   "nbTypos":0,
                   "firstMatchedWord":0,
                   "proximityDistance":0,
                   "userScore":0,
                   "geoDistance":0,
                   "geoPrecision":0,
                   "nbExactWords":0,
                   "words":0,
                   "filters":0
                }
             }
          ],
          "nbHits":522,
          "page":0,
          "nbPages":1,
          "hitsPerPage":1000,
          "exhaustiveNbHits":true,
          "query":"",
          "params":"hitsPerPage=1000&attributesToRetrieve=%5B%22id%22%2C%22categoryID%22%2C%22objectID%22%2C%22value.pt-BR%22%2C%22value.pt%22%2C%22value.en%22%5D&attributesToHighlight=%5B%5D&getRankingInfo=true",
          "index":"prod_lov_v2",
          "serverUsed":"d159-eu-3.algolia.net",
          "indexUsed":"prod_lov_v2",
          "parsedQuery":"",
          "timeoutCounts":false,
          "timeoutHits":false,
          "processingTimeMS":4
       },
       {
          "hits":[
             {
                "rate":1.0,
                "objectID":"USD"
             },
             {
                "rate":0.8226,
                "objectID":"EUR"
             }
          ],
          "nbHits":2,
          "page":0,
          "nbPages":1,
          "hitsPerPage":2,
          "exhaustiveNbHits":true,
          "query":"",
          "params":"hitsPerPage=2&query=&attributesToRetrieve=%5B%22rate%22%5D&attributesToHighlight=%5B%5D&facetFilters=%5B%5B%22objectID%3AUSD%22%2C%22objectID%3AEUR%22%5D%5D&getRankingInfo=false",
          "index":"prod_curr_v1",
          "processingTimeMS":1
       }
    ]
 }

export const configOutput = {
    "results":[
       {
          "hits":[
             {
                "description":"Config for FindHotel.net production",
                "blockedDefaultDates":[
                   "2021-01-03",
                   "2021-04-04",
                   "2021-02-14",
                   "2022-02-27"
                ],
                "daysFromNow":45,
                "enabledLanguages":[
                   "ru",
                   "en",
                   "fr",
                   "nl",
                   "pt",
                   "pt-BR"
                ],
                "fallbackLanguages":{
                   "pt-BR":[
                      "pt"
                   ],
                   "zh-CN":[
                      "zh"
                   ],
                   "zh-HK":[
                      "zh"
                   ],
                   "zh-TW":[
                      "zh"
                   ]
                },
                "hotelIndex":[
                   {
                      "name":"prod_hotel_v3",
                      "upperBound":100
                   }
                ],
                "autocompleteIndex":[
                   {
                      "name":"prod_autocomplete_v2_os000005",
                      "variationID":"os000007-dynamic-pagesize-a",
                      "upperBound":50
                   },
                   {
                      "name":"prod_autocomplete_v2_os000007",
                      "variationID":"os000007-dynamic-pagesize-b",
                      "upperBound":100
                   }
                ],
                "lovIndex":[
                   {
                      "name":"prod_lov_v2",
                      "upperBound":100
                   }
                ],
                "currencyIndex":[
                   {
                      "name":"prod_curr_v1",
                      "upperBound":100
                   }
                ],
                "hsoIndex":[
                   {
                      "name":"prod_hotelranking_v1_os000005_hso_rate_types",
                      "objectID":"current-a-side",
                      "variationID":"pp000003-tags-a",
                      "upperBound":50
                   },
                   {
                      "name":"prod_hotelranking_v1_pp000003_tags",
                      "objectID":"boost-availability-tags",
                      "variationID":"pp000003-tags-b",
                      "upperBound":100
                   }
                ],
                "raa":{
                   "endpoint":"wss://server.prd.eu.daedalus.fih.io",
                   "upperBound":100
                },
                "pageSize":20,
                "objectID":"findhotel-website"
             }
          ],
          "nbHits":1,
          "page":0,
          "nbPages":1,
          "hitsPerPage":20,
          "exhaustiveNbHits":true,
          "query":"",
          "params":"attributesToHighlight=%5B%5D&facetFilters=%5B%5B%22objectID%3Afindhotel-website%22%5D%5D",
          "index":"prod_sapicfg_v1",
          "processingTimeMS":1
       }
    ]
 }