import { gql } from "apollo-server-express";

export const userConnectFB = gql`
    type FacebookConnectResponse {
        ok: Boolean!
        error: String
        token: String
    }

    extend type Mutation {
        FacebookConnect(
            firstName: String!,
            lastName: String!,
            email: String,
            fbId: String!
        ): FacebookConnectResponse!
    }
`;
