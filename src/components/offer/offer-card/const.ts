import { CardType } from '../../../const';

export const CardImgSize = {
  [CardType.Favorites]: {
    height: 110,
    width: 150
  },
  [CardType.Cities]: {
    height: 200,
    width: 260
  },
  [CardType.NearPlaces]: {
    height: 200,
    width: 260
  }
} as const;
