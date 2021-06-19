import { gql } from '@apollo/client/core';

export const LIST_REGIONS = gql`
  query {
    regions(orderBy: [{ id: asc }]) {
      id
      name
    }
  }
`;
