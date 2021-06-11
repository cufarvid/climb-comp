import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';
import styled from '@emotion/styled';

import { Competition } from '../types/__generated__';
import { formatDateTime } from '../utils';

interface CompetitionCardProps {
  competition: Competition;
  extra?: { text?: string; path: string };
}

const CompetitionCard: FC<CompetitionCardProps> = ({
  competition,
  extra,
}: CompetitionCardProps) => {
  const { name, description, startDate, compType, address } = competition;

  const cardTitle: ReactNode = (
    <span>
      <b>{name}</b> - {compType.name}
    </span>
  );

  const hyperExtra: ReactNode = extra ? (
    <Link to={extra.path}>{extra.text || 'More'}</Link>
  ) : null;

  return (
    <Col>
      <StyledCard title={cardTitle} extra={hyperExtra}>
        {description && <p>{description}</p>}
        <p>{formatDateTime(startDate)}</p>
        <p>{address}</p>
      </StyledCard>
    </Col>
  );
};

export default CompetitionCard;

const StyledCard = styled(Card)`
  width: 300px;
  margin: 10px;
`;
