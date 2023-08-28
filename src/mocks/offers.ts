import { ExtendedOffer, Offer } from './types/offers';

const offers: Offer[] = [
  {
    'id': '22ce00cc-b81b-4085-8a27-aebcd80dd266',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 368,
    'previewImage': 'https://13.design.pages.academy/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '8d193608-5355-48c0-83cb-9df6cf53c946',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 206,
    'previewImage': 'https://13.design.pages.academy/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '48c7fee7-81b9-4ed9-9d4c-7710fcae40bf',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 130,
    'previewImage': 'https://13.design.pages.academy/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '139ca2ad-1da5-44ee-8f66-dea160858386',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 188,
    'previewImage': 'https://13.design.pages.academy/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '7d54ec8d-6359-4a31-89b6-1ed5107a1dcd',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 205,
    'previewImage': 'https://13.design.pages.academy/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': 'd3f7a08e-c795-4081-ba7d-9783d099c300',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 798,
    'previewImage': 'https://13.design.pages.academy/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3
  }
];

const extendedOffer: ExtendedOffer[] = [
  {
    'id': '22ce00cc-b81b-4085-8a27-aebcd80dd266',
    'title': 'Canal View Prinsengracht',
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'type': 'house',
    'price': 409,
    'images': [
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'goods': [
      'Breakfast',
      'Washing machine',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Kitchen',
      'Air conditioning',
      'Dishwasher',
      'Fridge',
      'Towels',
      'Baby seat',
      'Cable TV',
      'Heating'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 2.1,
    'bedrooms': 1,
    'maxAdults': 1
  },
  {
    'id': '8d193608-5355-48c0-83cb-9df6cf53c946',
    'title': 'Amazing and Extremely Central Flat',
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'type': 'house',
    'price': 275,
    'images': [
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'goods': [
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Wi-Fi',
      'Cable TV',
      'Washing machine',
      'Towels',
      'Washer',
      'Fridge',
      'Breakfast',
      'Air conditioning',
      'Kitchen',
      'Laptop friendly workspace'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 3.3,
    'bedrooms': 3,
    'maxAdults': 9
  },
  {
    'id': '48c7fee7-81b9-4ed9-9d4c-7710fcae40bf',
    'title': 'The Pondhouse - A Magical Place',
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'type': 'apartment',
    'price': 183,
    'images': [
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'goods': [
      'Laptop friendly workspace',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Washing machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 1.1,
    'bedrooms': 4,
    'maxAdults': 5
  },
  {
    'id': 'aa30f0ef-9fc6-4384-9d68-3750f23ade1c',
    'title': 'Canal View Prinsengracht',
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'type': 'apartment',
    'price': 132,
    'images': [
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'goods': [
      'Washer',
      'Cable TV',
      'Fridge',
      'Air conditioning',
      'Coffee machine',
      'Towels',
      'Wi-Fi',
      'Dishwasher'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 1.8,
    'bedrooms': 5,
    'maxAdults': 6
  }
];

const extendedOfferMap = new Map(extendedOffer.map((offer) => [offer.id, offer]));

export { extendedOfferMap, offers };
