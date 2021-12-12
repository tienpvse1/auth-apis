"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasRoles = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../auth/guard/role.guard");
exports.ROLES_KEY = 'roles';
const HasRoles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.HasRoles = HasRoles;
//# sourceMappingURL=role.decorator.js.map