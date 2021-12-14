import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorService } from './error.service';

@Controller('error')
@ApiTags('error')
export class ErrorController {
  constructor(private readonly errorService: ErrorService) {}

  @Get('400')
  @ApiOperation({
    description: 'this will always throw bad request exception',
    summary: 'bad request',
  })
  throw400() {
    throw new BadRequestException();
  }
  @Get('401')
  @ApiOperation({
    description: 'this will always throw  unauthorize exception',
    summary: 'unauthorized',
  })
  throw401() {
    throw new UnauthorizedException();
  }
  @Get('403')
  @ApiOperation({
    description: 'this will always throw forbidden exception',
    summary: 'forbidden resource',
  })
  throw403() {
    throw new ForbiddenException();
  }
  @Get('404')
  @ApiOperation({
    description: 'this will always throw not found exception',
    summary: 'not found',
  })
  throw404() {
    throw new NotFoundException();
  }
  @Get('500')
  @ApiOperation({
    description: 'this will always throw internal server error exception',
    summary: 'internal server error',
  })
  throw500() {
    throw new InternalServerErrorException();
  }
}
