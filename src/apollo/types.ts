import User from "../db/entities/User";

export interface ApolloContext {
    "user": User | null;
}
