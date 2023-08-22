type FavoriteButtonProps = {
  className: string;
  isFavorite: boolean;
  iconWidth: number;
  iconHeight: number;
}

function FavoriteButton({ isFavorite, className, iconWidth, iconHeight }: FavoriteButtonProps): React.JSX.Element {
  return (
    <button className={`${className}__bookmark-button ${isFavorite ? `${className}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${className}__bookmark-icon ${className}`} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
