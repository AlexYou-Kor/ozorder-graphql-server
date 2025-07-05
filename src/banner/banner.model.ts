import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Banner {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  order: string;

  @Field()
  imageUrl: string;

  @Field(() => ID, { nullable: true })
  boardId?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  reservedAt: Date;
}

@InputType()
export class BannerInput {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  order: string;

  @Field()
  imageUrl: string;

  @Field(() => ID, { nullable: true })
  boardId?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  reservedAt: Date;
}
