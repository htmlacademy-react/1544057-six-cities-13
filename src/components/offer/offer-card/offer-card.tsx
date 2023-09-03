import { MouseEventHandler } from 'react';

import { generatePath, Link } from 'react-router-dom';

import { AppRoute, CardType } from '../../../const';
import { OfferType } from '../../../types/offers';
import { capitalizeFirstLetter } from '../../../utils';
import FavoriteButton from '../favorite-button/favorite-button';
import PremiumMark from '../premium-mark/premium-mark';
import RatingView from '../rating-view/rating-view';
import { CardImgSize } from './const';

type OfferCardProps = {
  offer: OfferType;
  cardType: CardType;
  onMouseOver?: MouseEventHandler<HTMLElement>;
}

export default function OfferCard({ cardType, offer, onMouseOver }: OfferCardProps): React.JSX.Element {
  return (
    <article className={`${cardType}__card place-card`} onMouseOver={onMouseOver}>
      {offer.isPremium && <PremiumMark className={'place-card__mark'} />}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
          <img className="place-card__image" src={offer.previewImage} {...CardImgSize[cardType]} alt="Place image" />
        </Link>
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
          <Link to={generatePath(AppRoute.Offer, { id: offer.id })} >{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}
