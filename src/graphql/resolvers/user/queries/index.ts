import { IResolvers } from "apollo-server-express";
import { getMyProfile } from "./getMyProfile";

export const userQuery: IResolvers = {
    "Query": {
        getMyProfile,
    },
};
