import User from "../src/db/entities/User";

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
