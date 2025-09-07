import { Injectable } from '@nestjs/common';

import { Store } from './store.model';
import { LoyaltyService } from 'src/loyalty/loyalty.service';

@Injectable()
export class StoreService {
  constructor(private loyaltyService: LoyaltyService) {}

  getStoreById(id: number) {
    const loyalty = this.loyaltyService.getLoyaltyByStoreId(id);
    const store = {
      id: id,
      name: '해피마켓',
      phone: '01054030883',
      email: 'dkdn1004@naver.com',
      representative: '유인섭',
      businessNumber: '123123123123',
      address: '경기 수원시 영통구 영통로 90번길',
      zip: '123',
      loyalty,
    } as Store;
    return store;
  }
}
