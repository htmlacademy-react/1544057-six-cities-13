import { Offer } from './types/offers';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

const findOffersByCity = (offers: Offer[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

export { capitalizeFirstLetter, findOffersByCity, formatDate };
