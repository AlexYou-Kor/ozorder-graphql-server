import { Injectable } from '@nestjs/common';
import { UserAccount } from './userAccount.model';

@Injectable()
export class UserAccountService {
  getUserAccountsByPhone(phone: string): UserAccount[] {
    return [
      {
        phone,
        id: 1,
        name: '유인섭',
        nickname: 'Seop',
        password: '#@#FDSFAA',
        loginedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] as UserAccount[];
  }

  getUserAccountByPhone(phone: string): UserAccount {
    return {
      phone,
      id: 1,
      name: '유인섭',
      nickname: 'Seop',
      password: '#@#FDSFAA',
      loginedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  getUserAccountById(id: number): UserAccount {
    const result = [
      {
        phone: '01054030883',
        id: 1,
        name: '유인섭',
        nickname: 'Seop',
        password: '#@#FDSFAA',
        loginedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return result.filter((item) => item.id === id)[0];
  }

  createUserAccount(userAccount: UserAccount) {
    return userAccount;
  }

  updateUserAccount(userAccount: UserAccount) {
    return userAccount;
  }
}
