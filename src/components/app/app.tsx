import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from './const';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} >
          <Route
            index
            element={<MainPage offersCount={offersCount} />}
          />
    <MainPage offersCount={offersCount} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
