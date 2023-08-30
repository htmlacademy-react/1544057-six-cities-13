import { CityName } from '../const';

export type CityNameType = typeof CityName[keyof typeof CityName]
