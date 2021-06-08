import { ScoreLead } from '@generated/type-graphql/models';
import { ResultField } from '../../types';
import { addRoundResults, getCompRounds, sortByRank } from './index';

/**
 * Returns lead competition results
 * @param scores Scores array
 * @param sort Sort results?
 */
export const getLeadResults = (
  scores: ScoreLead[],
  sort = true,
): ResultField[] => {
  // Get scores based on competition round
  const { qualification, semiFinal, final } = getCompRounds(scores);

  // Add qualification round results
  const results = qualification.map((score, index) => ({
    competitor: score.competitor,
    rounds: [
      {
        name: 'Qualifications',
        rank: index + 1,
        score: score instanceof ScoreLead && score.height,
      },
    ],
  }));

  // Add semi-final round results
  addRoundResults(results, semiFinal, 'Semi-Final');

  // Add final round results
  addRoundResults(results, final, 'Final');

  // Sort results
  if (sort) results.sort(sortByRank);

  return results;
};
