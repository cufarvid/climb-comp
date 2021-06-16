import React, { FC, useContext } from 'react';
import { Route } from 'react-router-dom';
import { ROUTE } from '../constants';
import { EditCompetitions, Routes, Score, Seasons, Users } from '../views';
import { isAdministrator } from '../utils';
import { DashboardContext } from '../context';

const DashboardRoutes: FC = () => {
  const { userInfo } = useContext(DashboardContext);

  return (
    <>
      {/*Routes*/}
      <Route path={ROUTE.SCORE} component={Score} />
      <Route path={ROUTE.ROUTES} component={Routes} />
      {isAdministrator(userInfo?.user) && (
        <>
          <Route path={ROUTE.USERS} component={Users} />
          <Route path={ROUTE.DASH_COMPS} component={EditCompetitions} />
          <Route path={ROUTE.SEASONS} component={Seasons} />
        </>
      )}
    </>
  );
};

export default DashboardRoutes;
