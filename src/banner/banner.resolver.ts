import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { Banner, BannerInput } from './banner.model';
import { BannerService } from './banner.service';

// 어떠한 모델에 관련된 Resolver인지 명시
@Resolver(() => Banner)
@UseGuards(AuthGuard)
export class BannerResolver {
  constructor(private readonly bannerService: BannerService) {}

  @Query(() => [Banner])
  getBanners(): Banner[] {
    const result = this.bannerService.getBanners();
    return result;
  }

  @Mutation(() => Banner)
  createBanner(@Args({ name: 'banner' }) banner: BannerInput) {
    const createdBanner = this.bannerService.createBanner(banner);
    return createdBanner;
  }

  @Mutation(() => Banner)
  updateBanner(@Args({ name: 'banner' }) banner: BannerInput) {
    const updatedBanner = this.bannerService.updateBanner(banner);
    return updatedBanner;
  }

  @Mutation(() => Number)
  deleteBanner(@Args({ name: 'id' }) id: number) {
    const deletedBannerId = this.bannerService.deleteBanner(id);
    return deletedBannerId;
  }
}
