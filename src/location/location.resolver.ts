import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { Location } from './location.model';
import { LocationService } from './location.service';

@Resolver(() => Location)
@UseGuards(AuthGuard)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => Location)
  getLocationById(@Args({ name: 'id', type: () => ID }) id: number) {
    const location = this.locationService.getLocationById(id);
    return location;
  }
}
