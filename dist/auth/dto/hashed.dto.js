"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedPayload = void 0;
const openapi = require("@nestjs/swagger");
class HashedPayload {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, id: { required: true, type: () => String }, name: { required: true, type: () => String }, role: { required: true, enum: require("../guard/role.guard").Roles, isArray: true } };
    }
}
exports.HashedPayload = HashedPayload;
//# sourceMappingURL=hashed.dto.js.map