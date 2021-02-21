import { ApolloServerExpressConfig } from "apollo-server-express";
import { resolvers } from "../graphql/resolvers";
import { typeDefs } from "../graphql/typeDefs";
import { ApolloContext } from "./types";

const config: ApolloServerExpressConfig = {
    resolvers,
    typeDefs,
    "context": ({ req }): ApolloContext => ({ "user": req.user }),
    "introspection": true,
};

export default config;
