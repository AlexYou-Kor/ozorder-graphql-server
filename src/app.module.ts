import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserAccountModule } from './userAccount/userAccount.module';
import { UserAccountTokenModule } from './userAccountToken/userAccountToken.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    UserAccountModule,
    UserAccountTokenModule,
  ],
})
export class AppModule {}
