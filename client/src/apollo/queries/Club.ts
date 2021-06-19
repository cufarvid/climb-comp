import { gql } from '@apollo/client/core';

export const LIST_CLUBS = gql`
  query {
    clubs(orderBy: [{ id: desc }]) {
      id
      name
      address
      country {
        name
      }
      region {
        name
      }
    }
  }
`;
