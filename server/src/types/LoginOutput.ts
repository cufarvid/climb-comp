import { Field, ObjectType } from 'type-graphql';
import { User } from '@generated/type-graphql/models';

@ObjectType()
export default class LoginOutput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  token: string;
}
