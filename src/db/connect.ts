import "reflect-metadata";
import { getConnectionManager, ConnectionManager, Connection } from "typeorm";
import connectionOptions from "./ormConfig";

const connectionManager: ConnectionManager = getConnectionManager();
const connection: Connection = connectionManager.create(connectionOptions);

export default connection;
