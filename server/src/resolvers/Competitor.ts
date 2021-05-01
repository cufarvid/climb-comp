import { ApolloError } from 'apollo-server-errors';
import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Competitor } from '@generated/type-graphql';

import { Context } from '../types';
import { FindStartListInput } from '../types';

@Resolver(() => Competitor)
export class CompetitorResolver {
  @Query(() => Competitor)
  async getCompetitorForScoring(
    @Ctx() { prisma }: Context,
    @Arg('data') { startNumber, competitionId }: FindStartListInput,
  ): Promise<Competitor> {
    const startList = prisma.startList.findFirst({
      where: { startNumber: startNumber, competitionId: competitionId },
    });

    const competitor = await startList.competitor();

    if (!competitor)
      throw new ApolloError(
        `No competitor found for starting number ${startNumber}.`,
      );

    return competitor;
  }
}
