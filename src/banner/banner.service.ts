import { Injectable } from '@nestjs/common';
import { Banner } from './banner.model';

@Injectable()
export class BannerService {
  getBanners() {
    return [] as Banner[];
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
