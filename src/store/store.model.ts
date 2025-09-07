import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Loyalty } from 'src/loyalty/loyalty.model';

@ObjectType()
export class StorePolicy {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field()
  multiLocation: boolean;
}

@ObjectType()
export class Store {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  representative: string;

  @Field({ nullable: true })
  businessType?: string;

  @Field()
  businessNumber: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  zip?: string;

  @Field({ nullable: true })
  logo?: string;

  @Field(() => StorePolicy, { nullable: true })
  policy?: StorePolicy;

  @Field(() => Loyalty, { nullable: true })
  loyalty?: Loyalty;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
