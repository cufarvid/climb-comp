import { UserRole } from './__generated__';

export type DictionaryOf<T> = {
  [key in string | number]: T;
};

export type ColorVariant = 'dark' | 'light';

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
  User
 */
export interface UserRecord {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  role: UserRole;
}
