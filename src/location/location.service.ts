import { Injectable } from '@nestjs/common';
import { Location } from './location.model';

@Injectable()
export class LocationService {
  getLocationById(id: number) {
    const location = {
      id,
      storeId: 1,
      name: '망포역점',
      phone: '01054030883',
      email: 'dkdn1004@naver.com',
      representative: '유인섭',
      businessHour: {
        id: 1,
        locationId: id,
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
    return location;
  }
}
