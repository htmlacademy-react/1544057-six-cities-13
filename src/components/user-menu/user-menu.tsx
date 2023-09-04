import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

export default function UserMenu() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userEmail = useAppSelector((state) => state.userEmail);
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {authorizationStatus ? (
              <span className="header__user-name user__name">{userEmail}</span>
            ) : (
              <span className="header__login">Sign in</span>)}
            {userEmail && <span className="header__favorite-count">{favoriteOffers.length}</span>}

          </Link>
        </li>
        {authorizationStatus && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}

      </ul>
    </nav >
  );
}
