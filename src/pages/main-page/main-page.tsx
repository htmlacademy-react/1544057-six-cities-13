import { useState } from 'react';

import CitiesList from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import OffersList from '../../components/offer/offers-list/offers-list';
import SortingOptions from '../../components/sorting/const';
import { Sorting } from '../../components/sorting/sorting';
import UserMenu from '../../components/user-menu/user-menu';
import { CardType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';
import { CityNameType } from '../../types/cityName';
import { SortingType } from '../../types/sorting';
import { findOffersByCity, sorting } from '../../utils';

export default function MainPage(): React.JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const [activeSorting, setActiveSorting] = useState<SortingType>(SortingOptions.Popular);

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersPerCity = sorting[activeSorting](findOffersByCity(offers, activeCity));

  const onOfferMouseOver = (id: string) => setActiveOffer(id);
  const onCityClick = (city: CityNameType) => dispatch(setActiveCity(city));
  const onSortChange = (sortType: SortingType) => setActiveSorting(sortType);

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

              <Sorting activeSorting={activeSorting} onChange={onSortChange} />

              <OffersList offers={offersPerCity} cardType={CardType.Cities} onActiveOffer={onOfferMouseOver} />

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
        </div>
      </main>
    </div>
  );
}
