export enum TypePrefix {
  FetchOffers = 'data/fetchOffers',
  FetchFavoriteOffers = 'data/fetchFavoriteOffers',
  FetchExtendedOffer = 'data/fetchExtendedOffer',
  FetchReviews = 'data/fetchReviews',
  fetchNearbyOffers = 'data/fetchNearbyOffers',
  CheckAuth = 'user/checkAuth',
  Login = 'user/login',
  Logout = 'user/logout',
  sendReview = 'data/sendReview'
}

export const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
  Favorite: '/favorite',
  Offer: {
    Info: (id: string) => `/offers/${id}`,
    NearbyOffers: (id: string) => `/offers/${id}/nearby`,
    Reviews: (id: string) => `/comments/${id}`,
  }
} as const;
