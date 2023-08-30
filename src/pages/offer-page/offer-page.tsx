import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import FavoriteButton
  from '../../components/offer/favorite-button/favorite-button';
import HostView from '../../components/offer/host-view/host-view';
import OffersList from '../../components/offer/offers-list/offers-list';
import PremiumMark from '../../components/offer/premium-mark/premium-mark';
import RatingView from '../../components/offer/rating-view/rating-view';
import ReviewForm from '../../components/offer/review/review-form/review-form';
import ReviewList from '../../components/offer/review/review-list/review-list';
import UserMenu from '../../components/user-menu/user-menu';
import { CardType } from '../../const';
import { ExtendedOffer, Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { capitalizeFirstLetter } from '../../utils';
import NotFoundPage from '../not-found-page/not-found-page';

type OfferPageProps = {
  offers: Offer[];
  reviewsMap: Map<string, Review[]>;
  extendedOfferMap: Map<string, ExtendedOffer>;
};

export default function OfferPage({ offers, reviewsMap, extendedOfferMap }: OfferPageProps): React.JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const onOfferMouseOver = (id: string) => {
    setActiveOffer(id);
  };
  const { id } = useParams();
  const extendedOffer = extendedOfferMap.get(String(id));
  const reviews = reviewsMap.get(String(id)) || [];

  if (!extendedOffer) {
    return <NotFoundPage />;
  }

  const { images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, description, host } = extendedOffer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.map((imageSrc, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="offer__image-wrapper" key={index}>
                    <img className="offer__image" src={imageSrc} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark className={'offer__mark'} />}
              <div className="offer__name-wrapper">

                <h1 className="offer__name">
                  {title}
                </h1>

                {<FavoriteButton className={'offer'} isFavorite={isFavorite} iconWidth={31} iconHeight={33} />}
              </div>

              <RatingView className={'offer'} ratingValue={rating} displayValue />

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((item, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <li className="offer__inside-item" key={index}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <HostView host={host} description={description} />

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>

                <ReviewList reviews={reviews} />

                <ReviewForm />
              </section>

            </div>
          </div>

          <Map offers={offers} activeCardId={activeOffer} type={CardType.NearPlaces} />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <OffersList offers={offers} cardType={CardType.NearPlaces} onActiveOffer={onOfferMouseOver} />

          </section>
        </div>
      </main>
    </div>
  );
}
