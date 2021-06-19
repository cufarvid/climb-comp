import { gql } from '@apollo/client/core';

export const LIST_COMPETITORS = gql`
  query {
    competitors(orderBy: [{ id: desc }]) {
      id
      firstName
      lastName
      category {
        name
      }
      club {
        name
      }
      country {
        name
      }
    }
  }
`;
