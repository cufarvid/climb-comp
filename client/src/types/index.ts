import { ApolloError } from '@apollo/client';

export type DictionaryOf<T> = {
  [key in string | number]: T;
};

export type ColorVariant = 'dark' | 'light';

export enum ModalType {
  ADD = 'Add',
  EDIT = 'Edit',
}

/*
  Score
*/
export type ScoreType = 'top' | 'zone' | 'attempt';

/*
  Result
*/
export interface ResultRecord {
  rank: number;
  name: string;
  country: string;
  club: string;
  qualification: string;
  semiFinal: string;
  final: string;
}

/*
  Competition type
 */
export enum CompetitionType {
  LEAD = 'Lead',
  BOULDER = 'Boulder',
  SPEED = 'Speed',
}

export interface QueryHookBase {
  error: ApolloError | undefined;
  loading: boolean;
}
