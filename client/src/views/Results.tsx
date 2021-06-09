import React, { FC, useEffect, useState } from 'react';
import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client';
import { message, Select } from 'antd';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

import { Competition, Query } from '../types/__generated__';
import { LiveResult, PageSection } from '../components';
import { DictionaryOf } from '../types';

const YEAR_DATA = [2020, 2021];

const LIST_COMPETITIONS = gql`
  query {
    competitions(orderBy: { startDate: asc }) {
      id
      name
      startDate
    }
  }
`;

/**
 * Returns competitions grouped by year
 * @param comps Competitions array
 */
const getCompsYearly = (comps: Competition[]): DictionaryOf<Competition[]> => {
  const yearly: DictionaryOf<Competition[]> = {};

  comps.forEach((comp) => {
    const year = dayjs(comp.startDate).year();

    if (!yearly[year]) yearly[year] = [comp];
    else yearly[year].push(comp);
  });

  return yearly;
};

const Results: FC = () => {
  const [compsYearly, setCompsYearly] = useState<DictionaryOf<Competition[]>>(
    {},
  );
  const [compSelected, setCompSelected] = useState<Competition>();
  const [yearSelected, setYearSelected] = useState(YEAR_DATA[0]);

  const [getCompetitions, { loading }] = useLazyQuery<Query, Competition>(
    LIST_COMPETITIONS,
    {
      onCompleted: ({ competitions }) => {
        if (competitions) setCompsYearly(getCompsYearly(competitions));
      },
      onError: () => message.error('Error fetching competition info'),
    },
  );

  const handleYearChange = (value: number): void => {
    setYearSelected(value);
    setCompSelected(
      compsYearly[value]?.length ? compsYearly[value][0] : undefined,
    );
  };

  const handleCompChange = (value: number): void => {
    if (compsYearly[yearSelected])
      setCompSelected(compsYearly[yearSelected][value]);
  };

  const title = `Results - (${yearSelected}) ${
    compSelected?.name ?? ''
  }`.trim();

  useEffect(() => {
    getCompetitions();
  }, []);

  return (
    <div>
      <PageSection title={title}>
        <StyledDiv>
          <Select
            defaultValue={yearSelected}
            onChange={handleYearChange}
            placeholder="Year"
          >
            {YEAR_DATA.map((year) => (
              <Select.Option key={year} value={year}>
                {year}
              </Select.Option>
            ))}
          </Select>
          <Select
            value={compSelected?.name}
            onChange={(value) => handleCompChange(+value)}
            loading={loading}
            placeholder="Competition"
          >
            {compsYearly[yearSelected]?.map((comp, index) => (
              <Select.Option key={comp.id} value={index}>
                {comp.name}
              </Select.Option>
            ))}
          </Select>
        </StyledDiv>
      </PageSection>
      <LiveResult />
      <LiveResult />
    </div>
  );
};

export default Results;

/*
 * Styled components
 */
const StyledDiv = styled('div')`
  width: 100%;

  .ant-select {
    margin-right: 20px;
  }
`;
