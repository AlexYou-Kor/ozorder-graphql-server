import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAccountOtp {
  @Field(() => ID)
  id: number;

  @Field()
  phone: string;

  @Field()
  otp: string;

  @Field()
  expireDate: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
