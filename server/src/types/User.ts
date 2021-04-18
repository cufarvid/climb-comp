import { Field, ObjectType } from 'type-graphql';
import { User, Route } from '@generated/type-graphql/models';

@ObjectType()
export default class UserInfo {
  @Field()
  user: User;

  @Field({ nullable: true })
  route: Route;
}
