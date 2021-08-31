import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_COMPETITORS } from '../../apollo/queries';
import { COMPETITOR_COLUMNS, parseCompetitors } from '../../utils';
import { TABLE_PAGINATION_CONFIG } from '../../constants';

const Competitors: FC = () => {
  const { data, loading } = useQuery<Query>(LIST_COMPETITORS);

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        rowKey="id"
        columns={COMPETITOR_COLUMNS}
        dataSource={parseCompetitors(data?.competitors)}
        loading={loading}
        pagination={TABLE_PAGINATION_CONFIG}
      />
    </>
  );
};

export default Competitors;
