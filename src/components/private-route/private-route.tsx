import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.JSX.Element;
}

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): React.JSX.Element {

  const privateComponent = authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
  return (
    privateComponent
  );
}

export default PrivateRoute;
