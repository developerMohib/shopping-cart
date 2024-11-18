import { NextFunction, Request, Response } from "express";
import { CustomErrorHandler } from "../utils/CustomErrorHandler";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // Check if the error is an instance of CustomError
    if (err instanceof CustomErrorHandler) {
        res.status(err.statusCode).json({ message: err.message })
        return;
    }
    // Handle other types of errors (default to 500 Internal Server Error)
    res.status(500).json({ message: err.message || "Internal Server Error" });
}

export default errorHandler;