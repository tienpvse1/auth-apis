import { CRUDService } from 'src/base/base.service';
import { AccountRepository } from './account.repository';
import { Account } from './entities/account.entity';
export declare class AccountService extends CRUDService<Account, AccountRepository> {
    constructor(repository: AccountRepository);
    create(item: Account): Promise<import("../shared/shared.response").ResponseObject<Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>>;
    findById(id: string): Promise<import("../shared/shared.response").ResponseObject<import("./entities/account.entity").AccountDocument>>;
}
