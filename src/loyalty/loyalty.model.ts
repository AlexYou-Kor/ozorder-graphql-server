import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoyaltyConditionExcludeProduct {
  @Field(() => ID)
  loyaltyConditionId: number;

  @Field(() => ID)
  productId: number;
}

@ObjectType()
export class LoyaltyCondition {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  loyaltyId: number;

  @Field(() => Int, { nullable: true })
  minAmount?: number;

  @Field(() => Int, { nullable: true })
  perAmount?: number;

  @Field(() => Int, { nullable: true })
  minTime?: number;

  @Field(() => Float, { nullable: true })
  rate?: number;

  @Field(() => Int, { nullable: true })
  expirationPeriod?: number;

  @Field(() => [LoyaltyConditionExcludeProduct], { nullable: 'itemsAndList' })
  excludeProdIds?: LoyaltyConditionExcludeProduct[];
}

@ObjectType()
export class LoyaltyItem {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  loyaltyId: number;

  @Field()
  type: 'conditionItem' | 'rewardCash';

  @Field()
  name: string;

  @Field(() => ID, { nullable: true })
  parentId?: number;

  @Field(() => Int, { nullable: true })
  rate?: number;

  @Field(() => Int, { nullable: true })
  point?: number;

  @Field(() => Int, { nullable: true })
  amount?: number;
}

@ObjectType()
export class LoyaltyReward {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  loyaltyId: number;

  @Field(() => Int, { nullable: true })
  requirePoint?: number;

  @Field(() => Int, { nullable: true })
  minUsePoint?: number;
}

@ObjectType()
export class LoyaltyIncentive {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  loyaltyId: number;

  @Field({ nullable: true })
  birth?: boolean;

  @Field(() => Int, { nullable: true })
  birthPoint?: number;
}

@ObjectType()
export class Loyalty {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field()
  status: 'draft' | 'active' | 'inactive';

  @Field()
  type: 'point' | 'stamp';

  @Field()
  conditionType: 'amount' | 'item';

  @Field({ nullable: true })
  conditionSubType?: 'rate';

  @Field()
  rewardType: 'cash' | 'coupon';

  @Field(() => LoyaltyCondition, { nullable: true })
  condition?: LoyaltyCondition;

  @Field(() => [LoyaltyItem], { nullable: 'itemsAndList' })
  conditionItems?: LoyaltyItem[];

  @Field(() => LoyaltyReward, { nullable: true })
  reward?: LoyaltyReward;

  @Field(() => [LoyaltyItem], { nullable: 'itemsAndList' })
  rewardItems?: LoyaltyItem[];

  @Field(() => LoyaltyIncentive, { nullable: true })
  incentive?: LoyaltyIncentive;
}
