import { Options } from "graphql-yoga";
import chalk from "chalk";
import app from "./app";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT = "/playground";
const GRAPHQL_ENDPOINT = "/graphql";

const appOptions: Options = {
    "port": PORT,
    "playground": PLAYGROUND_ENDPOINT,
    "endpoint": GRAPHQL_ENDPOINT,
};

const handleAppStat = () =>
    console.log(chalk.green(`Listening on port ${PORT}`)); // eslint-disable-line no-console

app.start(appOptions, handleAppStat);
