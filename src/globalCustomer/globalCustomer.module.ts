import { Module } from '@nestjs/common';

import { GlobalCustomerResolver } from './globalCustomer.resolver';
import { GlobalCustomerService } from './globalCustomer.service';

@Module({
  providers: [GlobalCustomerResolver, GlobalCustomerService],
  exports: [GlobalCustomerService],
})
export class GlobalCustomerModule {}
