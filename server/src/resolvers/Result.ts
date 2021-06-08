import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';

import { Competition } from '@generated/type-graphql/models';
import { Context, ResultInput, ResultOutput } from '../types';
import { getCompRounds, resultRankMapper, sortByRank } from '../utils';

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
    semiFinal?.scoreLead.forEach((score, index) => {
      // Find competitor and append round ranking
      results
        .find((r) => r.competitor.id === score.competitor.id)
        .rounds.push({
          name: 'Semi-Final',
          rank: index + 1,
          score: score.height,
        });
    });

    // Add final results
    final?.scoreLead.forEach((score, index) => {
      // Find competitor and append round ranking
      results
        .find((r) => r.competitor.id === score.competitor.id)
        .rounds.push({
          name: 'Final',
          rank: index + 1,
          score: score.height,
        });
    });

    // Sort results
    results.sort(sortByRank);

    return { results: results.map(resultRankMapper) };
  }
}
