import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from 'src/base/base.schema';
export type ProductDocument = Product & Document;

@Schema({ collection: 'product' })
export class Product extends BaseSchema {}

export const ProductSchema = SchemaFactory.createForClass(Product);
