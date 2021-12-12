"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const common_1 = require("@nestjs/common");
const shared_response_1 = require("../shared/shared.response");
const { created, ok } = shared_response_1.StaticResponse;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async findOne(filter) {
        const data = await this.model.findOne(filter);
        if (data == undefined || data == null)
            throw new common_1.NotFoundException('item not found');
        return ok(data);
    }
    async create(item) {
        try {
            Object.assign(item, { createdAt: Date.now(), updatedAt: Date.now() });
            const data = await this.model.create(item);
            return created(data);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('create failure');
        }
    }
    async deleteById(filter) {
        const result = await this.model.deleteOne(filter);
        if (result.deletedCount <= 0)
            throw new common_1.NotFoundException('item not found for delete');
    }
    async update(query, filter) {
        const updated = await this.model.updateOne(filter, query, { new: true });
        return ok(updated);
    }
    async findAll() {
        const result = await this.model.find();
        return ok(result);
    }
    async findOneForInternal(filter, response) {
        const data = await this.model.findOne(filter);
        if (data == null || data == undefined) {
            response.status(common_1.HttpStatus.NOT_FOUND).json({
                code: common_1.HttpStatus.NOT_FOUND,
                message: 'not found',
            });
            return;
        }
        return data;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map