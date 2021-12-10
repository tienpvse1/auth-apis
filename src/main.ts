import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('Auth apis with authorization')
    .setDescription(
      'In order to call api, you must be able to use jwt and CICD workflows',
    )
    .setVersion('1.1')
    .addBearerAuth({
      name: 'Authorization',
      type: 'http',
    })
    .build();
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  await app.listen(8080);
}
bootstrap();
