import React, { FC } from 'react';
import { Button, Table } from 'antd';

const Clubs: FC = () => {
  return (
    <>
      <Button type="primary" className="mb-1">
        Add new
      </Button>
      <Table columns={[]} dataSource={[]} />
    </>
  );
};

export default Clubs;
