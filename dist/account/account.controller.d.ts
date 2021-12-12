/// <reference types="mongoose" />
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(account: Account): Promise<import("../shared/shared.response").ResponseObject<Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>>;
    findOne(id: string): Promise<import("../shared/shared.response").ResponseObject<import("./entities/account.entity").AccountDocument>>;
    findOneForAdmin(): Promise<import("../shared/shared.response").ResponseObject<(Account & import("mongoose").Document<any, any, any>)[]>>;
    update(id: string, account: Partial<Account>): Promise<import("../shared/shared.response").ResponseObject<import("mongodb").UpdateResult>>;
    remove(id: string): Promise<void>;
}
