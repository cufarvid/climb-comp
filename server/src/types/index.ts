import { Competitor, Route } from '@generated/type-graphql/models';

import Context from './Context';
import LoginInput from './LoginInput';
import LoginOutput from './LoginOutput';
import RegisterInput from './RegisterInput';
import FindStartListInput from './Competitor';
import UserInfo from './User';
import { ScoreInput, ScoreOutput, ScoreBoulderData } from './Score';
import { ResultInput, ResultOutput, ResultField } from './Result';

export type CompetitionRound = 'Qualification' | 'Semi-Final' | 'Final';
export type Score = {
  competitor?: Competitor;
  route?: { round: Route['round'] };
};

export type RoundScores<T> = {
  qualification: T[];
  semiFinal: T[];
  final: T[];
};

export enum CompetitionType {
  LEAD = 'Lead',
  BOULDER = 'Boulder',
  SPEED = 'Speed',
}

export {
  Context,
  LoginInput,
  LoginOutput,
  RegisterInput,
  FindStartListInput,
  UserInfo,
  ScoreInput,
  ScoreOutput,
  ScoreBoulderData,
  ResultInput,
  ResultOutput,
  ResultField,
};
