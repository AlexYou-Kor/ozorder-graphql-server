import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserAccountOtp } from './userAccountOtp.model';
import { UserAccountOtpService } from './userAccountOtp.service';

const target = new Date();
target.setMinutes(target.getMinutes() + 5);

// 어떠한 모델에 관련된 Resolver인지 명시
@Resolver(() => UserAccountOtp)
export class UserAccountOtpResolver {
  constructor(private userAccountOtpService: UserAccountOtpService) {}

  @Mutation(() => Boolean)
  sendOtp(@Args({ name: 'phone' }) phone: string): boolean {
    return this.userAccountOtpService.sendOtp(phone);
  }

  @Query(() => Boolean)
  validateOtp(
    @Args({ name: 'phone' }) phone: string,
    @Args({ name: 'otp' }) otp: string,
  ): boolean {
    return this.userAccountOtpService.validateOtp(phone, otp);
  }

  @Query(() => Int)
  getValidOtpTime() {
    const current = new Date().getTime() / 1000;
    const diff = Math.round(target.getTime() / 1000 - current);
    return diff;
  }
}
