import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Coupon {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field(() => ID, { nullable: true })
  locationId?: number;

  @Field(() => ID, { nullable: true })
  storeCustomerId?: number;

  @Field(() => ID, { nullable: true })
  globalCustomerId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  barcode?: string;

  @Field()
  type: 'auto' | 'general' | 'manual';

  @Field({ nullable: true })
  conditionType?: 'product' | 'amount' | 'barcode';

  @Field(() => Int, { nullable: true })
  conditionAmount?: number;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  conditionItems?: number[];

  @Field({ nullable: true })
  conditionItemsOperator?: 'and' | 'or';

  @Field()
  discountMethod: 'amount' | 'rate';

  @Field(() => Int)
  discountValue: number;

  @Field()
  applyScope: 'category' | 'product' | 'all';

  @Field(() => ID, { nullable: true })
  applyItemId?: number;

  @Field({ nullable: true })
  note?: string;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
