import { Query, Resolver } from '@nestjs/graphql';
import { UserAccountToken } from './userAccountToken.model';
import { UserAccountTokenService } from './userAccountToken.service';

@Resolver(() => UserAccountToken)
export class UserAccountTokenResolver {
  constructor(private userAccountTokenService: UserAccountTokenService) {}

  @Query(() => UserAccountToken)
  getUserAccountToken(): UserAccountToken {
    return {} as UserAccountToken;
  }
}
