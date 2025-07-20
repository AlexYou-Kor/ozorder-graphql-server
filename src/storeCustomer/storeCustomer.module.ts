import { Module } from '@nestjs/common';

import { StoreCustomerResolver } from './storeCustomer.resolver';
import { StoreCustomerService } from './storeCustomer.service';
import { GlobalCustomerModule } from 'src/globalCustomer/globalCustomer.module';

@Module({
  imports: [GlobalCustomerModule],
  providers: [StoreCustomerResolver, StoreCustomerService],
})
export class StoreCustomerModule {}
