import React, { FC } from 'react';
import { Table } from 'antd';

import { RESULT_COLUMNS } from '../../constants';
import { ResultRecord } from '../../types';
import { ResultField } from '../../types/__generated__';
import { PageSection } from '../index';

interface Props {
  category: string | undefined;
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
  console.log(results);
  const resultsParser = (results: ResultField[]): ResultRecord[] =>
    results.map(resultsMapper);

  if (!results.length) return null;

  return (
    <PageSection title={category}>
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
