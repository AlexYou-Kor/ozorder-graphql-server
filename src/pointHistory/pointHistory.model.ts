import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { Store } from 'src/store/store.model';
import { Location } from 'src/location/location.model';

@ObjectType()
export class PointHistory {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field()
  store: Store;

  @Field(() => ID)
  locationId: number;

  @Field()
  location: Location;

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
