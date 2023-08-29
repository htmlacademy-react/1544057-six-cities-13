import { useState } from 'react';

import { CardType } from '../../../const';
import { Offer } from '../../../mocks/types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  cardType: CardType;
  onActiveOffer?: (id: string) => void;
}

function OffersList({ offers, cardType, onActiveOffer }: OffersListProps): React.JSX.Element {
  const [, setActiveCard] = useState<null | string>(null);
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
          />
        ))
      }
    </div>
  );
}

export default OffersList;

