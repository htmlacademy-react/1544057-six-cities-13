type RatingViewProps = {
  className: string;
  ratingValue: number;
  displayValue: boolean;
}

function RatingView({ className, ratingValue, displayValue }: RatingViewProps): React.JSX.Element {
  const MAX_RATING = 5;
  const roundedRating = Math.floor(ratingValue);
  const rating = `${(roundedRating / MAX_RATING) * 100}%`;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: rating }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {displayValue && <span className={`${className}__rating-value rating__value`}>{ratingValue}</span>}
    </div>
  );
}

export default RatingView;
