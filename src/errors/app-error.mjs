import crypto from "crypto";
export class AppError extends Error {
    status;
    code;
    correlationId;
    constructor(code, message, status = 500, correlationId) {
        super(message);
        this.code = code;
        this.status = status;
        this.correlationId = correlationId ?? crypto.randomUUID();
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
//# sourceMappingURL=app-error.mjs.map