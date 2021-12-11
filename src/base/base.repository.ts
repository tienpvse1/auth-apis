import {
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { StaticResponse } from 'src/shared/shared.response';
import { BaseSchema } from './base.schema';

const { created, ok } = StaticResponse;
export class BaseRepository<Doc extends BaseSchema> {
  constructor(protected readonly model: Model<Doc>) {}

  async findOne(filter: FilterQuery<Doc>) {
    const data = await this.model.findOne(filter);
    if (data == undefined || data == null)
      throw new NotFoundException('item not found');
    return ok<Doc>(data);
  }

  async create(item: unknown) {
    try {
      Object.assign(item, { createdAt: Date.now(), updatedAt: Date.now() });
      const data = await this.model.create(item);
      return created(data);
    } catch (error) {
      throw new InternalServerErrorException('create failure');
    }
  }

  async deleteById(filter: FilterQuery<Doc>) {
    const result = await this.model.deleteOne(filter);
    if (result.deletedCount <= 0)
      throw new NotFoundException('item not found for delete');
  }

  async update(query: UpdateQuery<unknown>, filter: FilterQuery<Doc>) {
    const updated = await this.model.updateOne(filter, query, { new: true });
    return ok(updated);
  }
  async findAll() {
    const result = await this.model.find();
    return ok<Doc[]>(result);
  }
  async findOneForInternal(filter: FilterQuery<Doc>, response: Response) {
    const data = await this.model.findOne(filter);
    if (data == null || data == undefined) {
      response.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: 'not found',
      });
      return;
    }
    return data;
  }
}
