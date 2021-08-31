import React, { FC, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Form, message, Select } from 'antd';

import {
  Competition,
  Category,
  Query,
  QueryGetCompResultsArgs,
  ResultField,
} from '../types/__generated__';
import { LiveResult, PageSection } from '../components';
import { useCategories, useCompsYearly } from '../hooks';
import { formatDate } from '../utils';
import { COMP_RESULTS } from '../apollo/queries';

const YEAR_DATA = [2021, 2020];

const Results: FC = () => {
  const [competition, setCompetition] = useState<Competition>();
  const [year, setYear] = useState(YEAR_DATA[0]);
  const [category, setCategory] = useState<Category>();
  const [results, setResults] = useState<ResultField[]>([]);

  // Get competition & category data from custom hooks
  const { categories } = useCategories();
  const { compsYearly } = useCompsYearly();

  const [getResults, { loading }] = useLazyQuery<
    Query,
    QueryGetCompResultsArgs
  >(COMP_RESULTS, {
    onCompleted: ({ getCompResults }) => {
      if (getCompResults) setResults(getCompResults.results);
    },
    onError: () => message.error('Error fetching results'),
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

  /**
   * Fetches results
   */
  const fetchResults = (): void => {
    // If competition and category are not set we can't fetch the data
    if (!(competition?.id && category?.id)) return;

    getResults({
      variables: {
        data: {
          competitionId: competition.id,
          competitionType: competition.compType.name,
          categoryId: category.id,
        },
      },
    });
  };

  useEffect(() => {
    // Fetch results if competition or category was changed
    fetchResults();
  }, [competition, category]);

  const title = `Results - (${year}) ${competition?.name ?? ''} - ${formatDate(
    competition?.startDate,
  )}`.trim();

  return (
    <div>
      {/* Year, competition & category selection */}
      <PageSection title={title}>
        <Form layout="inline">
          <Form.Item label="Year">
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
          </Form.Item>
          <Form.Item
            label="Competition"
            validateStatus={competition ? '' : 'error'}
          >
            <Select
              value={competition?.name}
              onChange={(value) => handleCompChange(+value)}
              placeholder="Competition"
              style={{ minWidth: 200 }}
            >
              {compsYearly[year]?.map((comp, index) => (
                <Select.Option key={comp.id} value={index}>
                  {comp.name} - {formatDate(comp.startDate)}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Category" validateStatus={category ? '' : 'error'}>
            <Select
              value={category?.name}
              onChange={(value) => setCategory(categories[+value])}
              placeholder="Category"
              style={{ minWidth: 150 }}
            >
              {categories?.map((cat, index) => (
                <Select.Option key={cat.id} value={index}>
                  {cat.name} - {cat.description}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </PageSection>

      {/* Results */}
      <LiveResult category={category} results={results} loading={loading} />
    </div>
  );
};

export default Results;
