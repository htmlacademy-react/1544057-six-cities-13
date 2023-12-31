import { useState } from 'react';

import { CardType } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import {
  fetchExtendedOfferAction,
  fetchNearOffersAction,
  fetchReviewsAction,
} from '../../../store/api-actions';
import { OfferType } from '../../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: OfferType[];
  cardType: CardType;
  onActiveOffer?: (id: string) => void;
}

function OffersList({ offers, cardType, onActiveOffer }: OffersListProps): React.JSX.Element {
  const [, setActiveCard] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  return (
    <div className={`${cardType}__places-list places__list`}>
      {
        offers.map((offer) => (
          <OfferCard
            cardType={cardType}
            key={offer.id}
            offer={offer}
            onMouseOver={
              () => {
                setActiveCard(offer.id);
                if (onActiveOffer) {
                  onActiveOffer(offer.id);
                }
              }
            }
            onClick={() => {
              dispatch(fetchExtendedOfferAction(offer.id));
              dispatch(fetchReviewsAction(offer.id));
              dispatch(fetchNearOffersAction(offer.id));
            }}
          />
        ))
      }
    </div>
  );
}

export default OffersList;

