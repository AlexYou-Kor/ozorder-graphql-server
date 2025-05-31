import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAccountToken {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  userId: number;

  @Field()
  accessToken: string;

  @Field()
  accessTokenExpireDate: Date;

  @Field()
  refreshToken: string;

  @Field()
  refreshTokenExpireDate: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
