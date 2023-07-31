import './not-found-page.css';

import Logo from '../../components/logo/logo';

export default function NotFoundPage(): React.JSX.Element {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page-main--error container">
        <h1 className="page__error-code" > 404 </h1>

        <p className="page__error-message">The page you’re looking for does not exist.</p>
      </main>
    </div>
  );

}
