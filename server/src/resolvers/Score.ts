import { ApolloError } from 'apollo-server-errors';
import { Resolver, Mutation, Ctx, Arg } from 'type-graphql';
import { ScoreBoulder } from '@generated/type-graphql';
import { Context, ScoreInput, ScoreOutput } from '../types';
import { getBoulderScoreData } from '../utils';

@Resolver(() => ScoreBoulder)
export class ScoreResolver {
  @Mutation(() => ScoreOutput)
  async scoreBoulder(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitorId, routeId, score }: ScoreInput,
  ): Promise<ScoreOutput> {
    if (!user) throw new ApolloError('Unauthorized', '401');

    try {
      // Check if score already exists
      const prevScore = await prisma.scoreBoulder.findFirst({
        where: {
          routeId: routeId,
          competitorId: competitorId,
        },
      });

      // Create score data based on input score
      const scoreData = getBoulderScoreData(score, prevScore);

      if (!prevScore) {
        // Not scored yet, create new score
        await prisma.scoreBoulder.create({
          data: {
            ...scoreData,
            competitor: { connect: { id: competitorId } },
            route: { connect: { id: routeId } },
          },
        });
      } else {
        // Check if top already exists
        if (prevScore.top > 0)
          return {
            message: `Score '${score}' not submitted.`,
            warning: 'Top already exists.',
          };

        // Update current score
        await prisma.scoreBoulder.update({
          where: { id: prevScore.id },
          data: {
            ...scoreData,
          },
        });
      }

      return {
        message: `Score '${score}' submitted successfully.`,
      };
    } catch (e) {
      console.error(e);
      throw new ApolloError(`Error submitting score '${score}'.`);
    }
  }
}
