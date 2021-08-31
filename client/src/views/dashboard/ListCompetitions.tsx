import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_COMPETITIONS } from '../../apollo/queries';
import { COMPETITION_COLUMNS, parseCompetitions } from '../../utils';
import { TABLE_PAGINATION_CONFIG } from '../../constants';

const ListCompetitions: FC = () => {
  const { data, loading } = useQuery<Query>(LIST_COMPETITIONS);

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        rowKey="id"
        columns={COMPETITION_COLUMNS}
        dataSource={parseCompetitions(data?.competitions)}
        loading={loading}
        pagination={TABLE_PAGINATION_CONFIG}
      />
    </>
  );
};

export default ListCompetitions;
