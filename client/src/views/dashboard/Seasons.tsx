import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_SEASONS } from '../../apollo/queries';
import { parseSeasons, SEASON_COLUMNS } from '../../utils';

const Seasons: FC = () => {
  const { data, loading } = useQuery<Query>(LIST_SEASONS);

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        rowKey="id"
        columns={SEASON_COLUMNS}
        dataSource={parseSeasons(data?.seasons)}
        loading={loading}
      />
    </>
  );
};

export default Seasons;
