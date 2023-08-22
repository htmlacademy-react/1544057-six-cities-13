import { Offer } from '../../mocks/types/offers';
import FavoriteButton from '../favorite-button/favorite-button';
import PremiumMark from '../premium-mark/premium-mark';
import { CardImgSize, CardType } from './const';

type OfferCardProps = {
  offer: Offer;
  cardType: CardType;
}

export default function OfferCard({ cardType, offer }: OfferCardProps): React.JSX.Element {
  const MAX_RATING = 5;
  const roundedRating = Math.floor(offer.rating);
  const rating = `${(roundedRating / MAX_RATING) * 100}%`;

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
          {<FavoriteButton isFavorite={offer.isFavorite} className={'place-card__bookmark-button'} iconWidth={18} iconHeight={19} />}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
