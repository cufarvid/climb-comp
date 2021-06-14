import React, { FC, useEffect, useState } from 'react';
import { Button, Card, Divider, Form, InputNumber, message } from 'antd';
import { generatePath, Route, useHistory } from 'react-router-dom';
import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client';

import { ScoreBoulder } from '../index';
import { ROUTE } from '../../constants';
import {
  Competitor,
  Query,
  QueryGetCompetitorForScoringArgs,
} from '../../types/__generated__';
import ScoreLead from './ScoreLead';
import ScoreSpeed from './ScoreSpeed';
import { useCurrentUser } from '../../hooks';

const COMPETITOR_SCORING = gql`
  query GetCompetitorForScoring($data: FindStartListInput!) {
    getCompetitorForScoring(data: $data) {
      id
      firstName
      lastName
      category {
        name
      }
    }
  }
`;

const Score: FC = () => {
  const [competitor, setCompetitor] = useState<Competitor | undefined>();
  const [startNum, setStartNum] = useState(0);

  const [getCompetitor, { loading }] = useLazyQuery<
    Query,
    QueryGetCompetitorForScoringArgs
  >(COMPETITOR_SCORING, {
    onCompleted: ({ getCompetitorForScoring }) => {
      if (getCompetitorForScoring) setCompetitor(getCompetitorForScoring);
    },
    onError: (error) => message.error(error.message),
  });

  const { userInfo } = useCurrentUser();
  const history = useHistory();

  const onFinish = ({ startNumber }: { startNumber: number | undefined }) => {
    if (!startNumber || startNumber <= 0) return;
    if (!userInfo?.route?.competition?.id) return;

    // Starting number is the same, no need to fetch again
    if (startNumber === startNum && competitor) {
      openScoringForm();
      return;
    }

    // Fetch competitor data
    getCompetitor({
      variables: {
        data: { startNumber, competitionId: userInfo.route.competition.id },
      },
    });
    // Set starting number
    setStartNum(startNumber);
  };

  const openScoringForm = () => {
    if (competitor) {
      // Go to scoring form
      history.push(generatePath(ROUTE.SCORE_ID, { id: startNum }));
    }
  };

  const scoringForm = (): JSX.Element | undefined => {
    if (!userInfo?.route) return;

    switch (userInfo?.route.routeType) {
      case 'BOULDER':
        return <ScoreBoulder competitor={competitor} route={userInfo.route} />;
      case 'LEAD':
        return <ScoreLead competitor={competitor} route={userInfo.route} />;
      case 'SPEED':
        return <ScoreSpeed competitor={competitor} route={userInfo.route} />;
    }
  };

  useEffect(() => {
    openScoringForm();
  }, [competitor]);

  return (
    <>
      <Card title="Find competitor">
        <Form layout="inline" onFinish={onFinish}>
          <Form.Item label="Starting number" name="startNumber">
            <InputNumber
              min={1}
              max={100000}
              formatter={(value) => Math.trunc(value || 0).toString()}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Route path={ROUTE.SCORE_ID} render={scoringForm} />
    </>
  );
};

export default Score;
