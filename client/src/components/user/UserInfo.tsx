import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Alert, Button, Row, Spin } from 'antd';

import { UserDescription } from '../index';
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

  return (
    <>
      <UserDescription user={data.contextUserInfo.user} />
      <br />
      <Row justify="space-around">
        <Button type="primary" disabled>
          Edit
        </Button>
      </Row>
    </>
  );
};

export default UserInfo;
