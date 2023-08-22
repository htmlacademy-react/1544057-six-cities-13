import { OfferReview } from './types/reviews';

const reviews: OfferReview[] = [
  {
    'id': '7f52958f-7762-4ee1-aff2-04912cd47888',
    'reviews': [
      {
        'id': 'e78f5c4f-5acb-4047-a561-b4eff8d732dc',
        'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
        'date': '2023-07-08T21:00:00.455Z',
        'rating': 3,
        'user': {
          'name': 'Corey',
          'avatarUrl': 'https://13.design.pages.academy/static/avatar/6.jpg',
          'isPro': true
        }
      }
    ]
  },
  {
    'id': '0959aa00-4de8-400d-91a6-a73ee223b93a',
    'reviews': [
      {
        'id': 'e8bc6b72-8741-4fe8-9dc3-e2d8759fd738',
        'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
        'date': '2023-07-08T21:00:00.455Z',
        'rating': 1,
        'user': {
          'name': 'Corey',
          'avatarUrl': 'https://13.design.pages.academy/static/avatar/3.jpg',
          'isPro': true
        }
      }
    ]
  },
  {
    'id': 'eb9156d7-bc3a-48d2-8244-d000b3e89e82',
    'reviews': [
      {
        'id': '079d6414-b05c-427e-b5d8-7049694d43a1',
        'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
        'date': '2023-07-08T21:00:00.455Z',
        'rating': 5,
        'user': {
          'name': 'Emely',
          'avatarUrl': 'https://13.design.pages.academy/static/avatar/5.jpg',
          'isPro': true
        }
      },
      {
        'id': '30f9ce19-defc-47ab-ad10-c37bb6549693',
        'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
        'date': '2023-07-05T21:00:00.455Z',
        'rating': 2,
        'user': {
          'name': 'Max',
          'avatarUrl': 'https://13.design.pages.academy/static/avatar/2.jpg',
          'isPro': true
        }
      }
    ]
  },
  {
    'id': '7d54ec8d-6359-4a31-89b6-1ed5107a1dcd',
    'reviews': []
  }
];

const reviewsMap = new Map(reviews.map((offer) => [offer.id, offer.reviews]));

export default reviewsMap;
