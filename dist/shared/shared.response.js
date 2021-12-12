"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticResponse = exports.ResponseObject = void 0;
const http_status_codes_1 = require("http-status-codes");
class ResponseObject {
    constructor(initial) {
        Object.assign(this, initial);
    }
}
exports.ResponseObject = ResponseObject;
class StaticResponse {
    static created(data) {
        return new ResponseObject({
            code: http_status_codes_1.StatusCodes.CREATED,
            message: http_status_codes_1.ReasonPhrases.CREATED,
            data,
        });
    }
    static ok(data) {
        return new ResponseObject({
            code: http_status_codes_1.StatusCodes.OK,
            message: http_status_codes_1.ReasonPhrases.OK,
            data,
        });
    }
}
exports.StaticResponse = StaticResponse;
//# sourceMappingURL=shared.response.js.map