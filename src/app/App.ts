import express, { Application, Request, Response, NextFunction } from "express";
import { Connection } from "typeorm";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import apolloConfig from "../apollo/config";
import Server from "./Server";
import DataBase from "../db/DataBase";
import { UnableStartError } from "../errors";
import { TEnv } from "../types/custom";
import { decodeJWT } from "../helpers/decodeJWT";

class App extends Server {
    private app: Application;
    private graphqlPath: string;

    constructor(port: TEnv = "8000", graphqlPath = "/api") {
        super(port);
        this.app = express();
        this.graphqlPath = graphqlPath;
    }

    /**
     * @throws {UnableStartError} - Unable to start your application
     */
    public start = async (): Promise<void> => {
        try {
            await this.connectWithDB();
            this.middlewars();
            this.initializeApolloServer();
            this.listen(this.app);
        } catch (error) {
            throw new UnableStartError(error.message);
        }
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
            } else {
                req.user = null;
            }
        }

        next();
    }

    protected initializeApolloServer = (): void => {
        const server = new ApolloServer(apolloConfig);
        server.applyMiddleware({ "app": this.app, "path": this.graphqlPath });
    }

    /**
     * @throws {DataBaseConnectionError} - Unable to connect to database
     */
    private async connectWithDB(): Promise<Connection> {
        const db = new DataBase();
        return db.connect();
    }
}

export default App;
