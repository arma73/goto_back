import { gql } from "apollo-server-express";

export const message = gql`
    extend type Query {
        Message(id: ID!): Message!
    }

    type Message {
        id: Int!
        text: String!
        chat: Chat!
        user: User!
        createdAt: String!
        updatedAt: String
    }
`;
