import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_ROUTES } from '../../apollo/queries';
import { parseRoutes, ROUTE_COLUMNS } from '../../utils';

const Routes: FC = () => {
  const { data, loading } = useQuery<Query>(LIST_ROUTES);

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        rowKey="id"
        columns={ROUTE_COLUMNS}
        dataSource={parseRoutes(data?.routes)}
        loading={loading}
      />
    </>
  );
};

export default Routes;
