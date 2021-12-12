import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { AccountRepository } from 'src/account/account.repository';
import { LoginReq } from './dto/login.dto';
export declare class AuthService {
    private repository;
    private jwt;
    constructor(repository: AccountRepository, jwt: JwtService);
    login(loginReq: LoginReq, response: Response): Promise<void>;
}
