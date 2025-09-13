import { Injectable } from '@nestjs/common';
import * as dateFns from 'date-fns';

import { GlobalCustomerService } from 'src/globalCustomer/globalCustomer.service';
import { PointHistory } from './pointHistory.model';

@Injectable()
export class PointHistoryService {
  constructor(private readonly globalCustomerService: GlobalCustomerService) {}
  getTotalPointByUserId(userId: number) {
    const globalCustomer =
      this.globalCustomerService.getGlobalCustomerByUserId(userId);

    const histories = this.getPointHistoriesByGlobalCustomerId(
      globalCustomer.id,
      1,
      100,
    );

    let totalPoint = 0;
    for (let i = 0; i < histories.data.length; i++) {
      if (histories.data[i].type === 'used') {
        totalPoint -= histories.data[i].point;
      } else if (histories.data[i].type === 'saved') {
        totalPoint += histories.data[i].point;
      }
    }
    return totalPoint;
  }

  getPointHistoriesByGlobalCustomerId(
    globalCustomerId: number,
    page: number,
    size: number,
    filters?: {
      page?: number;
      size?: number;
      startDate?: Date;
      endDate?: Date;
    },
  ) {
    const histories: PointHistory[] = [
      {
        id: 1,
        storeId: 2,
        locationId: 1,
        orderId: 1,
        storeCustomerId: 1,
        globalCustomerId,
        type: 'saved',
        point: 1,
        note: '임의 지급',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        storeId: 1,
        locationId: 2,
        orderId: 2,
        storeCustomerId: 3,
        globalCustomerId,
        type: 'used',
        point: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        storeId: 2,
        locationId: 3,
        orderId: 3,
        storeCustomerId: 1,
        globalCustomerId,
        type: 'saved',
        point: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        storeId: 3,
        locationId: 4,
        orderId: 4,
        storeCustomerId: 2,
        globalCustomerId,
        type: 'used',
        point: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        storeId: 4,
        locationId: 5,
        orderId: 5,
        storeCustomerId: 3,
        globalCustomerId,
        type: 'saved',
        point: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    let results = histories;
    if (filters) {
      if (filters.startDate && filters.endDate) {
        results = results.filter((history) => {
          return (
            dateFns.isAfter(history.createdAt, filters.startDate!) &&
            dateFns.isBefore(history.createdAt, filters.endDate!)
          );
        });
      }
    }
    const start = (page - 1) * size;
    const end = page * size + 1;
    results = results.slice(start, end);
    return {
      data: results.slice(start, end - 1),
      nextCursor: results[results.length].id,
    };
  }
}
