import { NavLink } from 'react-router-dom';

type LocationsItemProps = {
  nameCity: string;
  path: string;
  isNavItem?: boolean;
  isActive?: boolean;
}

export default function LocationsItem({ nameCity, path, isNavItem = false, isActive = false }: LocationsItemProps): JSX.Element {
  const content = (
    <NavLink
      className={`locations__item-link ${isActive ? 'tabs__item--active' : ''}`}
      to={path}
    >
      <span>{nameCity}</span>
    </NavLink>
  );

  if (isNavItem) {
    return <li className="locations__item">{content}</li>;
  }

  return <div className="locations__item">{content}</div>;
}
