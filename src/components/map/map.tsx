import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';

import { Icon, layerGroup, Marker } from 'leaflet';

import { UrlMarker } from '../../const';
import useMap from '../../hooks/use-map';
import { Offer } from '../../mocks/types/offers';

type MapProps = {
  offers: Offer[];
  activeCardId: string | null;
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

function Map({ offers, activeCardId }: MapProps): JSX.Element {
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

        marker
          .setIcon(
            activeCardId && offer.id === activeCardId
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  return (
    <section className="cities__map map" style={{ height: '500px' }} ref={mapRef}></section>
  );
}

export default Map;
