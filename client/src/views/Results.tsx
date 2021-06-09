import React, { FC, useState } from 'react';
import { Select } from 'antd';
import styled from '@emotion/styled';

import { Competition, Category } from '../types/__generated__';
import { LiveResult, PageSection } from '../components';
import { useCategories, useCompsYearly } from '../hooks';

const YEAR_DATA = [2020, 2021];

const Results: FC = () => {
  const [competition, setCompetition] = useState<Competition>();
  const [year, setYear] = useState(YEAR_DATA[0]);
  const [category, setCategory] = useState<Category>();

  // Get competition & category data from custom hooks
  const { categories } = useCategories();
  const { compsYearly } = useCompsYearly();

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
