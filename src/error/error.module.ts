import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';

@Module({
  controllers: [ErrorController],
  providers: [ErrorService]
})
export class ErrorModule {}
