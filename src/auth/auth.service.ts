import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { AccountRepository } from 'src/account/account.repository';
import { HashedPayload } from './dto/hashed.dto';
import { LoginReq } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(private repository: AccountRepository, private jwt: JwtService) {}

  async login(loginReq: LoginReq, response: Response) {
    const account = await this.repository.findOneForInternal(
      {
        email: loginReq.email,
      },
      response,
    );
    if (account == null || account == undefined) return;
    const checkPassword = compareSync(loginReq.password, account.password);
    if (!checkPassword) {
      response.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        message: ReasonPhrases.UNAUTHORIZED,
      });
      return;
    }
    const payload: HashedPayload = {
      id: account.id,
      email: account.email,
      name: account.name,
      role: account.role,
    };
    const token = this.jwt.sign({ payload });

    response.cookie('auth-token', token);
    response.json(payload);
  }
}
