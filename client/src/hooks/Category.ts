import { useState } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import { message } from 'antd';
import { gql } from '@apollo/client/core';

import { Category, Query } from '../types/__generated__';

/**
 * Apollo query
 */
const LIST_CATEGORIES = gql`
  query {
    categories {
      id
      name
      description
      ageFrom
      ageTo
    }
  }
`;

type UseCategories = {
  categories: Category[];
  error: ApolloError | undefined;
  loading: boolean;
};

/**
 * Returns an object containing a list of categories, error & loading status
 */
export const useCategories = (): UseCategories => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { error, loading } = useQuery<Query, Category>(LIST_CATEGORIES, {
    onCompleted: ({ categories }) => {
      if (categories) setCategories(categories);
    },
    onError: () => message.error('Error fetching competition info'),
  });

  return { categories, error, loading };
};
