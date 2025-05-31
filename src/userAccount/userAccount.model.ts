import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAccount {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  loginedAt?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
