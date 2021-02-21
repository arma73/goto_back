import jwt from "jsonwebtoken";
import { EnvNotAssignedError } from "../errors";
import User from "../db/entities/User";

export const decodeJWT = async (
    token: string
): Promise<User | undefined> => {
    try {
        const { JWT_TOKEN } = process.env;
        if (!JWT_TOKEN) {
            throw new EnvNotAssignedError("JWT_TOKEN");
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwt.verify(token, JWT_TOKEN);
        if (typeof decoded === "object") {
            const { id } = decoded;
            const user = await User.findOne({ id });
            return user;
        }

        return undefined;
    } catch (error) {
        return undefined;
    }
};
