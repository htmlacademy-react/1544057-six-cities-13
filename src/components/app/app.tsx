import MainPage from '../../pages/main-page/main-page';

type AppMainProps = {
  offersCount: number;
}

function App({ offersCount }: AppMainProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}

export default App;
