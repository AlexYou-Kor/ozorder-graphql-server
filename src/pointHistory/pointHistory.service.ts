import { Injectable } from '@nestjs/common';
import * as dateFns from 'date-fns';

import { GlobalCustomerService } from 'src/globalCustomer/globalCustomer.service';
import { PointHistory } from './pointHistory.model';
import { Store } from 'src/store/store.model';
import { Location } from 'src/location/location.model';

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
    const store = {
      id: 1,
      name: '해피마켓',
      phone: '01054030883',
      email: 'dkdn1004@naver.com',
      representative: '유인섭',
      businessNumber: '123123123123',
      address: '경기 수원시 영통구 영통로 90번길',
      zip: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Store;
    const location = {
      id: 1,
      storeId: 1,
      name: '망포역점',
      phone: '01054030883',
      email: 'dkdn1004@naver.com',
      representative: '유인섭',
      businessHour: {
        id: 1,
        locationId: 1,
        sun: { start: '10:00', end: '21:00' },
        mon: { start: '10:00', end: '21:00' },
        tue: { start: '10:00', end: '20:00' },
        wed: { start: '10:00', end: '21:00' },
        thu: { start: '10:00', end: '21:00' },
        fri: { start: '10:00', end: '21:00' },
        sat: { start: '10:00', end: '19:00' },
      },
      businessNumber: '123123123123',
      address: '경기 수원시 영통구 영통로 90번길',
      zip: '231',
      lat: 23.894,
      lng: 123.3299,
      seat: 7,
      parking: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Location;
    const histories: PointHistory[] = [
      {
        id: 1,
        storeId: 2,
        store: {
          ...store,
          name: '해피슈퍼마켓',
        },
        locationId: 1,
        location: {
          ...location,
          name: '망포역',
        },
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
        store: {
          id: 1,
          phone: '01054030883',
          email: 'dkdn1004@naver.com',
          representative: '유인섭',
          businessNumber: '123123123123',
          address: '경기 수원시 영통구 영통로 90번길',
          zip: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: '달콤',
        },
        locationId: 2,
        location: {
          ...location,
          name: '서현역',
        },
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
        store: {
          name: '달콤',
          id: 1,
          phone: '01054030883',
          email: 'dkdn1004@naver.com',
          representative: '유인섭',
          businessNumber: '123123123123',
          address: '경기 수원시 영통구 영통로 90번길',
          zip: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        locationId: 3,
        location: {
          ...location,
          name: '망포역',
        },
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
        store: {
          name: 'CU',
          id: 1,
          phone: '01054030883',
          email: 'dkdn1004@naver.com',
          representative: '유인섭',
          businessNumber: '123123123123',
          address: '경기 수원시 영통구 영통로 90번길',
          zip: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        locationId: 4,
        location: {
          ...location,
          name: 'ㅎㅎ점',
        },
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
        store: {
          name: 'GS25',
          id: 1,
          phone: '01054030883',
          email: 'dkdn1004@naver.com',
          representative: '유인섭',
          businessNumber: '123123123123',
          address: '경기 수원시 영통구 영통로 90번길',
          zip: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        locationId: 5,
        location: {
          ...location,
          name: '영통역점',
        },
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
