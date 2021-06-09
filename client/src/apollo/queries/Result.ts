import { gql } from '@apollo/client/core';

export const COMP_RESULTS = gql`
  query GetCompResults($data: ResultInput!) {
    getCompResults(data: $data) {
      results {
        rank
        competitor {
          lastName
          firstName
          location {
            country {
              name
            }
          }
          club {
            name
          }
        }
        rounds {
          name
          rank
          score
        }
      }
    }
  }
`;
