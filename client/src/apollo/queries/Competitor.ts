import { gql } from '@apollo/client/core';

export const LIST_COMPETITORS = gql`
  query {
    competitors {
      id
      firstName
      lastName
      category {
        name
      }
      club {
        name
      }
      location {
        country {
          name
        }
      }
    }
  }
`;
