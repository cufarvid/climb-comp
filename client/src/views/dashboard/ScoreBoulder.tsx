import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Button, Card, message, Tooltip } from 'antd';
import {
  BorderOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import {
  Competitor,
  Mutation,
  MutationScoreBoulderArgs,
} from '../../types/__generated__';
import { Route } from '../../types/generated';
import { ScoreType } from '../../types';
import { SCORE_BOULDER } from '../../apollo/mutations';
import { ROUTE } from '../../constants';

interface Props {
  competitor: Competitor | undefined;
  route: Route | null | undefined;
}

const ScoreBoulder: FC<Props> = ({ competitor, route }: Props) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [score] = useMutation<Mutation, MutationScoreBoulderArgs>(
    SCORE_BOULDER,
    {
      onCompleted: ({ scoreBoulder }) => {
        if (scoreBoulder) {
          // Display response message or warning
          if (!scoreBoulder.warning) {
            message.success(scoreBoulder.message).then();
          } else {
            message
              .warning(`${scoreBoulder.message} ${scoreBoulder.warning}`)
              .then();
          }
        }
        // Redirect to score route
        history.push(ROUTE.SCORE);
      },
      onError: (error) => message.error(error.message),
    },
  );

  if (!competitor || !route) {
    history.push(ROUTE.SCORE);
    return null;
  }

  const fullName = `${competitor.firstName} ${competitor.lastName}`;

  const setScore = async (type: ScoreType): Promise<void> => {
    await score({
      variables: {
        data: { competitorId: competitor.id, routeId: route.id, score: type },
      },
    });
  };

  return (
    <Card
      title={id}
      extra={
        <Button onClick={() => history.push(ROUTE.SCORE)}>
          <CloseOutlined key="close" />
        </Button>
      }
      actions={[
        <Tooltip title="Attempt" placement="bottom" key="attempt">
          <CloseOutlined onClick={() => setScore('attempt')} />
        </Tooltip>,
        <Tooltip title="Zone" placement="bottom" key="zone">
          <BorderOutlined onClick={() => setScore('zone')} />
        </Tooltip>,
        <Tooltip title="Top" placement="bottom" key="top">
          <CheckOutlined onClick={() => setScore('top')} />
        </Tooltip>,
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
