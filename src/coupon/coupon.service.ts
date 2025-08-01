import { Injectable } from '@nestjs/common';
import { Coupon } from './coupon.model';

@Injectable()
export class CouponService {
  getCouponsByGlobalCustomerId(customerId: number) {
    return [
      {
        id: 1,
        storeId: 1,
        globalCustomerId: customerId,
        name: '아메리카노 10% 할인',
        barcode: '1234567890128',
        type: 'manual',
        conditionType: 'barcode',
        discountMethod: 'rate',
        discountValue: 10,
        applyScope: 'product',
        applyItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        storeId: 1,
        globalCustomerId: customerId,
        name: '아메리카노 1000원 할인',
        barcode: '2345678901234',
        type: 'manual',
        conditionType: 'barcode',
        discountMethod: 'amount',
        discountValue: 1000,
        applyScope: 'product',
        applyItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] as Coupon[];
  }
}
