import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class OrderItem {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  orderId: number;

  @Field()
  type: string;

  @Field(() => GraphQLJSON, { nullable: true })
  categories?: any;

  @Field(() => [OrderModifierItem], { nullable: true })
  modifiers?: OrderModifierItem[];

  @Field(() => ID, { nullable: true })
  productId?: number;

  @Field(() => ID, { nullable: true })
  skuId?: number;

  @Field()
  name: string;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int, { nullable: true })
  tax?: number;

  @Field()
  diningOption: 'forhere' | 'takeout';

  @Field(() => ID, { nullable: true })
  couponId?: number;

  @Field({ nullable: true })
  referType?: 'reward';

  @Field(() => ID, { nullable: true })
  referId?: number;

  @Field({ nullable: true })
  discountMethod?: 'rate' | 'amount';

  @Field(() => Int, { nullable: true })
  discountValue?: number;

  @Field(() => Int, { nullable: true })
  point?: number;

  @Field()
  createdAt: Date;
}

@ObjectType()
export class OrderModifierItem {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  orderItemId: number;

  @Field(() => ID)
  modifierId: number;

  @Field()
  name: string;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int, { nullable: true })
  tax?: number;
}

@ObjectType()
export class Charge {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  orderId: number;

  @Field()
  method: string;

  @Field(() => Int)
  amount: number;

  @Field(() => Int, { nullable: true })
  amountRefunded?: number;

  @Field(() => Int, { nullable: true })
  tax?: number;

  @Field({ nullable: true })
  request?: string;

  @Field({ nullable: true })
  ident?: string;

  @Field(() => Int, { nullable: true })
  installment?: number;

  @Field({ nullable: true })
  approver?: string;

  @Field({ nullable: true })
  acquirerCode?: string;

  @Field({ nullable: true })
  acquirerName?: string;

  @Field({ nullable: true })
  approvalDate?: Date;

  @Field({ nullable: true })
  approvalNumber?: string;

  @Field({ nullable: true })
  signature?: string;

  @Field(() => [Refund], { nullable: 'itemsAndList' })
  refunds?: [Refund];
}

@ObjectType()
export class Refund {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  chargeId: number;

  @Field()
  method: string;

  @Field(() => Int)
  amount: number;

  @Field(() => Int, { nullable: true })
  tax?: number;

  @Field({ nullable: true })
  approvalNumber?: string;

  @Field({ nullable: true })
  approvalDate?: Date;

  @Field({ nullable: true })
  reason?: string;

  @Field({ nullable: true })
  signature?: string;

  @Field()
  createdAt: Date;
}

@ObjectType()
export class Order {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field(() => ID)
  locationId: number;

  @Field({ nullable: true })
  numberPrefix?: string;

  @Field(() => Int)
  number: number;

  @Field(() => Int)
  amount: number;

  @Field(() => Int, { nullable: true })
  amountRefunded?: number;

  @Field(() => Int, { nullable: true })
  discountAmount?: number;

  @Field(() => ID)
  customerId: number;

  @Field(() => ID)
  storeCustomerId: number;

  @Field()
  state: 'created' | 'paid' | 'returned';

  @Field(() => Int, { nullable: true })
  tax?: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  diningOption: 'forhere' | 'takeout';

  @Field()
  diningState: 'created' | 'confirmed' | 'ready' | 'delivered' | 'cancelled';

  @Field({ nullable: true })
  phone?: string;

  @Field()
  deviceId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  paidAt?: Date;

  @Field({ nullable: true })
  refundedAt?: Date;

  @Field(() => Int, { nullable: true })
  pointSaved?: number;

  @Field()
  receiptNumber: string;

  @Field(() => [Charge], { nullable: 'itemsAndList' })
  charges?: Charge[];

  @Field(() => [OrderItem])
  items: OrderItem[];
}
