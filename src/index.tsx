import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import { extendedOfferMap, offers } from './mocks/offers';
import reviewsMap from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} extendedOfferMap={extendedOfferMap} reviewsMap={reviewsMap} />
  </React.StrictMode>
);
