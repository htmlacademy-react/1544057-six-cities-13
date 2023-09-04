import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

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
import { AuthorizationStatus, CardType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchExtendedOfferAction,
  fetchNearOffersAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import { OfferType } from '../../types/offers';
import { capitalizeFirstLetter, getRandomOffers } from '../../utils';

export default function OfferPage(): React.JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const extendedOffer = useAppSelector((state) => state.extendedOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const offers = useAppSelector((state) => state.offers);
  const currentOffer = offers?.find((offer) => offer.id === id);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isOfferDataLoading = useAppSelector((state) => state.isOfferDataLoading);
  const isReviewsDataLoading = useAppSelector((state) => state.isReviewsDataLoading);
  const isNearOffersDataLoading = useAppSelector((state) => state.isNearOffersDataLoading);
  const isAuthDataLoading = authorizationStatus === AuthorizationStatus.Unknown;
  const isAuthUser = authorizationStatus === AuthorizationStatus.Auth;
  const isDataLoading = isOfferDataLoading || isNearOffersDataLoading || isReviewsDataLoading || isAuthDataLoading;

  const filterNearOffers: OfferType[] = getRandomOffers(nearOffers || []);
  if (currentOffer) {
    filterNearOffers.push(currentOffer);
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchExtendedOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearOffersAction(id));
    }
  }, [dispatch, id]);

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

        {isDataLoading ?
          <GridLoader margin='50px' color="#4481c3" cssOverride={{ display: 'block', margin: 'auto' }} /> :
          <>
            <section className="offer">
              <div className="offer__gallery-container container">
                <div className="offer__gallery">
                  {
                    extendedOffer?.images.map((imageSrc) => (
                      <div className="offer__image-wrapper" key={imageSrc}>
                        <img className="offer__image" src={imageSrc} alt="Photo studio" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="offer__container container">
                <div className="offer__wrapper">
                  {extendedOffer?.isPremium && <PremiumMark className={'offer__mark'} />}
                  <div className="offer__name-wrapper">

                    <h1 className="offer__name">
                      {extendedOffer?.title}
                    </h1>

                    {<FavoriteButton className={'offer'} isFavorite={!!extendedOffer?.isFavorite} iconWidth={31} iconHeight={33} />}
                  </div>

                  <RatingView className={'offer'} ratingValue={extendedOffer?.rating || 0} displayValue />

                  <ul className="offer__features">
                    <li className="offer__feature offer__feature--entire">
                      {capitalizeFirstLetter(String(extendedOffer?.type))}
                    </li>
                    <li className="offer__feature offer__feature--bedrooms">
                      {extendedOffer?.bedrooms} Bedrooms
                    </li>
                    <li className="offer__feature offer__feature--adults">
                      Max {extendedOffer?.maxAdults} adults
                    </li>
                  </ul>
                  <div className="offer__price">
                    <b className="offer__price-value">&euro;{extendedOffer?.price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">What&apos;s inside</h2>
                    <ul className="offer__inside-list">
                      {
                        extendedOffer?.goods.map((item, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <li className="offer__inside-item" key={index}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <HostView host={extendedOffer?.host} description={extendedOffer?.description} />

                  <section className="offer__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>

                    <ReviewList reviews={reviews || []} />

                    {isAuthUser && <ReviewForm offerId={id || ''} />}
                  </section>

                </div>
              </div>

              <Map offers={filterNearOffers} type={CardType.NearPlaces} />

            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>

                <OffersList offers={filterNearOffers} cardType={CardType.NearPlaces} />

              </section>
            </div>
          </>}

      </main>


    </div>
  );
}
