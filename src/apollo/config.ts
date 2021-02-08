import { ApolloServerExpressConfig } from "apollo-server-express";
import { resolvers } from "../graphql/resolvers";
import { typeDefs } from "../graphql/typeDefs";

const config: ApolloServerExpressConfig = {
    resolvers,
    typeDefs,
    context: ({ req, res }) => ({ req, res }),
};

export default config;
