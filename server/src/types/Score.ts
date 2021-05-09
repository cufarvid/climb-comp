import { Field, ObjectType, InputType } from 'type-graphql';

@InputType()
export class ScoreInput {
  @Field()
  competitorId: number;

  @Field()
  routeId: number;

  @Field({ nullable: true })
  score: string;

  @Field({ nullable: true })
  time: number;

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

export interface ScoreLeadData {
  height: number;
  time: number;
}
