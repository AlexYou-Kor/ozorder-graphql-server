import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class Hour {
  @Field()
  start: string;

  @Field()
  end: string;
}

@ObjectType()
export class BusinessHour {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  locationId: number;

  @Field(() => GraphQLJSON, { nullable: true })
  sun?: Hour;

  @Field(() => GraphQLJSON, { nullable: true })
  mon?: Hour;

  @Field(() => GraphQLJSON, { nullable: true })
  tue?: Hour;

  @Field(() => GraphQLJSON, { nullable: true })
  wed?: Hour;

  @Field(() => GraphQLJSON, { nullable: true })
  thu?: Hour;

  @Field(() => GraphQLJSON, { nullable: true })
  fri?: Hour;

  @Field(() => GraphQLJSON, { nullable: true })
  sat?: Hour;
}

@ObjectType()
export class Location {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  storeId: number;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  representative: string;

  @Field(() => BusinessHour, { nullable: true })
  businessHour?: BusinessHour;

  @Field({ nullable: true })
  businessNumber?: string;

  @Field()
  address: string;

  @Field()
  zip: string;

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lng: number;

  @Field(() => Int, { nullable: true })
  seat?: number;

  @Field(() => Int, { nullable: true })
  parking?: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
