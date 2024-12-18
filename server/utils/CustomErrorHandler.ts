
// create a instance for error

export class CustomErrorHandler extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode;

        Object.setPrototypeOf(this, CustomErrorHandler.prototype)
    }
}