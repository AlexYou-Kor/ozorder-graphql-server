import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { GlobalCustomer } from './globalCustomer.model';
import { GlobalCustomerService } from './globalCustomer.service';

@Resolver(() => GlobalCustomer)
@UseGuards(AuthGuard)
export class GlobalCustomerResolver {
  constructor(private readonly service: GlobalCustomerService) {}

  @Query(() => GlobalCustomer)
  getGlobalCustomerByPhone(
    @Args({ name: 'phone' }) phone: string,
  ): GlobalCustomer {
    const customer = this.service.getGlobalCustomerByPhone(phone);
    return customer;
  }
}
