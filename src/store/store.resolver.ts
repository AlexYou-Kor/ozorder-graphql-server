import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { Store } from './store.model';
import { StoreService } from './store.service';

@Resolver(() => Store)
@UseGuards(AuthGuard)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => Store)
  getStoreById(@Args({ name: 'id', type: () => ID }) id: number) {
    const store = this.storeService.getStoreById(id);
    return store;
  }
}
