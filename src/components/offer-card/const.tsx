enum CardType {
  Favorites = 'favorites',
  Cities = 'cities',
  NearPlaces = 'near-places'
}

const CardImgSize = {
  [CardType.Favorites]: {
    heigth: 110,
    width: 150
  },
  [CardType.Cities]: {
    heigth: 200,
    width: 260
  },
  [CardType.NearPlaces]: {
    heigth: 200,
    width: 260
  }
} as const;

const CardRatingWidth = {
  [CardType.Favorites]: '100%',
  [CardType.Cities]: '80%',
  [CardType.NearPlaces]: '80%'
};
export { CardImgSize, CardRatingWidth, CardType };
