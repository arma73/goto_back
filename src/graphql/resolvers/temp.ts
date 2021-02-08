import { IResolvers } from "apollo-server-express";

const tempResolvers: IResolvers = {
    "Query": {
        "sayBye": (): string => "init",
    },
};

export default tempResolvers;
