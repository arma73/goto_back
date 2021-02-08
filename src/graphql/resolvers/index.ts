import { IResolvers } from "apollo-server-express";
import merge from "lodash.merge";
import temp from "./temp";

export const resolvers: IResolvers[] = merge(
    temp
);
