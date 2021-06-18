import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTE } from '../constants';
import {
  CompetitionDetail,
  ListCompetitions,
  Dashboard,
  Home,
  Results,
  ResultsCompFinal,
  ResultsCompLive,
} from '../views';
import { ProtectedRoute } from './index';
import { Unauthorized } from '../components';

const AppRoutes: FC = () => {
  return (
    <>
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.COMPETITIONS} component={ListCompetitions} />
      <Route path={ROUTE.COMPETITIONS_ID} component={CompetitionDetail} />
      <Switch>
        <Route exact path={ROUTE.RESULTS} component={Results} />
        <Route path={ROUTE.RESULTS_LIVE} component={ResultsCompLive} />
        <Route path={ROUTE.RESULTS_ID} component={ResultsCompFinal} />
      </Switch>
      <ProtectedRoute path={ROUTE.DASHBOARD} component={Dashboard} />

      <Route path={ROUTE.UNAUTHORIZED} component={Unauthorized} />
    </>
  );
};

export default AppRoutes;
