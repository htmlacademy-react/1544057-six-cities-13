import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthAction, logoutAction } from '../../store/api-actions';

export default function UserMenu() {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const isFavoriteDataLoading = useAppSelector((state) => state.isFavoriteDataLoading);
  const isAuthDataLoading = authorizationStatus === AuthorizationStatus.Unknown;
  const isDataLoading = isFavoriteDataLoading || isAuthDataLoading;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <nav className="header__nav">
      {isDataLoading ? <span>Loading...</span> :
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${String(userData?.avatarUrl)})` }}>
              </div>

              {authorizationStatus === AuthorizationStatus.Auth ?
                <span className="header__user-name user__name">{userData?.email}</span> :
                <span className="header__login">Sign in</span>}

              {favoriteOffers && authorizationStatus === AuthorizationStatus.Auth && <span className="header__favorite-count">{favoriteOffers?.length}</span>}
            </Link>
          </li>
          {authorizationStatus === AuthorizationStatus.Auth && (
            <li className="header__nav-item" onClick={handleLogout}>
              <Link
                className="header__nav-link"
                to={AppRoute.Login}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          )}
        </ul>}

    </nav >
  );
}

