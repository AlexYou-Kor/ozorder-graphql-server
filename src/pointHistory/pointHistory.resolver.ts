import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import GraphQLJSON from 'graphql-type-json';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { PointHistoriesOutput, PointHistory } from './pointHistory.model';
import { PointHistoryService } from './pointHistory.service';

@Resolver(() => PointHistory)
@UseGuards(AuthGuard)
export class PointHistoryResolver {
  constructor(private pointHistoryService: PointHistoryService) {}

  @Query(() => Int)
  getTotalPointByUserId(
    @Args({ name: 'userId', type: () => ID }) userId: number,
  ) {
    const totalPoint = this.pointHistoryService.getTotalPointByUserId(userId);
    return totalPoint;
  }

  @Query(() => PointHistoriesOutput)
  getPointHistoriesByGlobalCustomerId(
    @Args({ name: 'globalCustomerId', type: () => ID })
    globalCustomerId: number,
    @Args({ name: 'page', type: () => Int })
    page: number,
    @Args({ name: 'size', type: () => Int })
    size: number,
    @Args({ name: 'filters', type: () => GraphQLJSON, nullable: true })
    filters?: {
      startDate?: Date;
      endDate?: Date;
    },
  ) {
    const result = this.pointHistoryService.getPointHistoriesByGlobalCustomerId(
      globalCustomerId,
      page,
      size,
      filters,
    );
    return result;
  }
}
