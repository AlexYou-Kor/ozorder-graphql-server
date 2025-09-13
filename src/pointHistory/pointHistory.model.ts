import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PointHistory {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field(() => ID)
  locationId: number;

  @Field(() => ID, { nullable: true })
  orderId?: number;

  @Field(() => ID)
  storeCustomerId: number;

  @Field(() => ID)
  globalCustomerId: number;

  @Field()
  type: 'used' | 'saved';

  @Field(() => Int)
  point: number;

  @Field({ nullable: true })
  note?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class PointHistoriesOutput {
  @Field(() => [PointHistory])
  data: PointHistory[];

  @Field(() => ID, { nullable: true })
  nextCursor?: number;
}
