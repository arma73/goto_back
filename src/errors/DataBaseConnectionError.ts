export class DataBaseConnectionError extends Error {
    constructor(message: string) {
        super(`\n\tDataBaseConnectionError: ${message}`);
    }
}
