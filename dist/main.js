"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Auth apis with authorization')
        .setDescription('In order to call api, you must be able to use jwt and CICD workflows')
        .setVersion('1.1')
        .addBearerAuth({
        name: 'Authorization',
        type: 'http',
    })
        .build();
    app.enableCors({
        credentials: true,
        origin: [
            'http://14.225.254.71:3000',
            'http://localhost:3000',
            'http://localhost:3001',
        ],
    });
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map