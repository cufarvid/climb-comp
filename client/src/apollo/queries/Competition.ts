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
