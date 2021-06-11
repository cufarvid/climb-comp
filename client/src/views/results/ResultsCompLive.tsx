import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { generatePath, Link } from 'react-router-dom';

import { Query } from '../../types/__generated__';
import { LIVE_COMP_RESULTS } from '../../apollo/queries';
import { ROUTE } from '../../constants';
import { LiveResult } from '../../components';

const ResultsCompLive: FC = () => {
  const { data, error, loading } = useQuery<Query>(LIVE_COMP_RESULTS);

  if (!data || data.getLiveCompResults.results.length === 0 || error)
    return null;

  const { competition, category, results } = data.getLiveCompResults;
  const competitionTitle = `${competition.name} (${competition.compType.name})`;

  const title = (
    <>
      <span>Live results - </span>
      <Link to={generatePath(ROUTE.COMPETITIONS_ID, { id: competition.id })}>
        {competitionTitle}
      </Link>
    </>
  );

  return (
    <LiveResult
      title={title}
      pageSize={5}
      category={category}
      results={results}
      loading={loading}
    />
  );
};

export default ResultsCompLive;
