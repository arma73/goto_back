import { IResolvers } from "apollo-server-express";
import merge from "lodash.merge";
import { userResolver } from "./user";
import { placeResolver } from "./place";

export const resolvers: IResolvers = merge(
    userResolver,
    placeResolver
);
