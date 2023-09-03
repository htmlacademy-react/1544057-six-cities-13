import { OfferType } from './types/offers';
import { SortingType } from './types/sorting';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

const findOffersByCity = (offers: OfferType[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const sortByRating = (offerA: OfferType, offerB: OfferType) => offerB.rating - offerA.rating;

const sortLowToHigh = (offerA: OfferType, offerB: OfferType) => offerA.price - offerB.price;

const sortHighToLow = (offerA: OfferType, offerB: OfferType) => offerB.price - offerA.price;

const sorting: Record<SortingType, (offers: OfferType[]) => OfferType[]> =
{
  Popular: (offersForSort: OfferType[]) => offersForSort,
  LowToHigh: (offersForSort: OfferType[]) => offersForSort.slice().sort(sortLowToHigh),
  HighToLow: (offersForSort: OfferType[]) => offersForSort.slice().sort(sortHighToLow),
  TopRated: (offersForSort: OfferType[]) => offersForSort.slice().sort(sortByRating)
};
export { capitalizeFirstLetter, findOffersByCity, formatDate, sorting };
