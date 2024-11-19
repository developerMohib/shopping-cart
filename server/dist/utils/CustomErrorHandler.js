"use strict";
// create a instance for error
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
class CustomErrorHandler extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomErrorHandler.prototype);
    }
}
exports.CustomErrorHandler = CustomErrorHandler;
