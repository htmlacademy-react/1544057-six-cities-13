import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { LatLng, Map, TileLayer } from 'leaflet';

import { CityType } from '../types/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityType): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const { name, location } = city;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    if (mapRef.current !== null) {
      if (map) {
        map.setView(new LatLng(location.latitude, location.longitude), location.zoom);
      }
    }
  }, [mapRef, location, name, map]);
  return map;
}

export default useMap;
