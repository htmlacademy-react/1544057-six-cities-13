import { Offer } from './types/offers';
import { SortingType } from './types/sorting';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

const findOffersByCity = (offers: Offer[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sorting: Record<SortingType, (offers: Offer[]) => Offer[]> =
{
  Popular: (offersForSort: Offer[]) => offersForSort,
  LowToHigh: (offersForSort: Offer[]) => offersForSort.slice().sort(sortLowToHigh),
  HighToLow: (offersForSort: Offer[]) => offersForSort.slice().sort(sortHighToLow),
  TopRated: (offersForSort: Offer[]) => offersForSort.slice().sort(sortByRating)
};
export { capitalizeFirstLetter, findOffersByCity, formatDate, sorting };
