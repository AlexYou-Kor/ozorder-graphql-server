import { Injectable } from '@nestjs/common';
import { Loyalty } from './loyalty.model';

@Injectable()
export class LoyaltyService {
  getLoyaltyByStoreId(storeId: number) {
    const loyalty = {
      id: 1,
      storeId,
      status: 'active',
      type: 'point',
      conditionType: 'amount',
      rewardType: 'coupon',
      condition: {
        id: 1,
        loyaltyId: 1,
        minAmount: 1000,
        expirationPeriod: 5,
      },
      reward: {
        id: 1,
        loyaltyId: 1,
        requirePoint: 100,
        minUsePoint: 100,
      },
      rewardItems: [
        {
          id: 1,
          loyaltyId: 1,
          type: 'rewardCash',
          name: 'cash',
          amount: 1,
        },
      ],
    } as Loyalty;
    return loyalty;
  }
}
