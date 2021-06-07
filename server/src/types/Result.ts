import { Field, InputType, ObjectType } from 'type-graphql';
import { Competitor } from '@generated/type-graphql/models';

@InputType()
export class ResultInput {
  @Field()
  competitionId: number;

  @Field()
  categoryId: number;
}

@ObjectType()
export class ResultRound {
  @Field()
  name: string;

  @Field()
  rank: number;
}

@ObjectType()
export class ResultField {
  @Field()
  competitor: Competitor;

  @Field(() => [ResultRound])
  rounds: ResultRound[];
}

@ObjectType()
export class ResultOutput {
  @Field(() => [ResultField])
  results: ResultField[];
}
