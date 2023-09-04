import { REVIEWS_MAX_COUNT } from '../../../../const';
import { ReviewType } from '../../../../types/reviews';
import { sortReviews } from '../../../../utils';
import ReviewView from '../review-view/review-view';

type ReviewListProps = {
  reviews: ReviewType[];
}

function ReviewList({ reviews }: ReviewListProps) {
  const filteredReviews = sortReviews(reviews).slice(0, REVIEWS_MAX_COUNT);
  return (
    <ul className="reviews__list">

      {filteredReviews.map((review) => <ReviewView review={review} key={review.id} />)}

    </ul>
  );
}

export default ReviewList;
