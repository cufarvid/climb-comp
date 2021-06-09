import { useEffect, useState } from 'react';
import { ApolloError, useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { message } from 'antd';
import dayjs from 'dayjs';

import { Competition, Query } from '../types/__generated__';
import { DictionaryOf } from '../types';

/**
 * Apollo query
 */
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

type UseCompsYearly = {
  compsYearly: DictionaryOf<Competition[]>;
  error: ApolloError | undefined;
  loading: boolean;
};

export const useCompsYearly = (): UseCompsYearly => {
  const [compsYearly, setCompsYearly] = useState<DictionaryOf<Competition[]>>(
    {},
  );
  const [getCompetitions, { error, loading }] = useLazyQuery<
    Query,
    Competition
  >(LIST_COMPETITIONS, {
    onCompleted: ({ competitions }) => {
      if (competitions) setCompsYearly(getCompsYearly(competitions));
    },
    onError: () => message.error('Error fetching competition info'),
  });

  useEffect(() => {
    getCompetitions();
  }, []);

  return { compsYearly, error, loading };
};
