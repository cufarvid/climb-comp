import React, { FC, useEffect, useState } from 'react';
import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client';
import { message, Select } from 'antd';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

import { Competition, Category, Query } from '../types/__generated__';
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

const LIST_CATEGORIES = gql`
  query {
    categories {
      id
      name
      description
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
  const [competition, setCompetition] = useState<Competition>();
  const [year, setYear] = useState(YEAR_DATA[0]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>();

  const [getCompetitions, { loading: loadingComp }] = useLazyQuery<
    Query,
    Competition
  >(LIST_COMPETITIONS, {
    onCompleted: ({ competitions }) => {
      if (competitions) setCompsYearly(getCompsYearly(competitions));
    },
    onError: () => message.error('Error fetching competition info'),
  });

  const [getCategories] = useLazyQuery<Query, Category>(LIST_CATEGORIES, {
    onCompleted: ({ categories }) => {
      if (categories) setCategories(categories);
    },
    onError: () => message.error('Error fetching competition info'),
  });

  const handleYearChange = (value: number): void => {
    setYear(value);
    setCompetition(
      compsYearly[value]?.length ? compsYearly[value][0] : undefined,
    );
  };

  const handleCompChange = (value: number): void => {
    if (compsYearly[year]) setCompetition(compsYearly[year][value]);
  };

  const title = `Results - (${year}) ${competition?.name ?? ''}`.trim();

  useEffect(() => {
    getCompetitions();
    getCategories();
  }, []);

  return (
    <div>
      <PageSection title={title}>
        <StyledDiv>
          <Select
            defaultValue={year}
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
            value={competition?.name}
            onChange={(value) => handleCompChange(+value)}
            loading={loadingComp}
            placeholder="Competition"
          >
            {compsYearly[year]?.map((comp, index) => (
              <Select.Option key={comp.id} value={index}>
                {comp.name}
              </Select.Option>
            ))}
          </Select>
          <Select
            value={category?.name}
            onChange={(value) => setCategory(categories[+value])}
            placeholder="Category"
          >
            {categories?.map((cat, index) => (
              <Select.Option key={cat.id} value={index}>
                {cat.name}
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
