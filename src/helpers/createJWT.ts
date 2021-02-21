import jwt from "jsonwebtoken";
import { EnvNotAssignedError } from "../errors";

/**
 * @throws {EnvNotAssignedError} - cannot find JWT_TOKEN variable in .env file
 */
export const createJWT = (id: number): string => {
    const { JWT_TOKEN } = process.env;

    if (!JWT_TOKEN) {
        throw new EnvNotAssignedError("JWT_TOKEN");
    }

    const token = jwt.sign({
        id,
    }, JWT_TOKEN);

    return token;
};
