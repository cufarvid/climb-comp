import { Field, InputType } from 'type-graphql';
import { User } from '@generated/type-graphql';

@InputType()
export default class RegisterInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  locationId: number;
}
