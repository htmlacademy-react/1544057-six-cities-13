import { Offer } from '../../../mocks/types/offers';
import { capitalizeFirstLetter } from '../../../utils';
import FavoriteButton from '../favorite-button/favorite-button';
import PremiumMark from '../premium-mark/premium-mark';
import RatingView from '../rating-view/rating-view';
import { CardImgSize, CardType } from './const';

type OfferCardProps = {
  offer: Offer;
  cardType: CardType;
}

export default function OfferCard({ cardType, offer }: OfferCardProps): React.JSX.Element {
  return (
    <article className={`${cardType}__card place-card`}>
      {offer.isPremium && <PremiumMark className={'place-card__mark'} />}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} {...CardImgSize[cardType]} alt="Place image" />
        </a>
      </div>
      <div className={`${cardType}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {<FavoriteButton isFavorite={offer.isFavorite} className={'place-card'} iconWidth={18} iconHeight={19} />}
        </div>

        <RatingView className={'place-card'} ratingValue={offer.rating} displayValue={false} />

        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}
