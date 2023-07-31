import { OfferReview } from './types/reviews';

const reviews: OfferReview[] = [
  {
    'id': '22ce00cc-b81b-4085-8a27-aebcd80dd266',
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
    'id': '8d193608-5355-48c0-83cb-9df6cf53c946',
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
    'id': '139ca2ad-1da5-44ee-8f66-dea160858386',
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
    'id': 'aa30f0ef-9fc6-4384-9d68-3750f23ade1c',
    'reviews': []
  },
  {
    'id': 'd3f7a08e-c795-4081-ba7d-9783d099c300',
    'reviews': [
      {
        'id': '8866fefc-cd3f-4cae-a048-f387c385506c',
        'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
        'date': '2023-07-07T21:00:00.455Z',
        'rating': 1,
        'user': {
          'name': 'Christina',
          'avatarUrl': 'https://13.design.pages.academy/static/avatar/2.jpg',
          'isPro': false
        }
      },
      {
        'id': '0bbdbd81-9f05-4f64-b3fd-6a6a25300b48',
        'comment': 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
        'date': '2023-07-04T21:00:00.455Z',
        'rating': 1,
        'user': {
          'name': 'Isaac',
          'avatarUrl': 'https://13.design.pages.academy/static/avatar/3.jpg',
          'isPro': false
        }
      }
    ]
  }
];

const reviewsMap = new Map(reviews.map((offer) => [offer.id, offer.reviews]));

export default reviewsMap;
