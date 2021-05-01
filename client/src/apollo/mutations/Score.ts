import { gql } from '@apollo/client';

export const SCORE_BOULDER = gql`
  mutation ScoreBoulder($data: ScoreInput!) {
    scoreBoulder(data: $data) {
      message
      warning
    }
  }
`;
