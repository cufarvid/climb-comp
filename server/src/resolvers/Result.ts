import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../types';
import { ResultInput, ResultOutput } from '../types/Result';
import { ApolloError } from 'apollo-server-errors';
import { Competition } from '@generated/type-graphql/models';
import { sortByRank } from '../utils';

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

    const { routes } = competition;
    const qualifications = routes.find(
      (route) => route.round === 'QUALIFICATION',
    );
    const semiFinal = routes.find((route) => route.round === 'SEMI_FINAL');
    const final = routes.find((route) => route.round === 'FINAL');

    // Add qualification results
    const results = qualifications.scoreLead.map((score, index) => ({
      competitor: score.competitor,
      rounds: [{ name: 'Qualifications', rank: index + 1 }],
    }));

    // Add semi-final results
    semiFinal?.scoreLead.forEach((score, index) => {
      // Find competitor and append round ranking
      results
        .find((r) => r.competitor.id === score.competitor.id)
        .rounds.push({
          name: 'Semi-Final',
          rank: index + 1,
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
        });
    });

    // Sort results
    results.sort(sortByRank);

    return { results: results.map((r, i) => ({ rank: i + 1, ...r })) };
  }
}
