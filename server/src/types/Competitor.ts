import { Field, InputType } from 'type-graphql';

@InputType()
export default class FindStartListInput {
  @Field()
  startNumber: number;

  @Field()
  competitionId: number;
}
