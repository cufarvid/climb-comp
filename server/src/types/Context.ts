import { PrismaClient } from '@prisma/client';
import { User } from '@generated/type-graphql';

export default interface Context {
  prisma: PrismaClient;
  user: User | null | undefined;
}
