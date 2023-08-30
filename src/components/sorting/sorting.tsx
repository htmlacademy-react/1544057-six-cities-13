import { KeyboardEvent, useState } from 'react';

import cn from 'classnames';

import { SortingType } from '../../types/sorting';
import SortingOptions from './const';

type SortingProps = {
  activeSorting: SortingType;
  onChange: (newSorting: SortingType) => void;
};

function Sorting({ activeSorting, onChange }: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleTypeClick = () => setIsOpened((prevValue) => !prevValue);

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  const handleSortItemClick = (type: SortingType) => {
    onChange(type);
    setIsOpened(false);
  };

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeyDown}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {SortingOptions[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        { 'places__options--opened': isOpened }
      )}
      >
        {(
          Object.entries(SortingOptions) as [
            SortingType,
            (typeof SortingOptions)[SortingType]
          ][]
        ).map(([type, label]) => (
          <li
            key={type}
            className={cn(
              'places__option',
              { 'places__option--active': activeSorting === type }
            )}
            tabIndex={0}
            onClick={() => handleSortItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { Sorting };
