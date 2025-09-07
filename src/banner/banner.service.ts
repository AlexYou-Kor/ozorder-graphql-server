import { Injectable } from '@nestjs/common';
import { Banner } from './banner.model';

@Injectable()
export class BannerService {
  getBanners() {
    const banners = [
      {
        id: 1,
        order: 1,
        imageUrl:
          'https://consumer-rn-dev.s3.ap-northeast-2.amazonaws.com/public/1/banner_1.jpg',
        createdAt: new Date(),
        linkUrl: 'https://google.com',
        updatedAt: new Date(),
        reservedAt: new Date(),
      },
      {
        id: 2,
        order: 2,
        imageUrl:
          'https://consumer-rn-dev.s3.ap-northeast-2.amazonaws.com/public/1/banner_3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        reservedAt: new Date(),
      },
      {
        id: 3,
        order: 2,
        imageUrl:
          'https://consumer-rn-dev.s3.ap-northeast-2.amazonaws.com/public/1/banner_2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        order: 3,
        imageUrl:
          'https://consumer-rn-dev.s3.ap-northeast-2.amazonaws.com/public/1/banner_3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] as Banner[];
    return banners;
  }

  createBanner(banner: Banner) {
    return banner;
  }

  updateBanner(banner: Banner) {
    return banner;
  }

  deleteBanner(id: number) {
    return id;
  }
}
