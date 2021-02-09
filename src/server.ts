import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { Connection } from "typeorm";
import connectDB from "./db/connect";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import apolloConfig from "./apollo/config";

class Server {
    private connectDB: Connection = connectDB;
    private app: Application = express();

    constructor() {
        this.middlewars();
        this.initializeApolloServer();
    }

    private initializeApolloServer() {
        const server = new ApolloServer(apolloConfig);
        server.applyMiddleware({ "app": this.app, "path": "/api" });
    }

    private middlewars = (): void => {
        this.app.use(cors());
        this.app.use(logger("dev"));
        this.app.use(helmet({
            "contentSecurityPolicy": process.env.NODE_ENV === "production" ? undefined : false
        }));
    };

    public getApp(): Application {
        return this.app;
    }

    public getConnectDB(): Promise<Connection> {
        return this.connectDB.connect();
    }
}

export default new Server();
