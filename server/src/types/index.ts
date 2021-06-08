import Context from './Context';
import LoginInput from './LoginInput';
import LoginOutput from './LoginOutput';
import RegisterInput from './RegisterInput';
import FindStartListInput from './Competitor';
import UserInfo from './User';
import { ScoreInput, ScoreOutput, ScoreBoulderData } from './Score';
import { ResultInput, ResultOutput, ResultField } from './Result';

export type ScoreType = 'scoreLead' | 'scoreBoulder' | 'scoreSpeed';
export type CompetitionRound = 'Qualification' | 'Semi-Final' | 'Final';
export type Score = { height: string; time: number };

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
