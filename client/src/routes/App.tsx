import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { ROUTE } from '../constants';
import {
  CompetitionDetail,
  Competitions,
  Dashboard,
  Home,
  Results,
} from '../views';

const AppRoutes: FC = () => {
  return (
    <>
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.COMPETITIONS} component={Competitions} />
      <Route path={ROUTE.COMPETITIONS_ID} component={CompetitionDetail} />
      <Route path={ROUTE.RESULTS} component={Results} />
      <Route path={ROUTE.DASHBOARD} component={Dashboard} />
    </>
  );
};

export default AppRoutes;
