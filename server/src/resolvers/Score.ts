import { ApolloError } from 'apollo-server-errors';
import { Resolver, Mutation, Ctx, Arg } from 'type-graphql';
import { Context, ScoreInput, ScoreOutput } from '../types';
import { getBoulderScoreData, ScoreLeadRegex } from '../utils';

@Resolver()
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

  @Mutation(() => ScoreOutput)
  async scoreLead(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitorId, routeId, score, time }: ScoreInput,
  ): Promise<ScoreOutput> {
    if (!user) throw new ApolloError('Unauthorized', '401');

    // Check if score/height is valid
    if (!ScoreLeadRegex.test(score))
      throw new ApolloError(`Score '${score}' is not a valid.`);

    try {
      // Check if score already exists
      const prevScore = await prisma.scoreLead.findFirst({
        where: {
          routeId: routeId,
          competitorId: competitorId,
        },
      });

      const scoreData = { height: score, time };

      if (!prevScore) {
        // Not scored yet, create new score
        await prisma.scoreLead.create({
          data: {
            ...scoreData,
            competitor: { connect: { id: competitorId } },
            route: { connect: { id: routeId } },
          },
        });

        return {
          message: `Score '${score}' submitted successfully.`,
        };
      } else {
        // In case of repeating the same route, update existing record
        await prisma.scoreLead.update({
          where: { id: prevScore.id },
          data: {
            ...scoreData,
          },
        });

        return {
          message: `Score '${score}' submitted successfully.`,
          warning: `You updated existing value of '${prevScore.height}'.`,
        };
      }
    } catch (e) {
      console.error(e);
      throw new ApolloError(`Error submitting score '${score}'.`);
    }
  }

  @Mutation(() => ScoreOutput)
  async scoreSpeed(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitorId, routeId, time }: ScoreInput,
  ): Promise<ScoreOutput> {
    if (!user) throw new ApolloError('Unauthorized', '401');

    try {
      // Check if score already exists
      const prevScore = await prisma.scoreSpeed.findFirst({
        where: {
          routeId: routeId,
          competitorId: competitorId,
        },
      });

      if (!prevScore) {
        // Not scored yet, create new score
        await prisma.scoreSpeed.create({
          data: {
            time,
            competitor: { connect: { id: competitorId } },
            route: { connect: { id: routeId } },
          },
        });

        return {
          message: `Score submitted successfully.`,
        };
      } else {
        // In case of repeating the same route, update existing record
        await prisma.scoreLead.update({
          where: { id: prevScore.id },
          data: {
            time,
          },
        });

        return {
          message: `Score submitted successfully.`,
          warning: `You updated existing value.`,
        };
      }
    } catch (e) {
      console.error(e);
      throw new ApolloError(`Error submitting score.`);
    }
  }
}
