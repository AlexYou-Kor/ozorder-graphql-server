import { Module } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';

import { UserAccountModule } from 'src/userAccount/userAccount.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserAccountModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || '',
    }),
  ],
  providers: [AuthenticationResolver, AuthenticationService],
})
export class AuthenticationModule {}
