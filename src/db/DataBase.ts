/* eslint-disable no-console */
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import chalk from "chalk";
import connectionOptions from "./ormConfig";
import { DataBaseConnectionError } from "../errors";

class DataBase {
    private repetitions: number;

    constructor(repetitions = 5) {
        this.repetitions = repetitions;
    }

    /**
     * @throws {DataBaseConnectionError} - Unable to connect to database
     */
    public connect = async (): Promise<Connection> => {
        while (this.repetitions) {
            const connection: Connection | null = await this.getConnectDB();
            if (connection) {
                return connection;
            }
        }

        throw new DataBaseConnectionError("Unable to connect to database");
    }

    private getConnectDB = async (): Promise<Connection | null> => {
        try {
            const connection: Promise<Connection> = createConnection(connectionOptions);
            return connection;
        } catch (error) {
            console.error(chalk.red(error));
            this.repetitions = this.repetitions - 1;

            if (this.repetitions) {
                console.log(chalk.yellow(`retries left: ${this.repetitions}`));
                console.log(chalk.yellow("please wait 5 seconds"));
                await new Promise(resolve => setTimeout(resolve, 5000));
                console.log(chalk.green("reconnect to the database"));
            }

            return null;
        }
    }

}

export default DataBase;
