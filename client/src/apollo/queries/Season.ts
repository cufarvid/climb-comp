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

export const LIST_SEASONS = gql`
  query {
    seasons {
      id
      name
      stardDate
      endDate
      description
      year
    }
  }
`;
