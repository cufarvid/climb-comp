import { Route } from '@generated/type-graphql/models';
import { ResultField } from '../../types';

/**
 * Rank sorting function
 */
export const sortByRank = (a: ResultField, b: ResultField): number => {
  // Return rank or a very large number if ranking doesn't exist
  // (this prevents entries with fewer rounds to get a higher rank)
  const rank = (x: ResultField, i) =>
    x.rounds[i] ? x.rounds[i].rank : Number.MAX_VALUE;

  const aRank = rank(a, 0) + rank(a, 1) + rank(a, 2);
  const bRank = rank(b, 0) + rank(b, 1) + rank(b, 2);

  return aRank - bRank;
};

/**
 * Returns a route for every round of a competition
 * @param routes Competition routes
 */
export const getCompRounds = (
  routes: Route[],
): { qualifications: Route; semiFinal: Route; final: Route } => {
  const qualifications = routes.find(
    (route) => route.round === 'QUALIFICATION',
  );
  const semiFinal = routes.find((route) => route.round === 'SEMI_FINAL');
  const final = routes.find((route) => route.round === 'FINAL');

  return { qualifications, semiFinal, final };
};

/**
 * Final rankings array mapper
 * @param row Result row
 * @param index Result index
 */
export const resultRankMapper = (
  row: ResultField,
  index: number,
): ResultField => ({
  rank: index + 1,
  ...row,
});

/*
Exports
 */
export { addLeadResults, getLeadResults } from './Lead';
