import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';
import { LoginReq } from './dto/login.dto';

@Controller('auth')
@ApiTags('Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @Public()
  async login(@Body() loginReq: LoginReq, @Res() response: Response) {
    this.authService.login(loginReq, response);
  }

  @Get('something')
  @Public()
  async getSomething() {
    return { message: 'this is something' };
  }
}
