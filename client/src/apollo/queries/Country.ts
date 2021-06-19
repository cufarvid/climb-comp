import { gql } from '@apollo/client/core';

export const LIST_COUNTRIES = gql`
  query {
    countries(orderBy: [{ id: asc }]) {
      id
      name
    }
  }
`;
