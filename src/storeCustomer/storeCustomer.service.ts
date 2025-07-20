import { Injectable } from '@nestjs/common';
import { StoreCustomer } from './storeCustomer.model';
import { GlobalCustomerService } from 'src/globalCustomer/globalCustomer.service';

@Injectable()
export class StoreCustomerService {
  constructor(private readonly globalCustomerService: GlobalCustomerService) {}
  getStoreCustomerByPhone(phone: string) {
    const globalCustomer =
      this.globalCustomerService.getGlobalCustomerByPhone(phone);
    return {
      id: 1,
      globalCustomerId: globalCustomer.id,
      customer: globalCustomer,
      storeId: 1,
      locationId: 1,
      point: {
        used: 100,
        saved: 1000,
      },
      locations: [
        {
          id: 1,
          locationId: 1,
          note: '노트',
          point: {
            used: 100,
            saved: 1000,
          },
          registeredAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      registeredAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as StoreCustomer;
  }

  getStoreCustomerById(id: number) {
    const globalCustomer = this.globalCustomerService.getGlobalCustomerById(id);
    return {
      id: 1,
      globalCustomerId: globalCustomer.id,
      customer: globalCustomer,
      storeId: 1,
      locationId: 1,
      point: {
        used: 100,
        saved: 1000,
      },
      locations: [
        {
          id: 1,
          locationId: 1,
          note: '노트',
          point: {
            used: 100,
            saved: 1000,
          },
          registeredAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      registeredAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as StoreCustomer;
  }

  getStoreCustomerByUserId(userId: number) {
    const globalCustomer =
      this.globalCustomerService.getGlobalCustomerByUserId(userId);
    return {
      id: 1,
      globalCustomerId: globalCustomer.id,
      customer: globalCustomer,
      storeId: 1,
      locationId: 1,
      point: {
        used: 100,
        saved: 1000,
      },
      locations: [
        {
          id: 1,
          locationId: 1,
          note: '노트',
          point: {
            used: 100,
            saved: 1000,
          },
          registeredAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      registeredAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as StoreCustomer;
  }
}
