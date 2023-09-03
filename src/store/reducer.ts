import { createReducer } from '@reduxjs/toolkit';

import { CityName } from '../const.ts';
import { CityNameType } from '../types/cityName.ts';
import { ExtendedOfferType, OfferType } from '../types/offers.ts';
import { ReviewType } from '../types/reviews.ts';
import {
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  setActiveCity,
  setDataLoadingStatus,
} from './action.ts';

type InitialStateType = {
  activeCity: CityNameType;
  offers: OfferType[];
  nearOffers: OfferType[];
  favoriteOffers: OfferType[];
  reviews: ReviewType[];
  extendedOffer?: ExtendedOfferType;
  isDataLoading: boolean;
}

const initialState: InitialStateType = {
  activeCity: CityName.Paris,
  offers: [],
  nearOffers: [],
  favoriteOffers: [],
  reviews: [],
  extendedOffer: undefined,
  isDataLoading: false
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export { reducer };
