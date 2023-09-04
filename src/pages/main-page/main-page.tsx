import { useEffect, useState } from 'react';

import GridLoader from 'react-spinners/GridLoader';

import CitiesList from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import OffersList from '../../components/offer/offers-list/offers-list';
import SortingOptions from '../../components/sorting/const';
import { Sorting } from '../../components/sorting/sorting';
import UserMenu from '../../components/user-menu/user-menu';
import { CardType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity, setOffersLoadingStatus } from '../../store/action';
import { fetchOffersAction } from '../../store/api-actions';
import { CityNameType } from '../../types/cityName';
import { SortingType } from '../../types/sorting';
import { findOffersByCity, sorting } from '../../utils';

export default function MainPage(): React.JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const [activeSorting, setActiveSorting] = useState<SortingType>(SortingOptions.Popular);

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const userData = useAppSelector((state) => state.userData);
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const isDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const handleOfferMouseOver = (id: string) => setActiveOffer(id);
  const handleCityClick = (city: CityNameType) => dispatch(setActiveCity(city));
  const handleSortChange = (sortType: SortingType) => setActiveSorting(sortType);

  useEffect(() => {
    dispatch(fetchOffersAction);
  }, [dispatch]);

  useEffect(() => {
    if (offers && userData && favoriteOffers) {
      dispatch(setOffersLoadingStatus(false));
    }
  }, [dispatch, favoriteOffers, offers, userData, authorizationStatus]);

  const offersPerCity = offers ? sorting[activeSorting](findOffersByCity(offers, activeCity)) : [];

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList activeCity={activeCity} onClick={handleCityClick} />
        </div>
        {isDataLoading ?
          <GridLoader margin='50px' color="#4481c3" cssOverride={{ display: 'block', margin: 'auto' }} /> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersPerCity.length} places to stay in {activeCity}</b>

                <Sorting activeSorting={activeSorting} onChange={handleSortChange} />

                <OffersList offers={offersPerCity} cardType={CardType.Cities} onActiveOffer={handleOfferMouseOver} />

              </section>
              <div className="cities__right-section">
                <Map
                  offers={offersPerCity}
                  activeCardId={activeOffer}
                  type={CardType.Cities}
                  isInteractive
                />

              </div>
            </div>
          </div>}

      </main>
    </div>
  );
}
