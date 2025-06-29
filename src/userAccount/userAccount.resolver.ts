import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { UserAccountService } from './userAccount.service';
import { UserAccount, UserAccountInput } from './userAccount.model';

// 어떠한 모델에 관련된 Resolver인지 명시
@Resolver(() => UserAccount)
@UseGuards(AuthGuard)
export class UserAccountResolver {
  constructor(private userAccountService: UserAccountService) {}

  @Query(() => [UserAccount])
  getUserAccountsByPhone(
    @Args({ name: 'phone' }) phone: string,
  ): UserAccount[] {
    const userAccounts = this.userAccountService.getUserAccountsByPhone(phone);
    return userAccounts;
  }

  @Query(() => UserAccount)
  getUserAccountByPhone(@Args({ name: 'phone' }) phone: string): UserAccount {
    const userAccount = this.userAccountService.getUserAccountByPhone(phone);
    return userAccount;
  }

  @Mutation(() => UserAccount)
  createUserAccount(
    @Args({ name: 'userAccount' }) userAccount: UserAccountInput,
  ) {
    const createdAccount =
      this.userAccountService.createUserAccount(userAccount);
    return createdAccount;
  }

  @Mutation(() => UserAccount)
  updateUserAccount(
    @Args({ name: 'userAccount' }) userAccount: UserAccountInput,
  ) {
    const updatedAccount =
      this.userAccountService.updateUserAccount(userAccount);
    return updatedAccount;
  }
}
