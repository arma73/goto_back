export class EnvNotAssignedError extends Error {
    constructor(variable: string) {
        super(`\nEnvNotAssignedError: ${variable} not assigned in env`);
    }
}
