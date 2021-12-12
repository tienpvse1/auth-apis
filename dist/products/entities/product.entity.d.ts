import { Document } from 'mongoose';
import { BaseSchema } from 'src/base/base.schema';
export declare type ProductDocument = Product & Document;
export declare class Product extends BaseSchema {
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any, any>, any>;
