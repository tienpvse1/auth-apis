import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { AccountDocument } from './entities/account.entity';
export declare class AccountRepository extends BaseRepository<AccountDocument> {
    constructor(model: Model<AccountDocument>);
}
