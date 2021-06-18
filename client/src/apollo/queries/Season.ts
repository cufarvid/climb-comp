import { gql } from '@apollo/client/core';

export const LIST_SEASONS_COMPS = gql`
  query ListSeasons($year: Int) {
    seasons(where: { year: { equals: $year } }, orderBy: { year: desc }) {
      name
      year
      competitions {
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
  }
`;
