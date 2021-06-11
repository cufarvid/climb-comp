import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTE } from '../constants';
import {
  CompetitionDetail,
  Competitions,
  Dashboard,
  Home,
  Results,
  ResultsCompFinal,
  ResultsCompLive,
} from '../views';

const AppRoutes: FC = () => {
  return (
    <>
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.COMPETITIONS} component={Competitions} />
      <Route path={ROUTE.COMPETITIONS_ID} component={CompetitionDetail} />
      <Switch>
        <Route exact path={ROUTE.RESULTS} component={Results} />
        <Route path={ROUTE.RESULTS_LIVE} component={ResultsCompLive} />
        <Route path={ROUTE.RESULTS_ID} component={ResultsCompFinal} />
      </Switch>
      <Route path={ROUTE.DASHBOARD} component={Dashboard} />
    </>
  );
};

export default AppRoutes;
