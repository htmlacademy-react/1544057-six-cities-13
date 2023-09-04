import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';
import { CityNameType } from '../types/cityName';
import { ExtendedOfferType, OfferType } from '../types/offers';
import { ReviewType } from '../types/reviews';

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
const getExtendedOffer = createAction<ExtendedOfferType>(`${Action.Offer}/get`);
const getReviews = createAction<ReviewType[]>(`${Action.Reviews}/get`);
const setDataLoadingStatus = createAction<boolean>(`${Action.Data}/set`);
const setAuthorizationStatus = createAction<AuthorizationStatus>(`${Action.User}/setAuthorizationStatus`);
const setUserEmail = createAction<string>(`${Action.Data}/setUserEmail`);

export {
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  setActiveCity,
  setAuthorizationStatus,
  setDataLoadingStatus,
  setUserEmail,
};
