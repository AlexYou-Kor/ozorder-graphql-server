import { Module } from '@nestjs/common';

import { PointHistoryResolver } from './pointHistory.resolver';
import { PointHistoryService } from './pointHistory.service';
import { GlobalCustomerModule } from 'src/globalCustomer/globalCustomer.module';

@Module({
  imports: [GlobalCustomerModule],
  providers: [PointHistoryResolver, PointHistoryService],
})
export class PointHistoryModule {}
