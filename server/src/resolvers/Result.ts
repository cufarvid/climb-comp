import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';

import { Context, ResultInput, ResultOutput, LiveResultOutput } from '../types';
import {
  getBoulderResults,
  getLeadResults,
  getSpeedResults,
  resultRankMapper,
} from '../utils';

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
  async getBoulderCompResults(
    @Ctx() { prisma }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ): Promise<ResultOutput> {
    // Fetch start list
    // This is needed because we cant include competitor data in groupBy operations
    const startList = await prisma.startList.findMany({
      where: {
        competitionId: competitionId,
        competitor: { categoryId: categoryId },
      },
      include: { competitor: true },
    });

    const results = await getBoulderResults(startList, {
      prisma,
      competitionId,
      categoryId,
    });

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
      case 'Lead':
        return this.getLeadCompResults(context, data);
      case 'Speed':
        return this.getSpeedCompResults(context, data);
      case 'Boulder':
        return this.getBoulderCompResults(context, data);
      default:
        throw new ApolloError('Invalid competition type');
    }
  }

  @Query(() => LiveResultOutput)
  async getLiveCompResults(
    @Ctx() { prisma, user }: Context,
  ): Promise<LiveResultOutput> {
    const dateTime = new Date();

    const categoryRound = await prisma.categoryRound.findFirst({
      where: {
        // Sort by competition start & end time
        competition: {
          startDate: {
            lte: dateTime,
          },
          endDate: {
            gte: dateTime,
          },
        },
        // Sort by round start & end time
        startDate: {
          lte: dateTime,
        },
        endDate: {
          gte: dateTime,
        },
      },
      include: { competition: { include: { compType: true } }, category: true },
    });

    if (!categoryRound)
      throw new ApolloError('No competitions/rounds currently live');

    const context = { prisma, user };
    const data: ResultInput = {
      competitionId: categoryRound.competitionId,
      categoryId: categoryRound.categoryId,
      competitionType: categoryRound.competition.compType
        .name as ResultInput['competitionType'],
    };

    const results = await this.getCompResults(context, data);

    return {
      competition: categoryRound.competition,
      category: categoryRound.category,
      ...results,
    };
  }
}
