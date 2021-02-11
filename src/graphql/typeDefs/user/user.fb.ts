import { gql } from "apollo-server-express";

export const userConnectFB = gql`
    type FacebookConnectResponse {
        success: Boolean!
        error: String
        token: String
    }

    input ConnectFBInput {
        firstName: String!,
        lastName: String!,
        email: String,
        fbId: String!
    }

    extend type Mutation {
        facebookConnect(input: ConnectFBInput!): FacebookConnectResponse!
    }
`;
