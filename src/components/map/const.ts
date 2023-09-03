import { CityName } from '../../const';
import { Location } from '../../types/offers';

export const CityConfigurations: { [key in CityName]: Location } = {
  [CityName.Paris]: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10
  }
  ,
  [CityName.Cologne]: {
    latitude: 50.8936,
    longitude: 7.0731,
    zoom: 10
  }
  ,
  [CityName.Brussels]: {
    latitude: 50.846707,
    longitude: 4.352472,
    zoom: 10
  }
  ,
  [CityName.Amsterdam]: {
    latitude: 52.374,
    longitude: 4.88969,
    zoom: 10
  }
  ,
  [CityName.Hamburg]: {
    latitude: 53.5753,
    longitude: 10.0153,
    zoom: 10
  }
  ,
  [CityName.Dusseldorf]: {
    latitude: 51.2217,
    longitude: 6.77616,
    zoom: 10
  }
} as const;

export const UrlMarker = {
  Default: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
};