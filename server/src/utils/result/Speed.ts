import { ScoreSpeed } from '@generated/type-graphql/models';
import { ResultField } from '../../types';
import { addRoundResults, sortByRank } from './index';

/**
 * Returns lead competition results
 * @param scores Scores array
 * @param sort Sort results?
 */
export const getSpeedResults = (
  scores: ScoreSpeed[],
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
    rounds: [
      { name: 'Qualifications', rank: index + 1, score: score.time.toString() },
    ],
  }));

  // Add semi-final results
  addRoundResults(results, semiFinal, 'Semi-Final');

  // Add final results
  addRoundResults(results, final, 'Final');

  // Sort results
  if (sort) results.sort(sortByRank);

  return results;
};
