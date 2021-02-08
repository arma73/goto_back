import dotenv from "dotenv";
import chalk from "chalk";
import app from "./app";

dotenv.config();

const { PORT } = process.env;

// eslint-disable-next-line no-console
const handleAppStat = () => console.log(chalk.green(`Listening on port ${PORT}`));

app.listen(PORT, handleAppStat);
