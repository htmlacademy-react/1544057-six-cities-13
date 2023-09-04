import { FormEvent, useRef } from 'react';

import LocationsItem from '../../components/locations-item/locations-item';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';

export default function LoginPage(): React.JSX.Element {
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.activeCity);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (emailInput.current && passwordInput.current) {
      dispatch(
        loginAction({
          email: emailInput.current.value,
          password: passwordInput.current.value,
        })
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">

                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailInput}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />

              </div>
              <div className="login__input-wrapper form__input-wrapper">

                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordInput}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />

              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            {<LocationsItem nameCity={currentCity} path={AppRoute.Main} />}
          </section>
        </div>
      </main>
    </div>
  );
}
