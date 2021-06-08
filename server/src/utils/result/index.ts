import { Route, ScoreLead, ScoreSpeed } from '@generated/type-graphql/models';
import { CompetitionRound, ResultField } from '../../types';

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

/**
 * Adds round scores to results array
 * @param results Results array
 * @param scores Scores array
 * @param compRound Competition round
 */
export const addRoundResults = (
  results: ResultField[],
  scores: (ScoreLead | ScoreSpeed)[],
  compRound: CompetitionRound,
): void => {
  if (!scores) return;

  // Loop over all scores and add them appropriate competitors
  scores.forEach((record, index) => {
    const result = { name: compRound, rank: index + 1, score: '' };

    // Set result score based on competition type
    if (record instanceof ScoreLead) result.score = record.height;
    else if (record instanceof ScoreSpeed)
      result.score = record.time.toString();

    // Find competitor and append round ranking
    results
      .find((r) => r.competitor.id === record.competitor.id)
      .rounds.push(result);
  });
};

/*
Exports
 */
export { getLeadResults } from './Lead';
export { getSpeedResults } from './Speed';
