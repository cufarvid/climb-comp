import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';

import { Context, ResultInput, ResultOutput } from '../types';
import { getLeadResults, getSpeedResults, resultRankMapper } from '../utils';

@Resolver()
export class ResultResolver {
  @Query(() => ResultOutput)
  async getLeadCompResults(
    @Ctx() { prisma }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ): Promise<ResultOutput> {
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
    @Ctx() { prisma }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ): Promise<ResultOutput> {
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

  @Query(() => ResultOutput)
  async getCompResults(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitionId, categoryId, competitionType }: ResultInput,
  ): Promise<ResultOutput> {
    const context = { prisma, user };
    const data = { competitionId, categoryId };

    switch (competitionType) {
      case 'LEAD':
        return this.getLeadCompResults(context, data);
      case 'SPEED':
        return this.getSpeedCompResults(context, data);
      default:
        throw new ApolloError('Invalid competition type');
    }
  }
}
