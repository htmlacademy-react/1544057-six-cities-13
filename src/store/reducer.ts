import { createReducer } from '@reduxjs/toolkit';

import { CityName } from '../const.ts';
import { offers } from '../mocks/offers.ts';
import { Offer } from '../mocks/types/offers.ts';
import { getOffersPerCity, setActiveCity } from './action.ts';

type InitialState = {
  activeCity: CityName;
  offers: Offer[];
}

const initialState: InitialState = {
  activeCity: CityName.Paris,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getOffersPerCity, (state) => {
      state.offers = offers;
    });
});

export { reducer };
