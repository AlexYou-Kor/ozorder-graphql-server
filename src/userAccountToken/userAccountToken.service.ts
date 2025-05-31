import { Injectable } from '@nestjs/common';
import { UserAccountToken } from './userAccountToken.model';

@Injectable()
export class UserAccountTokenService {
  getById(): UserAccountToken {
    return {} as UserAccountToken;
  }
}
