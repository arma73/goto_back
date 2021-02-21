/* eslint-disable no-console */
import { Application } from "express";
import { Server as HTTPServer } from "http";
import chalk from "chalk";
import { CloseServerError } from "../errors";
import { TEnv } from "../types/custom";

abstract class Server {
    protected port: TEnv;
    private server: HTTPServer;

    abstract start: () => Promise<void>;

    constructor(port: TEnv) {
        this.port = port;
    }

    /**
     * @throws {CloseServerError} - the server did not start before shutdown
     */
    public close = async (): Promise<HTTPServer> => {
        if (this.server instanceof HTTPServer) {
            console.log(chalk.green(`\nthe server was closed successfully on port ${this.port}`));
            return this.server.close();
        }

        throw new CloseServerError({ "port": this.port });
    }

    protected listen = (app: Application): void => {
        this.server = app
            .listen(this.port, this.handleStat);
    }

    private handleStat = (): void => {
        console.log(chalk.green(`Listening on port ${this.port}`));
    }
}

export default Server;
