import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_CLUBS } from '../../apollo/queries';
import { CLUB_COLUMNS, parseClubs } from '../../utils';

const Clubs: FC = () => {
  const { data, loading } = useQuery<Query>(LIST_CLUBS);

  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table
        columns={CLUB_COLUMNS}
        dataSource={parseClubs(data?.clubs)}
        loading={loading}
      />
    </>
  );
};

export default Clubs;
