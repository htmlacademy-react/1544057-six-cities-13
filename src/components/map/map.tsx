import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';

import cn from 'classnames';
import { Icon, layerGroup, Marker } from 'leaflet';

import { CardType, UrlMarker } from '../../const';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offers';

type MapProps = {
  offers: Offer[];
  activeCardId: string | null;
  type: CardType;
  isInteractive?: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, activeCardId, type, isInteractive = false }: MapProps): JSX.Element {
  const { city } = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        const interactiveCustomIcon = activeCardId && offer.id === activeCardId
          ? currentCustomIcon
          : defaultCustomIcon;

        marker
          .setIcon(
            isInteractive ? interactiveCustomIcon : defaultCustomIcon
          ).addTo(markerLayer);

      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId, isInteractive]);

  return (
    <section className={cn('map',
      { 'offer__map': type === CardType.NearPlaces },
      { 'cities__map': type === CardType.Cities })} style={{ height: '500px' }} ref={mapRef}
    >
    </section >
  );
}

export default Map;
