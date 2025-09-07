import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { Order } from './order.model';
import { OrderService } from './order.service';

@Resolver(() => Order)
@UseGuards(AuthGuard)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order])
  getPaidOrdersByCustomerId(
    @Args({ name: 'customerId', type: () => ID }) customerId: number,
  ) {
    const orders = this.orderService.getPaidOrdersByCustomerId(customerId);
    return orders;
  }

  @Query(() => [Order])
  getRecentOrdersByCustomerId(
    @Args({ name: 'customerId', type: () => ID }) customerId: number,
  ) {
    const orders = this.orderService.getRecentOrdersByCustomerId(customerId);
    return orders;
  }

  @Query(() => Order)
  getOrderById(@Args({ name: 'id', type: () => ID }) id: number) {
    const order = this.orderService.getOrderById(id);
    return order;
  }
}
