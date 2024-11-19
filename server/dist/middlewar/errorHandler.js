"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorHandler_1 = require("../utils/CustomErrorHandler");
const errorHandler = (err, req, res, next) => {
    // Check if the error is an instance of CustomError
    if (err instanceof CustomErrorHandler_1.CustomErrorHandler) {
        res.status(err.statusCode).json({ message: err.message });
        return;
    }
    // Handle other types of errors (default to 500 Internal Server Error)
    res.status(500).json({ message: err.message || "Internal Server Error" });
};
exports.default = errorHandler;
