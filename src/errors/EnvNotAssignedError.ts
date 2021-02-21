export class EnvNotAssignedError extends Error {
    constructor(variable: string) {
        super(`${variable} not assigned in env`);
    }
}
