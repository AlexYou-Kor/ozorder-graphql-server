import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { GlobalCustomer } from 'src/globalCustomer/globalCustomer.model';

@ObjectType()
export class CustomerPoint {
  @Field(() => Int)
  saved: number;

  @Field(() => Int)
  used: number;
}

@ObjectType()
export class LocationCustomer {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  locationId: number;

  @Field({ nullable: true })
  note?: string;

  @Field()
  point: CustomerPoint;

  @Field()
  registeredAt: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class StoreCustomer {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  globalCustomerId: number;

  @Field(() => GlobalCustomer)
  customer: GlobalCustomer;

  @Field(() => ID)
  storeId: number;

  @Field(() => ID)
  locationId: number;

  // TOTAL
  @Field()
  point: CustomerPoint;

  @Field(() => [LocationCustomer])
  locations: LocationCustomer[];

  @Field()
  registeredAt: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
