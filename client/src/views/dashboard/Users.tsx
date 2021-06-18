import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query, QueryUsersArgs, User } from '../../types/__generated__';
import { UserRecord } from '../../types';
import { USER_COLUMNS } from '../../constants';
import { LIST_USERS } from '../../apollo/queries';

const Users: FC = () => {
  const { data, loading } = useQuery<Query, QueryUsersArgs>(LIST_USERS);

  const parseUsers = (users: User[] | undefined): UserRecord[] => {
    if (!users) return [];

    return users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      country: user.location?.country.name ?? '',
    }));
  };

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        columns={USER_COLUMNS}
        dataSource={parseUsers(data?.users)}
        loading={loading}
      />
    </>
  );
};

export default Users;
