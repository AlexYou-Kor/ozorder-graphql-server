import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { Payload } from './authentication.model';

@Resolver(() => Payload)
export class AuthenticationResolver {
  constructor(private authenticationService: AuthenticationService) {}

  @Query(() => Payload)
  async getAuthenticationToken(
    @Args({ name: 'phone' }) phone: string,
  ): Promise<Payload> {
    const payload =
      await this.authenticationService.getAuthenticationToken(phone);
    return payload;
  }

  @Mutation(() => Payload)
  async refreshAuthenticationToken(
    @Args({ name: 'refreshToken' }) refreshToken: string,
  ): Promise<Payload> {
    const payload =
      this.authenticationService.refreshAuthenticationToken(refreshToken);
    return payload;
  }

  @Mutation(() => Payload)
  async signInByPhone(@Args({ name: 'phone' }) phone: string) {
    const payload = await this.authenticationService.signInByPhone(phone);
    return payload;
  }
}
