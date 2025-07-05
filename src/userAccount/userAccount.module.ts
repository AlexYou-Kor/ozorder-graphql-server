import { Module } from '@nestjs/common';

import { UserAccountResolver } from './userAccount.resolver';
import { UserAccountService } from './userAccount.service';

@Module({
  providers: [UserAccountResolver, UserAccountService],
  exports: [UserAccountService],
})
export class UserAccountModule {}
