import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import { Context, LoginInput, LoginOutput, RegisterInput } from '../types';
import { User } from '@generated/type-graphql';

// TODO: Move to process env
import { JWT_SECRET } from '../../jwt';

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

    if (!user) throw new Error('Invalid email address');

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid) throw new Error('Invalid password');

    const token = await jwt.sign({ email }, JWT_SECRET, {
      expiresIn: '8h',
    });

    return { email, token };
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
          location: { connect: { id: registerInput.locationId } },
        },
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error creating user');
    }
  }
}
