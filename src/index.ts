import "./security/env";
import App from "./app/App";

const { PORT } = process.env;
const application = new App(PORT);

application.start();
