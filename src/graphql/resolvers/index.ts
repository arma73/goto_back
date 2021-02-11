import { IResolvers } from "apollo-server-express";
import merge from "lodash.merge";
import user from "./user";

export const resolvers: IResolvers[] = merge(
    user
);
