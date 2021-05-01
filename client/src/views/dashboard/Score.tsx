import React, { FC, useEffect, useState } from 'react';
import { Button, Card, Divider, Form, InputNumber, message } from 'antd';
import { generatePath, Route, useHistory } from 'react-router-dom';
import { gql } from '@apollo/client/core';
import { useLazyQuery, useReactiveVar } from '@apollo/client';

import { ScoreBoulder } from '../index';
import { ROUTE } from '../../constants';
import { loggedUserInfo } from '../../apollo/cache';
import {
  Competitor,
  Query,
  QueryGetCompetitorForScoringArgs,
} from '../../types/__generated__';

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

  const userInfo = useReactiveVar(loggedUserInfo);
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

  useEffect(() => {
    openScoringForm();
  }, [competitor]);

  return (
    <>
      <Card title="Find competitor">
        <Form layout="inline" onFinish={onFinish}>
          <Form.Item label="Starting number" name="startNumber">
            <InputNumber min={1} max={100000} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Route
        path={ROUTE.SCORE_ID}
        render={() => (
          <ScoreBoulder competitor={competitor} route={userInfo?.route} />
        )}
      />
    </>
  );
};

export default Score;
