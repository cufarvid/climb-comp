import { ScoreLead } from '@generated/type-graphql/models';
import { ResultField, CompetitionRound } from '../../types';
import { sortByRank } from './index';

/**
 * Adds round scores to results array
 * @param results Results array
 * @param scores Scores array
 * @param compRound Competition round
 */
export const addLeadResults = (
  results: ResultField[],
  scores: ScoreLead[],
  compRound: CompetitionRound,
): void => {
  if (!scores) return;

  // Loop over all scores and add them appropriate competitors
  scores.forEach((record, index) => {
    // Find competitor and append round ranking
    results
      .find((r) => r.competitor.id === record.competitor.id)
      .rounds.push({
        name: compRound,
        rank: index + 1,
        score: record.height,
      });
  });
};

/**
 * Returns lead competition results
 * @param scores Scores array
 * @param sort Sort results?
 */
export const getLeadResults = (
  scores: ScoreLead[],
  sort = true,
): ResultField[] => {
  // Filter scores based on competition round
  const qualifications = scores.filter(
    (s) => s.route.round === 'QUALIFICATION',
  );
  const semiFinal = scores.filter((s) => s.route.round === 'SEMI_FINAL');
  const final = scores.filter((s) => s.route.round === 'FINAL');

  // Add qualification results
  const results = qualifications.map((score, index) => ({
    competitor: score.competitor,
    rounds: [{ name: 'Qualifications', rank: index + 1, score: score.height }],
  }));

  // Add semi-final results
  addLeadResults(results, semiFinal, 'Semi-Final');

  // Add final results
  addLeadResults(results, final, 'Final');

  // Sort results
  if (sort) results.sort(sortByRank);

  return results;
};
