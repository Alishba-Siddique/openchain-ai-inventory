export declare class AppError extends Error {
    readonly status: number;
    readonly code: string;
    readonly correlationId: string;
    constructor(code: string, message: string, status?: number, correlationId?: string);
}
//# sourceMappingURL=app-error.d.mts.map