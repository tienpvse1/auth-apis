import { Document } from 'mongoose';
import { BaseRepository } from './base.repository';
import { BaseSchema } from './base.schema';
export declare class CRUDService<Schema extends BaseSchema, Repository extends BaseRepository<Schema & Document>> {
    protected repository: Repository;
    constructor(repository: Repository);
    create(item: Schema): Promise<import("../shared/shared.response").ResponseObject<import("mongoose").HydratedDocument<Schema & Document<any, any, any>, {}, {}>>>;
    findById(id: string): Promise<import("../shared/shared.response").ResponseObject<Schema & Document<any, any, any>>>;
    update(item: Partial<Schema>, id: string): Promise<import("../shared/shared.response").ResponseObject<import("mongodb").UpdateResult>>;
    delete(id: string): Promise<void>;
    findAll(): Promise<import("../shared/shared.response").ResponseObject<(Schema & Document<any, any, any>)[]>>;
}
