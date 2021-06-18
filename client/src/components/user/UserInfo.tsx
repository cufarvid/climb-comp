import React, { FC } from 'react';
import { Alert, Row, Spin } from 'antd';

import { UserDescription } from '../index';
import UserRouteDescription from './UserRouteDescription';
import { useCurrentUser } from '../../hooks';

const UserInfo: FC = () => {
  const { userInfo, loading, error } = useCurrentUser();

  if (loading)
    return (
      <Row justify="center">
        <Spin />
      </Row>
    );

  if (error || !userInfo?.user)
    return (
      <Alert
        message="Error"
        description="Error fetching user information"
        type="error"
      />
    );

  return (
    <>
      <UserDescription user={userInfo.user} />

      <hr />
      <h3>Active route</h3>
      {userInfo.route ? (
        <UserRouteDescription route={userInfo.route} />
      ) : (
        <div>No active route</div>
      )}
    </>
  );
};

export default UserInfo;
