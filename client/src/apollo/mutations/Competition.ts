import { gql } from '@apollo/client';

export const COMPETITION_ADD = gql`
  mutation CompetitionAdd($data: CompetitionCreateInput!) {
    createCompetition(data: $data) {
      id
    }
  }
`;

export const COMPETITION_UPDATE = gql`
  mutation CompetitionUpdate(
    $where: CompetitionWhereUniqueInput!
    $data: CompetitionUpdateInput!
  ) {
    updateCompetition(where: $where, data: $data) {
      id
    }
  }
`;
