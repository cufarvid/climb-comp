import 'reflect-metadata';
import path from 'path';
import * as tq from 'type-graphql';
import jwt from 'jsonwebtoken';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '@generated/type-graphql';

import { User } from '@generated/type-graphql';
import { Context } from './types';
import { UserResolver, CompetitorResolver, ScoreResolver } from './resolvers';
import { ResultResolver } from './resolvers/Result';

const prisma = new PrismaClient();

(async () => {
  const schema = await tq.buildSchema({
    resolvers: [
      ...resolvers,
      UserResolver,
      CompetitorResolver,
      ScoreResolver,
      ResultResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const sever = new ApolloServer({
    schema,
    playground: true,
    context: async ({ req }): Promise<Context> => {
      try {
        const token = req.headers.authorization?.replace('Bearer', '');
        // No token, user is not logged in
        if (!token) return { prisma, user: null };

        const decoded = jwt.verify(token.trim(), process.env.JWT_SECRET) as {
          email: string;
        };

        const user: User = await prisma.user.findFirst({
          where: { email: decoded.email },
        });

        return { prisma, user };
      } catch (e) {
        console.error(e);
        return { prisma, user: null };
      }
    },
  });
  const { url } = await sever.listen({ port: 4000 });

  console.log(`🚀 Server ready at: ${url}`);
})();
