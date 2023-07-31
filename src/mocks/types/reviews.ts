type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type OfferReview = {
  id: string;
  reviews: Review[];
};
