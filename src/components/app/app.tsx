import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { ExtendedOffer, Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offers: Offer[];
  reviewsMap: Map<string, Review[]>;
  extendedOfferMap: Map<string, ExtendedOffer>;
}

function App({ offers, reviewsMap, extendedOfferMap }: AppProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} >
          <Route
            index
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage favoriteOffers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} extendedOfferMap={extendedOfferMap} reviewsMap={reviewsMap} />}
          />


          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
