import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-errors';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import {
  Context,
  LoginInput,
  LoginOutput,
  RegisterInput,
  UserInfo,
} from '../types';
import { User } from '@generated/type-graphql';

@Resolver(() => User)
export class UserResolver {
  @Mutation(() => LoginOutput)
  async login(
    @Ctx() { prisma }: Context,
    @Arg('credentials')
    { email, password }: LoginInput,
  ): Promise<LoginOutput> {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) throw new ApolloError('Invalid email address');

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid) throw new ApolloError('Invalid password');

    const token = await jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    });

    return { publicId: user.publicId, token };
  }

  @Mutation(() => User)
  async register(
    @Ctx() { prisma }: Context,
    @Arg('credentials') registerInput: RegisterInput,
  ): Promise<User> {
    try {
      return await prisma.user.create({
        data: {
          firstName: registerInput.firstName,
          lastName: registerInput.lastName,
          email: registerInput.email,
          password: await bcrypt.hash(registerInput.password, 10),
          location: registerInput.locationId
            ? { connect: { id: registerInput.locationId } }
            : undefined,
        },
      });
    } catch (e) {
      throw new ApolloError('Error creating user');
    }
  }

  @Query(() => UserInfo)
  async contextUserInfo(@Ctx() { prisma, user }: Context): Promise<UserInfo> {
    if (!user) throw new ApolloError('User not authorized');

    try {
      // Get last active route for user

      const route = await prisma.route.findFirst({
        where: { active: true, judgeId: user.id },
        orderBy: { id: 'desc' },
      });

      return { user, route };
    } catch (e) {
      new ApolloError('Error fetching user information');
    }
  }
}
