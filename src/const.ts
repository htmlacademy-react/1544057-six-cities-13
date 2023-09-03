export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  PageNotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CityName = {
  Amsterdam: 'Amsterdam',
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export enum CardType {
  Favorites = 'favorites',
  Cities = 'cities',
  NearPlaces = 'near-places'
}
