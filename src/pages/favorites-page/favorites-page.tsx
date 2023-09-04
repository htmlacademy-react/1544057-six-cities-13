import { useEffect } from 'react';

import GridLoader from 'react-spinners/GridLoader';

import LocationsItem from '../../components/locations-item/locations-item';
import Logo from '../../components/logo/logo';
import OffersList from '../../components/offer/offers-list/offers-list';
import UserMenu from '../../components/user-menu/user-menu';
import { CardType, CityName } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

export default function FavoritesPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffers = useAppSelector((state) => state.favoriteOffers);
  const isFavoriteDataLoading = useAppSelector((state) => state.isFavoriteDataLoading);


  useEffect(() => {
    dispatch(fetchFavoriteOffersAction);
  }, [dispatch]);

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
      {isFavoriteDataLoading ?
        <GridLoader margin='50px' color="#4481c3" cssOverride={{ margin: 'auto' }} /> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Array.from(Object.values(CityName), (cityName) => {
                  const offerPerCity = favoritesOffers?.filter(
                    ({ city }) => cityName === city.name
                  );

                  return offerPerCity?.length ? (
                    <li className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <LocationsItem nameCity={cityName} path='#' />
                      </div>
                      <div className="favorites__places">
                        {
                          <OffersList offers={offerPerCity} cardType={CardType.Favorites} />
                        }
                      </div>
                    </li>
                  ) : null;
                })}
              </ul>
            </section>
          </div>
        </main>}

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
