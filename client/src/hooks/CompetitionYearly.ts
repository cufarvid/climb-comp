import { useState } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
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
      compType {
        name
      }
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

/**
 * Returns an object containing an object of years and respective competitions, error & loading status
 */
export const useCompsYearly = (): UseCompsYearly => {
  const [compsYearly, setCompsYearly] = useState<DictionaryOf<Competition[]>>(
    {},
  );

  const { error, loading } = useQuery<Query>(LIST_COMPETITIONS, {
    onCompleted: ({ competitions }) => {
      if (competitions) setCompsYearly(getCompsYearly(competitions));
    },
    onError: () => message.error('Error fetching competition info'),
  });

  return { compsYearly, error, loading };
};
