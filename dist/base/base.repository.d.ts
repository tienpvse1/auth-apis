import { Response } from 'express';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { BaseSchema } from './base.schema';
export declare class BaseRepository<Doc extends BaseSchema> {
    protected readonly model: Model<Doc>;
    constructor(model: Model<Doc>);
    findOne(filter: FilterQuery<Doc>): Promise<import("src/shared/shared.response").ResponseObject<Doc>>;
    create(item: unknown): Promise<import("src/shared/shared.response").ResponseObject<import("mongoose").HydratedDocument<Doc, {}, {}>>>;
    deleteById(filter: FilterQuery<Doc>): Promise<void>;
    update(query: UpdateQuery<unknown>, filter: FilterQuery<Doc>): Promise<import("src/shared/shared.response").ResponseObject<import("mongodb").UpdateResult>>;
    findAll(): Promise<import("src/shared/shared.response").ResponseObject<Doc[]>>;
    findOneForInternal(filter: FilterQuery<Doc>, response: Response): Promise<import("mongoose").HydratedDocument<Doc, {}, {}>>;
}
