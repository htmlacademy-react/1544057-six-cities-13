import { createAction } from '@reduxjs/toolkit';

import { CityName } from '../const';

enum Action {
  Offers = 'offers'
}

type CityName = typeof CityName[keyof typeof CityName]

const setActiveCity = createAction<CityName>(`${Action.Offers}/setActiveCity`);
const getOffersPerCity = createAction(`${Action.Offers}/get`);

export { getOffersPerCity, setActiveCity };
