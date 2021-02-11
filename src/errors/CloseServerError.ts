import { ServerNotFoundError } from "./ServerNotFoundError";
import { ISuperErrorArgs } from "./types";

export class CloseServerError extends ServerNotFoundError {
    constructor({
        message = "",
        port
    }: ISuperErrorArgs) {
        super({
            "message":
                "\tCloseServerError: it is impossible to close the server." +
                "\n\tCloseServerError: the server did not start before shutdown." + `\n${message}`,
            port,
        });
    }
}
