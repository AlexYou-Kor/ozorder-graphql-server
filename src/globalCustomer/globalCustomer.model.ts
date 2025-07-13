import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Agreements {
  @Field()
  privacy: boolean;

  @Field()
  provider: boolean;
}

@ObjectType()
export class GlobalCustomer {
  @Field(() => ID)
  id: number;

  @Field()
  ident: string;

  @Field()
  identType: 'phone';

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  birth: string;

  @Field()
  agreements: Agreements;

  @Field()
  gender: 'male' | 'female' | 'unknown';

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
