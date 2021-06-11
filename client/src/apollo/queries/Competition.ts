import { gql } from '@apollo/client/core';

/**
 * List competitions
 * $date - optional param to limit startDate
 */
export const LIST_COMPETITIONS = gql`
  query ListCompetitions($date: DateTime) {
    competitions(where: { startDate: { gte: $date } }) {
      id
      name
      startDate
      address
      compType {
        name
      }
      location {
        name
      }
    }
  }
`;

/**
 * List competition
 * $id - competition ID
 */
export const COMPETITION = gql`
  query Competition($id: Int) {
    competition(where: { id: $id }) {
      id
      name
      startDate
      endDate
      address
      compType {
        name
      }
      location {
        name
        country {
          name
        }
        region {
          name
        }
      }
      results {
        id
      }
    }
  }
`;
