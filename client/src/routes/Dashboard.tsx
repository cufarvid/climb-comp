import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { ROUTE } from '../constants';
import { Routes, Score } from '../views';

const DashboardRoutes: FC = () => {
  return (
    <>
      {/*Routes*/}
      <Route path={ROUTE.SCORE} component={Score} />
      <Route path={ROUTE.ROUTES} component={Routes} />
    </>
  );
};

export default DashboardRoutes;
