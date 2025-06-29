import { Injectable } from '@nestjs/common';
import * as dateFns from 'date-fns';

import { SmsService } from 'src/common/sms.service';
import { UtilService } from 'src/common/util.service';
import { UserAccountOtp } from './userAccountOtp.model';

const current = new Date();
current.setMinutes(current.getMinutes() + 2);

const TEST_DATA = [
  {
    id: 1,
    phone: '01054220883',
    otp: '000000',
    expireDate: current,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

@Injectable()
export class UserAccountOtpService {
  constructor(
    private readonly smsService: SmsService,
    private readonly utilService: UtilService,
  ) {}

  create(phone: string, otp: string): UserAccountOtp {
    // phone, otp와 현재 시간 기준 +3분으로 expireDate해서 DB에 create
    return {
      ...TEST_DATA[0],
      phone,
      otp,
    };
  }

  sendOtp(phone: string) {
    const otp = this.utilService.getOtp();
    this.create(phone, otp);
    this.smsService.sendOtp(phone, otp);
    return true;
  }

  validateOtp(phone: string, otp: string): boolean {
    const otpDatas = TEST_DATA;
    const validOtpDatas = otpDatas.filter(
      (otpData) =>
        otpData.otp === otp &&
        otpData.phone === phone &&
        dateFns.isBefore(new Date(), otpData.expireDate),
    );
    if (validOtpDatas.length > 0) {
      return true;
    }

    return false;
  }
}
