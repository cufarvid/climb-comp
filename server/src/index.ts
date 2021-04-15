import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '@generated/type-graphql';

import { Context } from './types';
import { UserResolver } from './resolvers/User';

const prisma = new PrismaClient();

(async () => {
  const schema = await tq.buildSchema({
    resolvers: [...resolvers, UserResolver],
  });

  const sever = new ApolloServer({
    schema,
    playground: true,
    context: (): Context => ({ prisma }),
  });
  const { url } = await sever.listen({ port: 4000 });

  console.log(`🚀 Server ready at: ${url}`);
})();
