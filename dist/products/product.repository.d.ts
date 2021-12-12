import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { ProductDocument } from './entities/product.entity';
export declare class ProductRepository extends BaseRepository<ProductDocument> {
    constructor(Model: Model<ProductDocument>);
}
