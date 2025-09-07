import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Board {
  @Field(() => ID)
  id: number;

  @Field()
  type: 'event' | 'notice';

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  reservedAt: Date;
}
