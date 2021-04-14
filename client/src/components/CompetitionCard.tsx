import React, { FC, ReactNode } from 'react';
import { Card, Col } from 'antd';
import styled from '@emotion/styled';

interface CompetitionCardProps {
  title: string;
  compType: string;
  startDate: Date;
  location: string;
  description?: string;
  extra?: { text?: string; path: string };
}

const CompetitionCard: FC<CompetitionCardProps> = ({
  title,
  compType,
  startDate,
  location,
  description,
  extra,
}: CompetitionCardProps) => {
  const cardTitle: ReactNode = (
    <span>
      <b>{title}</b> - {compType}
    </span>
  );

  const hyperExtra: ReactNode = extra ? (
    <a href={extra.path}>{extra.text || 'More'}</a>
  ) : null;

  return (
    <Col>
      <StyledCard title={cardTitle} extra={hyperExtra}>
        {description && <p>{description}</p>}
        <p>{startDate.toLocaleString()}</p>
        <p>{location}</p>
      </StyledCard>
    </Col>
  );
};

export default CompetitionCard;

const StyledCard = styled(Card)`
  width: 300px;
  margin: 10px;
`;
