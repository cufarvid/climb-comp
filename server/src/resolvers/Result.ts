import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';

import { Context, ResultInput, ResultOutput } from '../types';
import { getLeadResults, getSpeedResults, resultRankMapper } from '../utils';

@Resolver()
export class ResultResolver {
  @Query(() => ResultOutput)
  async getLeadCompResults(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ): Promise<ResultOutput> {
    if (!user) throw new ApolloError('Unauthorized', '401');

    // Fetch scores & do initial ordering by height and time
    const scores = await prisma.scoreLead.findMany({
      where: {
        route: { competitionId: competitionId, categoryId: categoryId },
      },
      include: { route: true, competitor: true },
      orderBy: [{ height: 'desc' }, { time: 'asc' }],
    });

    if (!scores) throw new ApolloError('No competitions found');

    // Get results
    const results = getLeadResults(scores);

    return { results: results.map(resultRankMapper) };
  }

  @Query(() => ResultOutput)
  async getSpeedCompResults(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ): Promise<ResultOutput> {
    if (!user) throw new ApolloError('Unauthorized', '401');

    // Fetch scores & do initial ordering by time
    const scores = await prisma.scoreSpeed.findMany({
      where: {
        route: { competitionId: competitionId, categoryId: categoryId },
      },
      include: { route: true, competitor: true },
      orderBy: [{ time: 'asc' }],
    });

    if (!scores) throw new ApolloError('No scores found');

    // Get results
    const results = getSpeedResults(scores);

    return { results: results.map(resultRankMapper) };
  }
}
