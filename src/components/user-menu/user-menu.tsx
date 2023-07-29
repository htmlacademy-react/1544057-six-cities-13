import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

type UserMenuProps = {
  userMail?: string;
  favoriteCount?: number;
};

export default function UserMenu({ userMail, favoriteCount }: UserMenuProps) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {userMail ? (
              <span className="header__user-name user__name">{userMail}</span>
            ) : (
              <span className="header__login">Sign in</span>)}
            {userMail && <span className="header__favorite-count">{favoriteCount}</span>}

          </Link>
        </li>
        {userMail && (
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
