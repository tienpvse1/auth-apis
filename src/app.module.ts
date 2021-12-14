import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtGuard } from './auth/guard/jwt.guard';
import { RoleGuard } from './auth/guard/role.guard';
import configDatabase from './config/config.database';
import { ErrorModule } from './error/error.module';
import { HttpExceptionFilter } from './exceptions/filter.exception';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configDatabase],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.ME_CONFIG_MONGODB_URL),
    AccountModule,
    AuthModule,
    ProductsModule,
    ErrorModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
