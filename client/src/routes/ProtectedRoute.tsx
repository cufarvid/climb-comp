import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { ROUTE } from '../constants';
import { localStorageToken } from '../utils';

type ProtectedRouteProps = {
  redirectPath?: string;
} & RouteProps;

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  redirectPath = ROUTE.UNAUTHORIZED,
  ...routeProps
}: ProtectedRouteProps) => {
  /**
   * Returns jwt token decode status
   */
  const isAuthenticated = (): boolean => {
    try {
      jwtDecode(localStorageToken());
    } catch (e) {
      return false;
    }

    return true;
  };

  return isAuthenticated() ? (
    <Route {...routeProps} />
  ) : (
    <Redirect to={{ pathname: redirectPath }} />
  );
};

export default ProtectedRoute;
