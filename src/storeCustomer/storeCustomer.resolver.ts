import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { StoreCustomerService } from './storeCustomer.service';
import { StoreCustomer } from './storeCustomer.model';

// 어떠한 모델에 관련된 Resolver인지 명시
@Resolver(() => StoreCustomer)
@UseGuards(AuthGuard)
export class StoreCustomerResolver {
  constructor(private readonly storeCustomerService: StoreCustomerService) {}

  @Query(() => StoreCustomer)
  getStoreCustomerByPhone(@Args({ name: 'phone' }) phone: string) {
    const storeCustomer =
      this.storeCustomerService.getStoreCustomerByPhone(phone);
    return storeCustomer;
  }

  @Query(() => StoreCustomer)
  getStoreCustomerById(@Args({ name: 'id' }) id: number) {
    const storeCustomer = this.storeCustomerService.getStoreCustomerById(id);
    return storeCustomer;
  }

  @Query(() => StoreCustomer)
  getStoreCustomerByUserId(
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    const storeCustomer =
      this.storeCustomerService.getStoreCustomerByUserId(userId);
    return storeCustomer;
  }
}
