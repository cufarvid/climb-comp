import { Field, InputType } from 'type-graphql';
import { User, UserRole } from '@generated/type-graphql';

@InputType()
export default class RegisterInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => UserRole)
  role: UserRole;

  @Field()
  password: string;

  @Field({ nullable: true })
  regionId?: number;

  @Field({ nullable: true })
  countryId?: number;
}
