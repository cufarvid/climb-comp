import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class ScoreInput {
  @Field()
  competitorId: number;

  @Field()
  routeId: number;

  @Field()
  score: string;

  @Field({ nullable: true })
  comment?: string;
}

@ObjectType()
export class ScoreOutput {
  @Field()
  message: string;

  @Field({ nullable: true })
  warning?: string;
}

export class ScoreBoulderData {
  top = 0;
  zone = 0;
  attempts = 0;
}
