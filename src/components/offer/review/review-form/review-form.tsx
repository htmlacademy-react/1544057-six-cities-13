import { ChangeEvent, FormEvent, Fragment, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { sendReviewAction } from '../../../../store/api-actions';
import { ReviewDataType } from '../../../../types/reviews';
import { Rating, ReviewTextLength } from './const';

type FormReviewProps = {
  offerId: string;
};

const EMPTY_FORM = {
  rating: 0,
  comment: '',
};

function ReviewForm({ offerId }: FormReviewProps): React.JSX.Element {
  const [review, setReview] = useState<ReviewDataType>(EMPTY_FORM);

  const dispatch = useAppDispatch();
  const isSending = useAppSelector((state) => state.isReviewSending);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => setReview({ ...review, comment: evt.target.value });
  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>): void => setReview({ ...review, rating: Number(evt.target.value) });
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (review) {
      dispatch(sendReviewAction({ id: offerId, review }))
        .then(({ payload }) => {

          if (payload) {
            setReview(EMPTY_FORM);
          }
        });
    }

  };

  const isSubmitAvailable = (): boolean => !!review?.rating && review.comment.length >= ReviewTextLength.Min;

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {Object.entries(Rating)
          .reverse()
          .map(([numberKey, humanKey]) => (
            <Fragment key={`rating-${numberKey}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={numberKey}
                id={`${numberKey}-stars`}
                type="radio"
                onChange={handleRatingChange}
                disabled={isSending}
                checked={review.rating === Number(numberKey)}
              />
              <label
                htmlFor={`${numberKey}-stars`}
                className="reviews__rating-label form__rating-label"
                title={humanKey}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))}
      </div>

      <textarea
        onChange={handleCommentChange}
        value={review?.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={ReviewTextLength.Min}
        maxLength={ReviewTextLength.Max}
        disabled={isSending}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="submit"
          disabled={!isSubmitAvailable() || isSending}
        >
          {isSending ? 'Saving...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;


