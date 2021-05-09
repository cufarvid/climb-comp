import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Button, Card, Form, Input, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import {
  Competitor,
  Mutation,
  MutationScoreLeadArgs,
} from '../../types/__generated__';
import { Route } from '../../types/generated';
import { REGEXP, ROUTE } from '../../constants';
import { SCORE_LEAD } from '../../apollo/mutations/Score';
import { parseTimeString } from '../../utils';

interface Props {
  competitor: Competitor | undefined;
  route: Route | null | undefined;
}

const ScoreLead: FC<Props> = ({ competitor, route }: Props) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [score] = useMutation<Mutation, MutationScoreLeadArgs>(SCORE_LEAD, {
    onCompleted: ({ scoreLead }) => {
      if (scoreLead) {
        // Display response message or warning
        if (!scoreLead.warning) {
          message.success(scoreLead.message).then();
        } else {
          message.warning(`${scoreLead.message} ${scoreLead.warning}`).then();
        }
      }
      // Redirect to score route
      history.push(ROUTE.SCORE);
    },
    onError: (error) => message.error(error.message),
  });

  if (!competitor || !route) {
    history.push(ROUTE.SCORE);
    return null;
  }

  const fullName = `${competitor.firstName} ${competitor.lastName}`;

  const setScore = async (height: string, time: string): Promise<void> => {
    await score({
      variables: {
        data: {
          competitorId: competitor.id,
          routeId: route.id,
          score: height,
          time: parseTimeString(time),
        },
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
    >
      <Card.Meta
        title={fullName}
        description={`Category: ${competitor.category.name}`}
      />
      <br />
      <Form
        layout="inline"
        onFinish={({ height, time }) => void setScore(height, time)}
      >
        <Form.Item
          label="Height"
          name="height"
          rules={[
            {
              required: true,
              pattern: REGEXP.HEIGHT,
              message: 'Please input a valid height!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Time"
          name="time"
          rules={[
            {
              required: true,
              pattern: REGEXP.TIME,
              message: `Please input a time in 'mm:ss:SSS' format.`,
            },
          ]}
        >
          <Input defaultValue="00:00:000" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ScoreLead;
