import { join } from 'path';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import GraphQLJSON from 'graphql-type-json';

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
import { CouponModule } from './coupon/coupon.module';
import { LocationModule } from './location/location.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { StoreModule } from './store/store.module';
import { OrderModule } from './order/order.module';
import { PointHistoryModule } from './pointHistory/pointHistory.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      resolvers: {
        JSON: GraphQLJSON,
      },
    }),
    CommonModule,
    UserAccountModule,
    UserAccountTokenModule,
    UserAccountOtpModule,
    BannerModule,
    GlobalCustomerModule,
    StoreCustomerModule,
    CouponModule,
    LocationModule,
    LoyaltyModule,
    StoreModule,
    OrderModule,
    PointHistoryModule,
    BoardModule,
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
