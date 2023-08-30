import { createAction } from '@reduxjs/toolkit';

import { CityNameType } from '../types/cityName';

enum Action {
  Offers = 'offers'
}

const setActiveCity = createAction<CityNameType>(`${Action.Offers}/setActiveCity`);
const getOffersPerCity = createAction(`${Action.Offers}/get`);

export { getOffersPerCity, setActiveCity };
