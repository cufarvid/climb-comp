import { gql } from '@apollo/client/core';

/**
 * List competitions
 * $date - optional param to limit startDate
 */
export const LIST_COMPETITIONS = gql`
  query ListCompetitions($date: DateTime, $take: Int = 100) {
    competitions(
      where: { startDate: { gte: $date } }
      take: $take
      orderBy: [{ startDate: asc }]
    ) {
      id
      name
      startDate
      address
      compType {
        name
      }
      country {
        name
      }
      region {
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
      country {
        name
      }
      region {
        name
      }
      results {
        id
      }
    }
  }
`;
