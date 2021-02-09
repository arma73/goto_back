import { gql } from "apollo-server-express";

const chat = gql`
    extend type Query {
        Chat(id: ID!): Chat!
    }

    type Chat {
        id: Int!
        messages: [Message]!
        participants: [User]!
        createdAt: String!
        updatedAt: String
    }
`;
