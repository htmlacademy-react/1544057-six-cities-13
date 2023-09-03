import { createAction } from '@reduxjs/toolkit';

import { CityNameType } from '../types/cityName';
import { ExtendedOfferType, OfferType } from '../types/offers';
import { ReviewType } from '../types/reviews';

enum Action {
  Offers = 'offers',
  Offer = 'offer',
  Reviews = 'reviews',
  Data = 'data'
}

const setActiveCity = createAction<CityNameType>(`${Action.Offers}/setActiveCity`);
const getOffers = createAction<OfferType[]>(`${Action.Offers}/getOffers`);
const getNearOffers = createAction<OfferType[]>(`${Action.Offers}/getNearOffers`);
const getFavoriteOffers = createAction<OfferType[]>(`${Action.Offers}/getFavoriteOffers`);
const getExtendedOffer = createAction<ExtendedOfferType>(`${Action.Offer}/get`);
const getReviews = createAction<ReviewType[]>(`${Action.Reviews}/get`);
const setDataLoadingStatus = createAction<boolean>(`${Action.Data}/set`);

export {
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  setActiveCity,
  setDataLoadingStatus,
};
