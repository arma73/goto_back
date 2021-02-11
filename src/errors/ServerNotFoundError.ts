import chalk from "chalk";
import { ISuperErrorArgs } from "./types";

export class ServerNotFoundError extends Error {
    constructor({
        message = "",
        port,
    }: ISuperErrorArgs) {
        super(
            "\n\tServerNotFoundError: a running server was not found on the port: " + port +
            `.\n${message}`
        );
        this.message = chalk.red(this.message);
        this.name = chalk.red(this.name);
        this.stack = chalk.red(this.stack);
    }
}
