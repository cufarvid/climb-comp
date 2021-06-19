import { gql } from '@apollo/client/core';

export const LIST_COUNTRIES = gql`
  query {
    countries(orderBy: [{ name: asc }]) {
      id
      name
    }
  }
`;
