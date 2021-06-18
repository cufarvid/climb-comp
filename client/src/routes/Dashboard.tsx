import React, { FC, useContext } from 'react';
import { Route } from 'react-router-dom';
import { ROUTE } from '../constants';
import {
  Clubs,
  Competitors,
  ListCompetitions,
  Routes,
  Score,
  Seasons,
  Users,
} from '../views';
import { isAdministrator } from '../utils';
import { DashboardContext } from '../context';

const DashboardRoutes: FC = () => {
  const { userInfo } = useContext(DashboardContext);

  return (
    <>
      {/*Routes*/}
      <Route path={ROUTE.SCORE} component={Score} />
      <Route path={ROUTE.D_ROUTES} component={Routes} />
      {isAdministrator(userInfo?.user) && (
        <>
          <Route path={ROUTE.D_USERS} component={Users} />
          <Route path={ROUTE.D_COMPETITIONS} component={ListCompetitions} />
          <Route path={ROUTE.D_SEASONS} component={Seasons} />
          <Route path={ROUTE.D_COMPETITORS} component={Competitors} />
          <Route path={ROUTE.D_CLUBS} component={Clubs} />
        </>
      )}
    </>
  );
};

export default DashboardRoutes;
