export class UnableStartError extends Error {
    constructor(message: string) {
        super(`\nAppNotStartError: ${message}`);
    }
}
