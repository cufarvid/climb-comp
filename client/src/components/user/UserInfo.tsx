import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Alert, Row, Spin } from 'antd';

import { UserDescription } from '../index';
import UserRouteDescription from './UserRouteDescription';
import { USER_INFO } from '../../apollo/queries';
import { Query } from '../../types/__generated__';

const UserInfo: FC = () => {
  const { data, loading, error } = useQuery<Query>(USER_INFO);

  if (loading)
    return (
      <Row justify="center">
        <Spin />
      </Row>
    );

  if (error || !data?.contextUserInfo.user)
    return (
      <Alert
        message="Error"
        description="Error fetching user information"
        type="error"
      />
    );

  const { user, route } = data.contextUserInfo;

  return (
    <>
      <UserDescription user={user} />

      <hr />
      <h3>Active route</h3>
      {route ? (
        <UserRouteDescription route={route} />
      ) : (
        <div>No active route</div>
      )}
    </>
  );
};

export default UserInfo;
