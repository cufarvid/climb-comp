import 'reflect-metadata';
import path from 'path';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '@generated/type-graphql';

import { Context } from './types';
import { UserResolver, CompetitorResolver } from './resolvers';

const prisma = new PrismaClient();

(async () => {
  const schema = await tq.buildSchema({
    resolvers: [...resolvers, UserResolver, CompetitorResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const sever = new ApolloServer({
    schema,
    playground: true,
    context: (): Context => ({ prisma, user: null }),
  });
  const { url } = await sever.listen({ port: 4000 });

  console.log(`🚀 Server ready at: ${url}`);
})();
