"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const account_repository_1 = require("../account/account.repository");
const account_entity_1 = require("../account/entities/account.entity");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const strategy_jwt_1 = require("./strategies/strategy.jwt");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, account_repository_1.AccountRepository, strategy_jwt_1.JwtStrategy],
        imports: [
            jwt_1.JwtModule.register({
                secret: 'sosecretthatyouwillneverfindout',
                signOptions: {
                    expiresIn: '1d',
                },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: account_entity_1.Account.name, schema: account_entity_1.AccountSchema }]),
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map