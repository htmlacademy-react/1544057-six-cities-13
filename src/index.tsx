import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { extendedOfferMap, offers } from './mocks/offers';
import reviewsMap from './mocks/reviews';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        offers={offers}
        reviewsMap={reviewsMap}
        extendedOfferMap={extendedOfferMap}
      />
    </React.StrictMode>
  </Provider>
);
