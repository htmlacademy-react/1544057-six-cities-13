import { Route, Routes } from 'react-router-dom';

import browserHistory from '../../browser-history/browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';

function App(): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />

          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
