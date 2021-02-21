import { IResolvers } from "apollo-server-express";
import merge from "lodash.merge";
import { userResolver } from "./user";

export const resolvers: IResolvers = merge(
    userResolver
);
