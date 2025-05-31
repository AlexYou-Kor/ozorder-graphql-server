import { Injectable } from '@nestjs/common';
import { UserAccount } from './userAccount.model';

@Injectable()
export class UserAccountService {
  getAll(): UserAccount[] {
    return [
      {
        id: 1,
        name: '유인섭',
        phone: '01054030883',
        nickname: 'Seop',
        password: '#@#FDSFAA',
        loginedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] as UserAccount[];
  }
}
