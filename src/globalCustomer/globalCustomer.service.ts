import { Injectable } from '@nestjs/common';
import { GlobalCustomer } from './globalCustomer.model';

@Injectable()
export class GlobalCustomerService {
  getGlobalCustomerByPhone(phone: string): GlobalCustomer {
    return {
      id: 1,
      ident: '@FDSAFS',
      identType: 'phone',
      name: '유인섭',
      phone: phone,
      email: 'dkdn1004@naver.com',
      birth: '1996-05-22',
      agreements: {
        privacy: true,
        provider: true,
      },
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as GlobalCustomer;
  }

  getGlobalCustomerById(id: number): GlobalCustomer {
    return {
      id: id,
      ident: '@FDSAFS',
      identType: 'phone',
      name: '유인섭',
      phone: '01054030883',
      email: 'dkdn1004@naver.com',
      birth: '1996-05-22',
      agreements: {
        privacy: true,
        provider: true,
      },
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as GlobalCustomer;
  }
}
