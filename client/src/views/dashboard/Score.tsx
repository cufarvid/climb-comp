import React, { FC, memo } from 'react';
import { Card, Input } from 'antd';

const Score: FC = () => {
  return (
    <Card title="Enter a starting number">
      <Input.Search placeholder="Starting number" type="number" allowClear />
    </Card>
  );
};

export default memo(Score);
