import { Field, InputType } from 'type-graphql';
import { User } from '@generated/type-graphql/models';

@InputType()
export default class LoginInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}
