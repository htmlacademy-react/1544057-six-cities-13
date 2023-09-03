import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { ExtendedOfferType, OfferType } from '../types/offers';
import { ReviewType } from '../types/reviews';
import { AppDispatchType, StateType } from '../types/state';
import {
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  setDataLoadingStatus,
} from './action';

type asyncThunkConfig = {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
};

enum TypePrefix {
  FetchOffers = 'data/fetchOffers',
  FetchFavoriteOffers = 'data/fetchFavoriteOffers',
  FetchExtendedOffer = 'data/fetchExtendedOffer',
  FetchReviews = 'data/fetchReviews',
  fetchNearbyOffers = 'data/fetchNearbyOffers'
}

const APIRoute = {
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

export const fetchOffersAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  TypePrefix.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {

    dispatch(setDataLoadingStatus(true));

    const { data } = await api.get<OfferType[]>(APIRoute.Offers);

    dispatch(getOffers(data));

    dispatch(setDataLoadingStatus(false));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  TypePrefix.FetchFavoriteOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));

    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);

    dispatch(getFavoriteOffers(data));
    dispatch(setDataLoadingStatus(false));
  });

export const fetchExtendedOfferAction = createAsyncThunk<void, string, asyncThunkConfig>(
  TypePrefix.FetchExtendedOffer,
  async (id, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));

    const { data } = await api.get<ExtendedOfferType>(APIRoute.Offer.Info(id));

    dispatch(getExtendedOffer(data));
    dispatch(setDataLoadingStatus(false));
  });

export const fetchReviewsAction = createAsyncThunk<void, string, asyncThunkConfig>(
  TypePrefix.FetchReviews,
  async (id, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));

    const { data } = await api.get<ReviewType[]>(APIRoute.Offer.Reviews(id));

    dispatch(getReviews(data));
    dispatch(setDataLoadingStatus(false));
  });

export const fetchNearOffersAction = createAsyncThunk<void, string, asyncThunkConfig>(
  TypePrefix.fetchNearbyOffers,
  async (id, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));

    const { data } = await api.get<OfferType[]>(APIRoute.Offer.NearbyOffers(id));

    dispatch(getNearOffers(data));
    dispatch(setDataLoadingStatus(false));
  });
