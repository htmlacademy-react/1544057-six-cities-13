import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthDataType } from '../types/auth-data';
import { ExtendedOfferType, OfferType } from '../types/offers';
import { ReviewType } from '../types/reviews';
import { AppDispatchType, StateType } from '../types/state';
import { UserDataType } from '../types/user-data';
import {
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  redirectToRoute,
  setAuthorizationStatus,
  setDataLoadingStatus,
  setUserEmail,
} from './action';
import { APIRoute, TypePrefix } from './const';

type asyncThunkConfig = {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
};

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

export const checkAuthAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  TypePrefix.CheckAuth,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);

      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, asyncThunkConfig>(
  TypePrefix.Login,
  async (authData, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserDataType>(APIRoute.Login, authData);
    saveToken(token);

    dispatch(setUserEmail(authData.email));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  TypePrefix.Logout,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);
