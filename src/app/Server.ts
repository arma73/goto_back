/* eslint-disable no-console */
import express, { Application, Request, Response, NextFunction } from "express";
import { Server as HTTPServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { Connection } from "typeorm";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import chalk from "chalk";
import DataBase from "../db/DataBase";
import apolloConfig from "../apollo/config";
import { CloseServerError } from "../errors";
import { TEnv } from "../types/custom";
import { decodeJWT } from "../helpers/decodeJWT";

class Server {
    private app: Application;
    private server: HTTPServer;
    private port: TEnv;
    private graphqlPath: string;

    constructor(port: TEnv = "8000", graphqlPath = "/api") {
        this.app = express();
        this.port = port;
        this.graphqlPath = graphqlPath;
    }

    public start = async (): Promise<void> => {
        try {
            await this.connectWithDB();
            this.middlewars();
            this.initializeApolloServer();
            this.server = this.getApp()
                .listen(this.port, this.handleStat);
        } catch (error) {
            console.error(chalk.red(error));
        }
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

    private initializeApolloServer = (): void => {
        const server = new ApolloServer(apolloConfig);
        server.applyMiddleware({ "app": this.app, "path": this.graphqlPath });
    }

    private middlewars = (): void => {
        this.app.use(cors());
        this.app.use(logger("dev"));
        this.app.use(helmet({
            "contentSecurityPolicy": process.env.NODE_ENV === "production" ? undefined : false,
        }));
        this.app.use(this.jwt);
    }

    private jwt = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const token = req.get("X-JWT");

        if (token) {
            const user = await decodeJWT(token);

            if (user) {
                req.user = user;
            }
        }

        next();
    }

    private handleStat = (): void => {
        console.log(chalk.green(`Listening on port ${this.port}`));
    }

    private getApp(): Application {
        return this.app;
    }

    /**
     * @throws {DataBaseConnectionError} - Unable to connect to database
     */
    private async connectWithDB(): Promise<Connection> {
        const db = new DataBase();
        return db.connect();
    }
}

export default Server;
