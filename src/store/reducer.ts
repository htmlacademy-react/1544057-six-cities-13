import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, CityName } from '../const.ts';
import { CityNameType } from '../types/cityName.ts';
import { ExtendedOfferType, OfferType } from '../types/offers.ts';
import { ReviewType } from '../types/reviews.ts';
import { UserDataType } from '../types/user-data.ts';
import {
  addReview,
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  setActiveCity,
  setAuthorizationStatus,
  setFavoriteLoadingStatus,
  setNearOffersLoadingStatus,
  setOfferLoadingStatus,
  setOffersLoadingStatus,
  setReviewDataSendingStatus,
  setReviewsLoadingStatus,
  setUserData,
} from './action.ts';

type InitialStateType = {
  activeCity: CityNameType;
  offers: OfferType[] | null;
  nearOffers: OfferType[] | null;
  favoriteOffers: OfferType[] | null;
  reviews: ReviewType[] | null;
  extendedOffer: ExtendedOfferType | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearOffersDataLoading: boolean;
  isReviewsDataLoading: boolean;
  isReviewSending: boolean;
  isFavoriteDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserDataType | null;
}


const initialState: InitialStateType = {
  activeCity: CityName.Paris,
  offers: null,
  nearOffers: null,
  favoriteOffers: null,
  reviews: null,
  extendedOffer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  isNearOffersDataLoading: false,
  isReviewsDataLoading: false,
  isFavoriteDataLoading: false,
  isReviewSending: false

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(getFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getExtendedOffer, (state, action) => {
      state.extendedOffer = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(setNearOffersLoadingStatus, (state, action) => {
      state.isNearOffersDataLoading = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(setFavoriteLoadingStatus, (state, action) => {
      state.isFavoriteDataLoading = action.payload;
    })
    .addCase(addReview, (state, action) => {
      if (state.reviews) {
        state.reviews.push(action.payload);
      }
    })
    .addCase(setReviewDataSendingStatus, (state, action) => {
      state.isReviewSending = action.payload;
    });

});

export { reducer };
