import { useState } from 'react';

import CitiesList from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import OffersList from '../../components/offer/offers-list/offers-list';
import UserMenu from '../../components/user-menu/user-menu';
import { CardType, CityName } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';
import { findOffersByCity } from '../../utils';

export default function MainPage(): React.JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const onOfferMouseOver = (id: string) => {
    setActiveOffer(id);
  };

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersPerCity = findOffersByCity(offers, activeCity);
  const onCityClick = (city: CityName) => dispatch(setActiveCity(city));

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserMenu userMail='Oliver.conner@gmail.com' favoriteCount={3} />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList activeCity={activeCity} onClick={onCityClick} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersPerCity.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <OffersList offers={offersPerCity} cardType={CardType.Cities} onActiveOffer={onOfferMouseOver} />

            </section>
            <div className="cities__right-section">
              <Map
                offers={offersPerCity}
                activeCardId={activeOffer}
                type={CardType.Cities}
              />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
