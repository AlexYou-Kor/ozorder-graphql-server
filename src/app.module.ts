import { join } from 'path';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LoggerMiddleware } from './logger.middleware';

import { CommonModule } from './common/common.module';
import { UserAccountModule } from './userAccount/userAccount.module';
import { UserAccountTokenModule } from './userAccountToken/userAccountToken.module';
import { UserAccountOtpModule } from './userAccountOtp/userAccountOtp.module';
import { ResponseLoggingInterceptor } from './responseLogger.interceptor';
import { BannerModule } from './banner/banner.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { GlobalCustomerModule } from './globalCustomer/globalCustomer.module';
import { StoreCustomerModule } from './storeCustomer/storeCustomer.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    CommonModule,
    UserAccountModule,
    UserAccountTokenModule,
    UserAccountOtpModule,
    BannerModule,
    GlobalCustomerModule,
    StoreCustomerModule,
    AuthenticationModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseLoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
