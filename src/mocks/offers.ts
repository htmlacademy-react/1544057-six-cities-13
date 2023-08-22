import { Offer } from './types/offers';

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
    'id': 'aa30f0ef-9fc6-4384-9d68-3750f23ade1c',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 205,
    'previewImage': 'https://13.design.pages.academy/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
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
      'name': 'Paris',
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

const offersMap = new Map(offers.map((offer) => [offer.id, offer]));

export { offers, offersMap };
