import { gql } from "apollo-server-express";

export const placeCommon = gql`
    extend type Query {
        place(id: ID!): Place!
    }

    type Place {
        id: Int!
        name: String!
        lat: Float!
        lng: Float!
        address: String!
        isFav: Boolean!
        userId: Int!
        user: User!
        createdAt: String!
        updatedAt: String
    }
`;
