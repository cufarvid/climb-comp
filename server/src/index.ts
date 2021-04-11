import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '@generated/type-graphql';

const prisma = new PrismaClient();

(async () => {
  const schema = await tq.buildSchema({ resolvers });

  const context = { prisma };

  const sever = new ApolloServer({ schema, context });
  const { url } = await sever.listen({ port: 4000 });

  console.log(`🚀 Server ready at: ${url}`);
})();
