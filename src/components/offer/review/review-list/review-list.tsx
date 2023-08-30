import { Review } from '../../../../types/reviews';
import ReviewView from '../review-view/review-view';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">

      {reviews.map((review) => <ReviewView review={review} key={review.id} />)}

    </ul>
  );
}

export default ReviewList;
