"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const http_status_codes_1 = require("http-status-codes");
const account_repository_1 = require("../account/account.repository");
let AuthService = class AuthService {
    constructor(repository, jwt) {
        this.repository = repository;
        this.jwt = jwt;
    }
    async login(loginReq, response) {
        const account = await this.repository.findOneForInternal({
            email: loginReq.email,
        }, response);
        if (account == null || account == undefined)
            return;
        const checkPassword = (0, bcryptjs_1.compareSync)(loginReq.password, account.password);
        if (!checkPassword) {
            response.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                code: http_status_codes_1.StatusCodes.UNAUTHORIZED,
                message: http_status_codes_1.ReasonPhrases.UNAUTHORIZED,
            });
            return;
        }
        const payload = {
            id: account.id,
            email: account.email,
            name: account.name,
            role: account.role,
        };
        const token = this.jwt.sign({ payload });
        response.cookie('auth-token', token);
        response.json(payload);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_repository_1.AccountRepository, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map