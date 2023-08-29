import { MouseEventHandler } from 'react';

import { NavLink } from 'react-router-dom';

type LocationsItemProps = {
  nameCity: string;
  path: string;
  isNavItem?: boolean;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function LocationsItem({ nameCity, path, isNavItem = false, isActive = false, onClick }: LocationsItemProps): React.JSX.Element {
  const content = (
    <NavLink
      className={`locations__item-link ${isActive ? 'tabs__item--active' : ''}`}
      to={path}
      onClick={onClick}
    >
      <span>{nameCity}</span>
    </NavLink>
  );

  if (isNavItem) {
    return <li className="locations__item">{content}</li>;
  }

  return <div className="locations__item">{content}</div>;
}
