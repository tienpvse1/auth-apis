import { Roles } from 'src/auth/guard/role.guard';
export declare const ROLES_KEY = "roles";
export declare const HasRoles: (...roles: Roles[]) => import("@nestjs/common").CustomDecorator<string>;
