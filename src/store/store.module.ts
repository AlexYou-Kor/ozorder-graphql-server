import { Module } from '@nestjs/common';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { LoyaltyModule } from 'src/loyalty/loyalty.module';

@Module({
  imports: [LoyaltyModule],
  providers: [StoreResolver, StoreService],
})
export class StoreModule {}
