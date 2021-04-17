import React, { FC } from 'react';
import { gql } from '@apollo/client/core';
import { UserDescription } from '../index';
import { useQuery, useReactiveVar } from '@apollo/client';
import { loggedUserId } from '../../apollo/cache';
import { Alert, Button, Row, Spin } from 'antd';

const USER_INFO = gql`
  query UserInfo($publicId: String!) {
    user(where: { publicId: $publicId }) {
      email
      firstName
      lastName
      role
      location {
        region {
          name
        }
        country {
          name
        }
      }
    }
  }
`;

const UserInfo: FC = () => {
  const userId = useReactiveVar(loggedUserId);
  const { data, loading, error } = useQuery(USER_INFO, {
    variables: { publicId: userId },
  });

  if (loading)
    return (
      <Row justify="center">
        <Spin />
      </Row>
    );

  if (error || !data?.user)
    return (
      <Alert
        message="Error"
        description="Error fetching user information"
        type="error"
      />
    );

  return (
    <>
      <UserDescription user={data.user} />
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
