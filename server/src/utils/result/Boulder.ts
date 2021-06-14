import { Prisma, PrismaClient } from '@prisma/client';

import { Competitor, StartList } from '@generated/type-graphql/models';
import { CompetitionRound, ResultField, Round, TopZone } from '../../types';
import { sortByRank } from './index';

interface BoulderResultsOptions {
  prisma: PrismaClient;
  competitionId: number;
  categoryId: number;
}

/**
 * Returns results for provided boulder competition round
 * @param prisma PrismaClient
 * @param competitionId Competition ID
 * @param categoryId Category ID
 * @param round Round enum
 */
export const getBoulderRoundResults = (
  { prisma, competitionId, categoryId }: BoulderResultsOptions,
  round: Round,
) => {
  return prisma.scoreBoulder.groupBy({
    by: ['competitorId'],
    where: {
      route: {
        competitionId: competitionId,
        categoryId: categoryId,
        round: round,
      },
    },
    // Count number of tops & zones
    _count: {
      top: true,
      zone: true,
    },
    // Sum total number of attempts for tops & zones
    _sum: {
      top: true,
      zone: true,
    },
    // Order by number of tops & zones DESC, top & zone attempts ASC
    orderBy: [
      { _count: { top: 'desc' } },
      { _count: { zone: 'desc' } },
      { _sum: { top: 'asc' } },
      { _sum: { zone: 'asc' } },
    ],
  });
};

/**
 * Return boulder score in {countTop}T{sumTop} {countZone}Z{countZone} format
 * @param count Top & zone count object
 * @param sum Top & zone sum object
 */
const parseBoulderScore = (count: TopZone, sum: TopZone): string =>
  `${count.top}T${sum.top} ${count.zone}Z${sum.zone}`;

/**
 * Appends round scores to results array
 * @param results Results array
 * @param scores Scores array
 * @param compRound Competition round
 */
const addBoulderRoundResults = (
  results: ResultField[],
  scores: (Prisma.PickArray<
    Prisma.ScoreBoulderGroupByOutputType,
    'competitorId'[]
  > & {
    _sum: TopZone;
    _count: TopZone;
  })[],
  compRound: CompetitionRound,
): void => {
  if (!scores) return;

  // Loop over all scores and add them appropriate competitors
  scores.forEach((field, index) => {
    // Prepare round result
    const result = {
      rank: index + 1,
      name: compRound,
      score: parseBoulderScore(field._count, field._sum),
    };

    // Find competitor and append round ranking
    results
      .find((r) => r.competitor.id === field.competitorId)
      .rounds.push(result);
  });
};

/**
 * Returns boulder competition results
 * @param startList Start list with competitors
 * @param options Prisma & query options
 * @param sort Sort results?
 */
export const getBoulderResults = async (
  startList: (StartList & { competitor: Competitor })[],
  options: BoulderResultsOptions,
  sort = true,
): Promise<ResultField[]> => {
  const qualification = await getBoulderRoundResults(
    options,
    Round.Qualification,
  );

  const semiFinal = await getBoulderRoundResults(options, Round.SemiFinal);
  const final = await getBoulderRoundResults(options, Round.Final);

  // Add qualification round results
  const results: ResultField[] = qualification.map((field, index) => ({
    competitor: startList.find((c) => c.competitorId === field.competitorId)
      ?.competitor,
    rounds: [
      {
        rank: index + 1,
        name: 'Qualification',
        score: parseBoulderScore(field._count, field._sum),
      },
    ],
  }));

  // Add semi-final round results
  addBoulderRoundResults(results, semiFinal, 'Semi-Final');

  // Add final round results
  addBoulderRoundResults(results, final, 'Final');

  // Sort results
  if (sort) results.sort(sortByRank);

  return results;
};
