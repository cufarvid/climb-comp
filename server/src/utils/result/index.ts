import { CompetitionRound, ResultField, RoundScores, Score } from '../../types';

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
export const addRoundResults = <T extends Score>(
  results: ResultField[],
  scores: T[],
  compRound: CompetitionRound,
): void => {
  if (!scores) return;

  // Loop over all scores and add them appropriate competitors
  scores.forEach((record, index) => {
    const result = { name: compRound, rank: index + 1, score: '' };

    // Set result score based on competition type
    if (record['height']) {
      result.score = record['height'];
    } else if (record['time']) result.score = record['time'].toString();

    // Find competitor and append round ranking
    results
      .find((r) => r.competitor.id === record.competitor.id)
      .rounds.push(result);
  });
};

/**
 * Returns a scores for every round of a competition
 * @param scores Scores array
 */
export const getCompRounds = <T extends Score>(scores: T[]): RoundScores<T> => {
  const qualification = scores.filter((s) => s.route.round === 'QUALIFICATION');
  const semiFinal = scores.filter((s) => s.route.round === 'SEMI_FINAL');
  const final = scores.filter((s) => s.route.round === 'FINAL');

  return { qualification, semiFinal, final };
};

/*
Exports
 */
export { getLeadResults } from './Lead';
export { getSpeedResults } from './Speed';
