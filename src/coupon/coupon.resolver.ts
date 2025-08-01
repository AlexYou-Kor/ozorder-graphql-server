import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { CouponService } from './coupon.service';
import { Coupon } from './coupon.model';

@Resolver(() => Coupon)
@UseGuards(AuthGuard)
export class CouponResolver {
  constructor(private couponService: CouponService) {}

  @Query(() => [Coupon])
  getCouponsByGlobalCustomerId(
    @Args({ name: 'customerId', type: () => Int }) customerId: number,
  ): Coupon[] {
    return this.couponService.getCouponsByGlobalCustomerId(customerId);
  }
}
