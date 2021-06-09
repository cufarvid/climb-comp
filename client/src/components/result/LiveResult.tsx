import React, { FC } from 'react';
import { Table } from 'antd';

import { RESULT_COLUMNS } from '../../constants';
import { ResultRecord } from '../../types';
import { Category, ResultField } from '../../types/__generated__';
import { PageSection } from '../index';

interface Props {
  category: Category | undefined;
  results: ResultField[];
  loading: boolean;
}

const resultsMapper = (field: ResultField): ResultRecord => {
  const { rank, competitor, rounds } = field;

  return {
    rank: rank,
    name: `${competitor.firstName} ${competitor.lastName}`,
    country: competitor.location.country.name,
    club: competitor.club.name,
    qualification: rounds[0]?.score ?? '',
    semiFinal: rounds[1]?.score ?? '',
    final: rounds[2]?.score ?? '',
  };
};

const LiveResult: FC<Props> = ({ category, results, loading }: Props) => {
  const resultsParser = (results: ResultField[]): ResultRecord[] =>
    results.map(resultsMapper);

  if (!(category && results.length)) return null;

  const title = `${category.name} - (${category.description}, ${category.ageFrom} - ${category.ageTo})`;

  return (
    <PageSection title={title}>
      <Table
        columns={RESULT_COLUMNS}
        dataSource={resultsParser(results)}
        rowKey="rank"
        className="w-100"
        loading={loading}
      />
    </PageSection>
  );
};

export default LiveResult;
