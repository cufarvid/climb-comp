import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../types';
import { ResultInput, ResultOutput } from '../types/Result';
import { ApolloError } from 'apollo-server-errors';
import { Competition } from '@generated/type-graphql/models';

@Resolver()
export class ResultResolver {
  @Query(() => ResultOutput)
  async getEventResults(
    @Ctx() { prisma, user }: Context,
    @Arg('data') { competitionId, categoryId }: ResultInput,
  ) {
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
    console.log('Sorting');
    results.sort((a, b) => {
      const ss = (a, b, i) => {
        if (a.rounds[i] && b.rounds[i])
          return a.rounds[i].rank > b.rounds[i].rank ? 1 : -1;
        else if (a.rounds[i] && !b.rounds[i]) return -1;
        else if (!a.rounds[i] && b.rounds[i]) return 1;
      };
      const q = ss(a, b, 0);
      const sf = ss(a, b, 1);
      const f = ss(a, b, 2);
      console.log(a.rounds);
      console.log(b.rounds);
      console.log(q);
      console.log(sf);
      console.log(f);
      console.log('Ret');
      const ret = q || sf || f;
      console.log(ret);
      console.log('--------');
      return ret;
    });

    return { results };
  }
}
