import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { CityNameType } from '../types/cityName';
import { ExtendedOfferType, OfferType } from '../types/offers';
import { ReviewType } from '../types/reviews';
import { UserDataType } from '../types/user-data';

enum Action {
  Offers = 'offers',
  Offer = 'offer',
  Reviews = 'reviews',
  Data = 'data',
  User = 'user',
  App = 'app'
}

const setActiveCity = createAction<CityNameType>(`${Action.Offers}/setActiveCity`);

const getOffers = createAction<OfferType[]>(`${Action.Offers}/getOffers`);

const getNearOffers = createAction<OfferType[]>(`${Action.Offers}/getNearOffers`);

const getFavoriteOffers = createAction<OfferType[]>(`${Action.Offers}/getFavoriteOffers`);

const getExtendedOffer = createAction<ExtendedOfferType>(`${Action.Offer}/getExtendedOffer`);

const getReviews = createAction<ReviewType[]>(`${Action.Reviews}/getReviews`);

const setAuthorizationStatus = createAction<AuthorizationStatus>(`${Action.User}/setAuthorizationStatus`);

const setUserData = createAction<UserDataType | null>(`${Action.User}/setUserData`);

const redirectToRoute = createAction<AppRoute>(`${Action.App}/redirectToRoute`);

const setOffersLoadingStatus = createAction<boolean>(`${Action.Data}/setOffersLoadingStatus`);

const setOfferLoadingStatus = createAction<boolean>(`${Action.Data}/setOfferLoadingStatus`);

const setReviewsLoadingStatus = createAction<boolean>(`${Action.Data}/setReviewsLoadingStatus`);

const setNearOffersLoadingStatus = createAction<boolean>(`${Action.Data}/setNearOffersLoadingStatus`);

const setFavoriteLoadingStatus = createAction<boolean>(`${Action.Data}/setFavoriteLoadingStatus`);

const addReview = createAction<ReviewType>(`${Action.Offer}/addReview`);

const setReviewDataSendingStatus = createAction<boolean>(`${Action.Data}/setReviewDataSendingStatus`);

export {
  addReview,
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  redirectToRoute,
  setActiveCity,
  setAuthorizationStatus,
  setFavoriteLoadingStatus,
  setNearOffersLoadingStatus,
  setOfferLoadingStatus,
  setOffersLoadingStatus,
  setReviewDataSendingStatus,
  setReviewsLoadingStatus,
  setUserData,
};
