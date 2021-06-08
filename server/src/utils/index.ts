import { Route } from '@generated/type-graphql/models';
import {
  ScoreType,
  CompetitionType,
  ResultField,
  ScoreBoulderData,
  CompetitionRound,
  Score,
} from '../types';

export const ScoreLeadRegex = /^\d{1,2}\+?$/;

/**
 * Computes and returns boulder score based on score type
 * @param scoreType
 * @param prevScore
 */
export const getBoulderScoreData = (
  scoreType: string,
  prevScore?: ScoreBoulderData,
): ScoreBoulderData => {
  let { top, zone, attempts } = prevScore || new ScoreBoulderData();

  switch (scoreType) {
    case 'top':
      attempts++;
      top = attempts;
      zone = zone === 0 ? attempts : zone;
      break;
    case 'zone':
      attempts++;
      zone = zone === 0 ? attempts : zone;
      break;
    case 'attempt':
      attempts++;
      break;
  }

  return { top, zone, attempts };
};

/**
 * Rank sorting function
 */
export const sortByRank = (a, b): number => {
  // Return rank or a very large number if ranking doesn't exist
  // (this prevents entries with fewer rounds to get a higher rank)
  const rank = (x, i) => (x.rounds[i] ? x.rounds[i].rank : Number.MAX_VALUE);

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
 * Returns score type based on competition type
 * @param compType Competition type
 */
const getScoreType = (compType: CompetitionType): ScoreType => {
  switch (compType) {
    case CompetitionType.LEAD:
      return 'scoreLead';
    case CompetitionType.BOULDER:
      return 'scoreBoulder';
    case CompetitionType.SPEED:
      return 'scoreSpeed';
  }
};

/**
 * Returns a score based on competition type
 * @param record Score record
 * @param compType Competition type
 */
const getScore = (record: Score, compType: CompetitionType): string => {
  switch (compType) {
    case CompetitionType.LEAD:
      return record.height;
    case CompetitionType.BOULDER:
      return 'scoreBoulder';
    case CompetitionType.SPEED:
      return record.time.toString();
  }
};

/**
 * Adds round results to results array
 * @param results Results array
 * @param route Route
 * @param compRound Competition round
 * @param compType Competition type
 */
export const addRoundResults = (
  results: ResultField[],
  route: Route,
  compRound: CompetitionRound,
  compType: CompetitionType,
): void => {
  if (!route) return;

  // Set score type based on competition type
  const scoreType: ScoreType = getScoreType(compType);

  // Loop over all scores and add them appropriate competitors
  route[scoreType].forEach((record, index) => {
    const score = getScore(record, compType);

    // Find competitor and append round ranking
    results
      .find((r) => r.competitor.id === record.competitor.id)
      .rounds.push({
        name: compRound,
        rank: index + 1,
        score: score,
      });
  });
};
