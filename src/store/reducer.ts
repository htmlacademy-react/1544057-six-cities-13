import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, CityName } from '../const.ts';
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
  setAuthorizationStatus,
  setDataLoadingStatus,
} from './action.ts';

type InitialStateType = {
  activeCity: CityNameType;
  offers: OfferType[];
  nearOffers: OfferType[];
  favoriteOffers: OfferType[];
  reviews: ReviewType[];
  extendedOffer: ExtendedOfferType;
  isDataLoading: number;
  authorizationStatus: AuthorizationStatus;
}

const EXTENDED_OFFER_EXAMPLE: ExtendedOfferType = {
  id: '',
  title: 'Title',
  type: 'apartment',
  price: 0,
  city: {
    name: CityName.Paris,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  isFavorite: false,
  isPremium: false,
  rating: 0,
  description: '',
  bedrooms: 0,
  goods: [],
  host: {
    name: '',
    avatarUrl: 'img/avatar.svg',
    isPro: false,
  },
  images: [],
  maxAdults: 0,
};

const initialState: InitialStateType = {
  activeCity: CityName.Paris,
  offers: [],
  nearOffers: [],
  favoriteOffers: [],
  reviews: [],
  extendedOffer: EXTENDED_OFFER_EXAMPLE,
  isDataLoading: 0,
  authorizationStatus: AuthorizationStatus.Unknown
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
      if (action.payload) {
        state.isDataLoading += +action.payload;
      } else {
        state.isDataLoading -= 1;
      }
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
