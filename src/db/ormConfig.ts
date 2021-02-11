import { ConnectionOptions } from "typeorm";
import { join } from "path";

const { DB_ENDPOINT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const connectionOptions: ConnectionOptions = {
    "type": "postgres",
    "synchronize": true,
    "logging": true,
    "entities": [join(__dirname, "entities", "**", "*.ts")],
    "port": 5432,
    "database": DB_NAME,
    "host": DB_ENDPOINT,
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "cli": {
        "entitiesDir": "./entities"
    },
};

export default connectionOptions;
