import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_COMPETITIONS } from '../../apollo/queries';
import { COMPETITION_COLUMNS, parseCompetitions } from '../../utils';

const ListCompetitions: FC = () => {
  const { data, loading } = useQuery<Query>(LIST_COMPETITIONS);

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        columns={COMPETITION_COLUMNS}
        dataSource={parseCompetitions(data?.competitions)}
        loading={loading}
      />
    </>
  );
};

export default ListCompetitions;
