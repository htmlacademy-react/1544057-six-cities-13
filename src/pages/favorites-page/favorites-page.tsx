import LocationsItem from '../../components/locations-item/locations-item';
import Logo from '../../components/logo/logo';
import { CardType } from '../../components/offer-card/const';
import OfferCard from '../../components/offer-card/offer-card';
import UserMenu from '../../components/user-menu/user-menu';
import { CityName } from '../../const';

export default function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserMenu userMail='Oliver.conner@gmail.com' favoriteCount={3} />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <LocationsItem nameCity={CityName.Amsterdam} path='' key={1} />
                </div>
                <div className="favorites__places">
                  <OfferCard cardType={CardType.Favorites} />
                  <OfferCard cardType={CardType.Favorites} />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <LocationsItem nameCity={CityName.Cologne} path='#' key={1} />
                </div>
                <div className="favorites__places">
                  <OfferCard cardType={CardType.Favorites} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
