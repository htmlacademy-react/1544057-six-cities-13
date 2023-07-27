enum CardType {
  Favorites = 'favorites',
  Cities = 'cities',
  NearPlaces = 'near-places'
}

const CardImgWidth = {
  [CardType.Favorites]: 150,
  [CardType.Cities]: 260,
  [CardType.NearPlaces]: 260,
} as const;

const CardImgHeight = {
  [CardType.Favorites]: 110,
  [CardType.Cities]: 200,
  [CardType.NearPlaces]: 200,
} as const;

const CardImgSize = {
  [CardType.Favorites]: {
    Heigth: CardImgHeight[CardType.Favorites],
    Width: CardImgWidth[CardType.Favorites]
  },
  [CardType.Cities]: {
    Heigth: CardImgHeight[CardType.Cities],
    Width: CardImgWidth[CardType.Cities],
  },
  [CardType.NearPlaces]: {
    Heigth: CardImgHeight[CardType.NearPlaces],
    Width: CardImgWidth[CardType.NearPlaces]

  }
} as const;

const CardRatingWidth = {
  [CardType.Favorites]: '100%',
  [CardType.Cities]: '80%',
  [CardType.NearPlaces]: '80%'
};
export { CardImgSize, CardRatingWidth, CardType };
