import "./security/env";
import chalk from "chalk";
import server from "./server";

const { PORT } = process.env;

// eslint-disable-next-line no-console
const handleAppStat = () => console.log(chalk.green(`Listening on port ${PORT}`));

server.getConnectDB()
    .then(() => {
        server.getApp().listen(PORT, handleAppStat);
    })
    .catch(error => console.error(error)); // eslint-disable-line no-console
