import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthDataType } from '../types/auth-data';
import { ExtendedOfferType, OfferType } from '../types/offers';
import { ReviewDataType, ReviewType } from '../types/reviews';
import { AppDispatchType, StateType } from '../types/state';
import { UserDataType } from '../types/user-data';
import {
  addReview,
  getExtendedOffer,
  getFavoriteOffers,
  getNearOffers,
  getOffers,
  getReviews,
  redirectToRoute,
  setAuthorizationStatus,
  setFavoriteLoadingStatus,
  setNearOffersLoadingStatus,
  setOfferLoadingStatus,
  setOffersLoadingStatus,
  setReviewDataSendingStatus,
  setReviewsLoadingStatus,
  setUserData,
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

    dispatch(setOffersLoadingStatus(true));

    const { data } = await api.get<OfferType[]>(APIRoute.Offers);

    dispatch(getOffers(data));
    dispatch(setOffersLoadingStatus(false));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  TypePrefix.FetchFavoriteOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFavoriteLoadingStatus(true));
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
      dispatch(getFavoriteOffers(data));
      dispatch(setFavoriteLoadingStatus(false));
    } catch {
      dispatch(setFavoriteLoadingStatus(false));
    }


  });

export const fetchExtendedOfferAction = createAsyncThunk<void, string, asyncThunkConfig>(
  TypePrefix.FetchExtendedOffer,
  async (id, { dispatch, extra: api }) => {
    dispatch(setOfferLoadingStatus(true));

    const { data } = await api.get<ExtendedOfferType>(APIRoute.Offer.Info(id));

    dispatch(getExtendedOffer(data));
    dispatch(setOfferLoadingStatus(false));
  });

export const fetchReviewsAction = createAsyncThunk<void, string, asyncThunkConfig>(
  TypePrefix.FetchReviews,
  async (id, { dispatch, extra: api }) => {
    dispatch(setReviewsLoadingStatus(true));

    const { data } = await api.get<ReviewType[]>(APIRoute.Offer.Reviews(id));

    dispatch(getReviews(data));
    dispatch(setReviewsLoadingStatus(false));
  });

export const fetchNearOffersAction = createAsyncThunk<void, string, asyncThunkConfig>(
  TypePrefix.fetchNearbyOffers,
  async (id, { dispatch, extra: api }) => {
    dispatch(setNearOffersLoadingStatus(true));

    const { data } = await api.get<OfferType[]>(APIRoute.Offer.NearbyOffers(id));

    dispatch(getNearOffers(data));
    dispatch(setNearOffersLoadingStatus(false));
  });

export const checkAuthAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  TypePrefix.CheckAuth,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: userData } = await api.get<UserDataType>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData(userData));
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
    dispatch(setUserData(null));
  },
);

export const sendReviewAction = createAsyncThunk<boolean, { id: string; review: ReviewDataType }, asyncThunkConfig>(
  TypePrefix.sendReview,
  async ({ id, review }, { dispatch, extra: api }) => {
    dispatch(setReviewDataSendingStatus(true));
    try {
      const { data } = await api.post<ReviewType>(APIRoute.Offer.Reviews(id), review);
      dispatch(addReview(data));
    } catch {
      dispatch(setReviewDataSendingStatus(false));
      return false;
    }
    dispatch(setReviewDataSendingStatus(false));
    return true;
  }
);
