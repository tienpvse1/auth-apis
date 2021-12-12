import { Roles } from '../guard/role.guard';
export declare class HashedPayload {
    email: string;
    id: string;
    name: string;
    role: Roles[];
}
