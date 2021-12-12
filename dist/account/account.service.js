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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const base_service_1 = require("../base/base.service");
const account_repository_1 = require("./account.repository");
let AccountService = class AccountService extends base_service_1.CRUDService {
    constructor(repository) {
        super(repository);
    }
    create(item) {
        Object.assign(item, { password: (0, bcryptjs_1.hashSync)(item.password, 10) });
        return this.repository.create(item);
    }
    async findById(id) {
        const accountResponse = await this.repository.findOne({ id });
        accountResponse.data.password = undefined;
        return accountResponse;
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_repository_1.AccountRepository])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map