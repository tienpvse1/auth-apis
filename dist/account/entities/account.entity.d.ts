import { Document } from 'mongoose';
import { Roles } from 'src/auth/guard/role.guard';
import { BaseSchema } from 'src/base/base.schema';
export declare type AccountDocument = Account & Document;
export declare class Account extends BaseSchema {
    name: string;
    email: string;
    password: string;
    role: Roles[];
}
export declare const AccountSchema: import("mongoose").Schema<Document<Account, any, any>, import("mongoose").Model<Document<Account, any, any>, any, any, any>, any>;
