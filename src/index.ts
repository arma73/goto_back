import "./security/env";
import Server from "./app/Server";

const { PORT } = process.env;
const server = new Server(PORT);

server.start();
