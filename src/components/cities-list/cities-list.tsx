import { AppRoute, CityName } from '../../const';
import { CityNameType } from '../../types/cityName';
import LocationsItem from '../locations-item/locations-item';

type CitiesListProps = {
  activeCity: CityNameType;
  onClick?: (city: CityNameType) => void;
}

function CitiesList({ activeCity, onClick }: CitiesListProps): React.JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Array.from(
          Object.values(CityName),
          (cityName, index) => (
            <LocationsItem nameCity={cityName}
              path={AppRoute.Main}
              isNavItem
              isActive={cityName === activeCity}
              onClick={() => {
                if (onClick) {
                  onClick(cityName);
                }
              }}
              key={index}
            />
          )
        )}
      </ul>
    </section>
  );
}

export default CitiesList;
