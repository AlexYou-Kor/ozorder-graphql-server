import { Module } from '@nestjs/common';

import { CommonModule } from 'src/common/common.module';
import { UserAccountOtpResolver } from './userAccountOtp.resolver';
import { UserAccountOtpService } from './userAccountOtp.service';

@Module({
  imports: [CommonModule],
  providers: [UserAccountOtpResolver, UserAccountOtpService],
})
export class UserAccountOtpModule {}
