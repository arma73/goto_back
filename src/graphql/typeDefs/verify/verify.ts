import { gql } from "apollo-server-express";

export const verify = gql`
    type Verify {
        id: Int!
        target: String!
        payload: String!
        key: String!
        verified: Boolean!
        createdAt: String!
        updatedAt: String
    }

    extend type Query {
        Verify(id: ID!): Verify 
    }
`;
