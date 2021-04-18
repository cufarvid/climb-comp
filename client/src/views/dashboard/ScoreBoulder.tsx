import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
import { BoldOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { Competitor } from '../../types/__generated__';
import { ROUTE } from '../../constants';

interface Props {
  competitor: Competitor | undefined;
}

const ScoreBoulder: FC<Props> = ({ competitor }: Props) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  if (!competitor) {
    history.push(ROUTE.SCORE);
    return null;
  }

  const fullName = `${competitor.firstName} ${competitor.lastName}`;

  return (
    <Card
      title={id}
      extra={
        <Button onClick={() => history.push(ROUTE.SCORE)}>
          <CloseOutlined key="close" />
        </Button>
      }
      actions={[
        <CloseOutlined key="none" />,
        <BoldOutlined key="bonus" />,
        <CheckOutlined key="top" />,
      ]}
    >
      <Card.Meta
        title={fullName}
        description={`Category: ${competitor.category.name}`}
      />
    </Card>
  );
};

export default ScoreBoulder;
