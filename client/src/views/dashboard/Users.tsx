import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query, QueryUsersArgs } from '../../types/__generated__';
import { LIST_USERS } from '../../apollo/queries';
import { parseUsers, USER_COLUMNS } from '../../utils';

const Users: FC = () => {
  const { data, loading } = useQuery<Query, QueryUsersArgs>(LIST_USERS);

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
