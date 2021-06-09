import React, { FC, useEffect, useState } from 'react';
import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client';
import { message, Select } from 'antd';
import dayjs from 'dayjs';

import { Competition, Query } from '../types/__generated__';
import { LiveResult } from '../components';
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

  const handleYearChange = (value: number) => {
    setYearSelected(value);
    setCompSelected(
      compsYearly[value]?.length ? compsYearly[value][0] : undefined,
    );
  };

  useEffect(() => {
    getCompetitions();
  }, []);

  return (
    <div>
      <div>Results</div>
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
        loading={loading}
        placeholder="Competition"
      >
        {compsYearly[yearSelected]?.map((comp) => (
          <Select.Option key={comp.id} value={comp.id}>
            {comp.name}
          </Select.Option>
        ))}
      </Select>
      <LiveResult />
    </div>
  );
};

export default Results;
