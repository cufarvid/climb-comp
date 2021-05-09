import { gql } from '@apollo/client';

export const SCORE_BOULDER = gql`
  mutation ScoreBoulder($data: ScoreInput!) {
    scoreBoulder(data: $data) {
      message
      warning
    }
  }
`;

export const SCORE_LEAD = gql`
  mutation ScoreLead($data: ScoreInput!) {
    scoreLead(data: $data) {
      message
      warning
    }
  }
`;

export const SCORE_SPEED = gql`
  mutation ScoreSpeed($data: ScoreInput!) {
    scoreSpeed(data: $data) {
      message
      warning
    }
  }
`;
