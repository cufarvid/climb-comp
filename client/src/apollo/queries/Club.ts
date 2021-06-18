import { gql } from '@apollo/client/core';

export const LIST_CLUBS = gql`
  query {
    clubs {
      id
      name
      address
      location {
        country {
          name
        }
      }
    }
  }
`;
