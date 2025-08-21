import crypto from "crypto";

export class AppError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly correlationId: string;

  constructor(code: string, message: string, status = 500, correlationId?: string) {
    super(message);
    this.code = code;
    this.status = status;
    this.correlationId = correlationId ?? crypto.randomUUID();
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
