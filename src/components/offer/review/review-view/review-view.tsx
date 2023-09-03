import { ReviewType } from '../../../../types/reviews';
import { formatDate } from '../../../../utils';
import RatingView from '../../rating-view/rating-view';

type ReviewViewProps = {
  review: ReviewType;
}

export default function ReviewView({ review }: ReviewViewProps): React.JSX.Element {
  const { user, comment, date, rating } = review;
  const { isPro, name, avatarUrl } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>

        {isPro && <span className="offer__user-status"> Pro </span>}

      </div>
      <div className="reviews__info">

        <RatingView className={'reviews'} ratingValue={rating} displayValue={false} />

        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate(date)}</time>
      </div>
    </li>
  );
}
