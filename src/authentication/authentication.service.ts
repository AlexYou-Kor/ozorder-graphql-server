import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAccountService } from 'src/userAccount/userAccount.service';
import { Payload } from './authentication.model';
import { UserAccount } from 'src/userAccount/userAccount.model';

@Injectable()
export class AuthenticationService {
  constructor(
    private userAccountService: UserAccountService,
    private jwtService: JwtService,
  ) {}

  async getAuthenticationToken(phone: string) {
    const current = new Date();
    const accessExpireDate = new Date();
    accessExpireDate.setHours(current.getHours() + 1);
    const refreshExpireDate = new Date();
    refreshExpireDate.setMonth(current.getMonth() + 1);
    const user = this.userAccountService.getUserAccountByPhone(phone);
    const accessPayload = {
      userId: user.id,
      iat: Math.floor(current.getTime() / 1000),
      exp: Math.floor(accessExpireDate.getTime() / 1000),
      type: 'access',
    };
    const refreshPayload = {
      userId: user.id,
      iat: Math.floor(current.getTime() / 1000),
      exp: Math.floor(refreshExpireDate.getTime() / 1000),
      type: 'refresh',
    };
    const accessToken = await this.jwtService.signAsync(accessPayload);
    const refreshToken = await this.jwtService.signAsync(refreshPayload);
    const payload = {
      accessToken,
      refreshToken,
      user,
      userId: user.id,
      expiresIn: 3600,
    };
    return payload;
  }

  async refreshAuthenticationToken(refreshToken: string) {
    const current = new Date();
    const accessExpireDate = new Date();
    accessExpireDate.setHours(current.getHours() + 1);
    const refreshExpireDate = new Date();
    refreshExpireDate.setMonth(current.getMonth() + 1);
    const payload: Payload = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.JWT_SECRET || '',
    });

    const userId = payload.userId;
    const user = this.userAccountService.getUserAccountById(userId);
    const accessPayload = {
      userId: user.id,
      iat: Math.floor(current.getTime() / 1000),
      exp: Math.floor(accessExpireDate.getTime() / 1000),
      type: 'access',
    };
    const refreshPayload = {
      userId: user.id,
      iat: Math.floor(current.getTime() / 1000),
      exp: Math.floor(refreshExpireDate.getTime() / 1000),
      type: 'refresh',
    };
    const _accessToken = await this.jwtService.signAsync(accessPayload);
    const _refreshToken = await this.jwtService.signAsync(refreshPayload);
    const result = {
      user,
      accessToken: _accessToken,
      refreshToken: _refreshToken,
      userId: user.id,
      expiresIn: 3600,
    };
    return result;
  }

  async signInByPhone(phone: string) {
    let userAccount = this.userAccountService.getUserAccountByPhone(phone);

    if (!userAccount) {
      userAccount = this.userAccountService.createUserAccount({
        phone,
      } as UserAccount);
    }

    const payload = await this.getAuthenticationToken(phone);
    return payload;
  }
}
