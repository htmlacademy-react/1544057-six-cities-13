import { createAction } from '@reduxjs/toolkit';

import { CityName } from '../const';

enum Action {
  Offers = 'offers'
}

const setActiveCity = createAction<CityName>(`${Action.Offers}/setActiveCity`);
const getOffersPerCity = createAction(`${Action.Offers}/get`);

export { getOffersPerCity, setActiveCity };
