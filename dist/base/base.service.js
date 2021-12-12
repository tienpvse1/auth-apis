"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDService = void 0;
class CRUDService {
    constructor(repository) {
        this.repository = repository;
    }
    create(item) {
        return this.repository.create(item);
    }
    findById(id) {
        return this.repository.findOne({ id });
    }
    update(item, id) {
        return this.repository.update(item, { id });
    }
    delete(id) {
        return this.repository.deleteById({ id });
    }
    findAll() {
        return this.repository.findAll();
    }
}
exports.CRUDService = CRUDService;
//# sourceMappingURL=base.service.js.map