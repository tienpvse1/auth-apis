import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginReq } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginReq: LoginReq, response: Response): Promise<void>;
}
