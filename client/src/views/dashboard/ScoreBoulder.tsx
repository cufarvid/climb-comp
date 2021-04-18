import React, { FC } from 'react';
import { Card } from 'antd';
import { BoldOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const ScoreBoulder: FC = () => {
  return (
    <Card
      actions={[
        <CloseOutlined key="none" />,
        <BoldOutlined key="bonus" />,
        <CheckOutlined key="top" />,
      ]}
    >
      <Card.Meta
        title={'Firstname Lastname'}
        description={'Starting number: 1001'}
      />
    </Card>
  );
};

export default ScoreBoulder;
