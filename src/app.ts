import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

class App {
    public app: GraphQLServer;

    constructor() {
        this.app = new GraphQLServer({});
        this.middlewars();
    }

    private middlewars = (): void => {
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
    };
}

export default new App().app;
