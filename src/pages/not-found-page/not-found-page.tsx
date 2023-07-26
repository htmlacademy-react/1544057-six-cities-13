import './not-found-page.css';

import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

export default function OfferPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page-main--error container">
        <h1 className="page__error-code" > 404 </h1>

        <p className="page__error-message">The page you’re looking for does not exist.</p>
      </main>
    </div>
  );

}
