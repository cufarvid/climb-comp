import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';
import styled from '@emotion/styled';

import { Competition } from '../types/__generated__';
import { formatDateTime } from '../utils';
import { ROUTE } from '../constants';

interface CompetitionCardProps {
  competition: Competition;
  showExtra?: boolean;
}

const CompetitionCard: FC<CompetitionCardProps> = ({
  competition,
  showExtra = true,
}: CompetitionCardProps) => {
  const { id, name, description, startDate, compType, address } = competition;

  const cardTitle: ReactNode = (
    <span>
      <b>{name}</b> - {compType.name}
    </span>
  );

  const hyperExtra: ReactNode = showExtra ? (
    <Link to={`${ROUTE.COMPETITIONS}/${id}`}>More</Link>
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
