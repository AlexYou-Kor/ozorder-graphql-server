import { Query, Resolver } from '@nestjs/graphql';
import { UserAccountService } from './userAccount.service';
import { UserAccount } from './userAccount.model';

// 어떠한 모델에 관련된 Resolver인지 명시
@Resolver(() => UserAccount)
export class UserAccountResolver {
  constructor(private userAccountService: UserAccountService) {}

  @Query(() => [UserAccount])
  getUserAccounts(): UserAccount[] {
    const userAccount = this.userAccountService.getAll();
    return userAccount;
  }
}
