import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Descriptions, Empty, message, Radio, Spin } from 'antd';

import { Competition, Query } from '../../types/__generated__';
import { COMPETITION } from '../../apollo/queries/Competition';
import { PageSection } from '../../components';
import { formatDateTime } from '../../utils';

const CompetitionDetail: FC = () => {
  const [competition, setCompetition] = useState<Competition>();

  // Get competition ID from query params
  const { id } = useParams<{ id: string }>();

  const { loading } = useQuery<Query>(COMPETITION, {
    variables: { id: +id },
    onCompleted: ({ competition }) => {
      if (competition) setCompetition(competition);
    },
    onError: () => message.error('Error fetching competition data'),
  });

  if (!competition) return <Empty />;

  return (
    <PageSection title="Competition details">
      {loading ?? <Spin />}
      <div>
        <Descriptions
          title={competition.name}
          layout="vertical"
          extra={
            <Radio.Group>
              <Radio.Button type="primary" disabled>
                Registration
              </Radio.Button>
              <Radio.Button type="primary" disabled>
                Start List
              </Radio.Button>
              <Radio.Button
                type="primary"
                disabled={competition.results.length === 0}
              >
                Results
              </Radio.Button>
            </Radio.Group>
          }
        >
          <Descriptions.Item label="Start date & time">
            <b>{formatDateTime(competition.startDate)}</b>
          </Descriptions.Item>
          <Descriptions.Item label="End date & time">
            <b>{formatDateTime(competition.endDate)}</b>
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <b>{competition.compType.name}</b>
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            <b>{competition.address}</b>
          </Descriptions.Item>
          <Descriptions.Item label="Region">
            <b>{competition.region?.name ?? ''}</b>
          </Descriptions.Item>
          <Descriptions.Item label="Country">
            <b>{competition.country?.name ?? ''}</b>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </PageSection>
  );
};

export default CompetitionDetail;
