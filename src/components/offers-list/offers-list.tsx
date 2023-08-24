import { useState } from 'react';

import { Offer } from '../../mocks/types/offers';
import { CardType } from '../offer/offer-card/const';
import OfferCard from '../offer/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  cardType: CardType;
}

function OffersList({ offers, cardType }: OffersListProps): React.JSX.Element {
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
              () => setActiveCard(offer.id)
            }
          />
        ))
      }
    </div>
  );
}

export default OffersList;

