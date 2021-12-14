import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ErrorService } from './error.service';

@Controller('error')
export class ErrorController {
  constructor(private readonly errorService: ErrorService) {}

  @Get('400')
  throw400() {
    throw new BadRequestException();
  }
  @Get('401')
  throw401() {
    throw new UnauthorizedException();
  }
  @Get('403')
  throw403() {
    throw new ForbiddenException();
  }
  @Get('404')
  throw404() {
    throw new NotFoundException();
  }
  @Get('500')
  throw500() {
    throw new InternalServerErrorException();
  }
}
