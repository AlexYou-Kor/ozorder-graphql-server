import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { UserAccount } from 'src/userAccount/userAccount.model';

@ObjectType()
export class Payload {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field()
  user: UserAccount;

  @Field(() => ID)
  userId: number;

  @Field()
  expiresIn: number;
}

@ObjectType()
export class AccessTokenPayload {
  @Field(() => ID)
  userId: number;

  @Field(() => Int)
  iat: number;

  @Field(() => Int)
  exp: number;

  @Field()
  type: string;
}
