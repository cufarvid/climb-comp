import React, { FC, ReactNode } from 'react';
import { Empty, Table } from 'antd';

import { RESULT_COLUMNS } from '../../constants';
import { ResultRecord } from '../../types';
import { Category, ResultField } from '../../types/__generated__';
import { PageSection } from '../index';

interface Props {
  title?: ReactNode;
  pageSize?: number;
  category: Category | undefined;
  results: ResultField[];
  loading: boolean;
}

const resultsMapper = (field: ResultField): ResultRecord => {
  const { rank, competitor, rounds } = field;

  return {
    rank: rank,
    name: `${competitor.firstName} ${competitor.lastName}`,
    country: competitor.country?.name ?? '',
    club: competitor.club.name,
    qualification: rounds[0]?.score ?? '',
    semiFinal: rounds[1]?.score ?? '',
    final: rounds[2]?.score ?? '',
  };
};

const LiveResult: FC<Props> = ({
  title,
  pageSize = 10,
  category,
  results,
  loading,
}: Props) => {
  const resultsParser = (results: ResultField[]): ResultRecord[] =>
    results.map(resultsMapper);

  if (!(category && results.length)) return <Empty />;

  const categoryTitle = `${category.name} - (${category.description}, ${category.ageFrom} - ${category.ageTo})`;

  return (
    <PageSection title={title} subTitle={categoryTitle}>
      <Table
        columns={RESULT_COLUMNS}
        dataSource={resultsParser(results)}
        rowKey="rank"
        className="w-100"
        loading={loading}
        pagination={{ pageSize }}
      />
    </PageSection>
  );
};

export default LiveResult;
