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
exports.AccountSchema = exports.Account = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const role_guard_1 = require("../../auth/guard/role.guard");
const base_schema_1 = require("../../base/base.schema");
let Account = class Account extends base_schema_1.BaseSchema {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, role: { required: true, enum: require("../../auth/guard/role.guard").Roles, isArray: true } };
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.Length)(6, 30),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Account.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.Length)(10, 30),
    __metadata("design:type", String)
], Account.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: role_guard_1.Roles, type: Array }),
    (0, class_validator_1.IsEnum)(role_guard_1.Roles, {
        each: true,
    }),
    __metadata("design:type", Array)
], Account.prototype, "role", void 0);
Account = __decorate([
    (0, mongoose_1.Schema)({ collection: 'account' })
], Account);
exports.Account = Account;
exports.AccountSchema = mongoose_1.SchemaFactory.createForClass(Account);
//# sourceMappingURL=account.entity.js.map