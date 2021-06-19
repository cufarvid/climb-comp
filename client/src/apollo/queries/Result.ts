import { gql } from '@apollo/client/core';

export const COMP_RESULTS = gql`
  query GetCompResults($data: ResultInput!) {
    getCompResults(data: $data) {
      results {
        rank
        competitor {
          lastName
          firstName
          country {
            name
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

export const LIVE_COMP_RESULTS = gql`
  query {
    getLiveCompResults {
      competition {
        id
        name
        compType {
          name
        }
      }
      category {
        name
        description
        ageFrom
        ageTo
      }
      results {
        rank
        competitor {
          lastName
          firstName
          club {
            name
          }
          country {
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
