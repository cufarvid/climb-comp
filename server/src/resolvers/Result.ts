import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';

import { Competition } from '@generated/type-graphql/models';
import { CompetitionType, Context, ResultInput, ResultOutput } from '../types';
import {
  addRoundResults,
  getCompRounds,
  resultRankMapper,
  sortByRank,
} from '../utils';

@Resolver()
export class ResultResolver {
  @Query(() => ResultOutput)
  async getEventResults(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ): Promise<ResultOutput> {
    if (!user) throw new ApolloError('Unauthorized', '401');

    const competition: Competition = await prisma.competition.findFirst({
      where: { id: competitionId },
      include: {
        routes: {
          where: { categoryId: categoryId },
          include: {
            scoreLead: {
              include: {
                competitor: true,
              },
              orderBy: [{ height: 'desc' }, { time: 'asc' }],
            },
          },
        },
      },
    });

    if (!competition) throw new ApolloError('No competitions found');

    const { qualifications, semiFinal, final } = getCompRounds(
      competition.routes,
    );

    // Add qualification results
    const results = qualifications?.scoreLead.map((score, index) => ({
      competitor: score.competitor,
      rounds: [
        { name: 'Qualifications', rank: index + 1, score: score.height },
      ],
    }));

    // Add semi-final results
    addRoundResults(results, semiFinal, 'Semi-Final', CompetitionType.LEAD);

    // Add final results
    addRoundResults(results, final, 'Final', CompetitionType.LEAD);

    // Sort results
    results.sort(sortByRank);

    return { results: results.map(resultRankMapper) };
  }
}
