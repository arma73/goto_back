import { gql } from "apollo-server-express";

const place = gql`
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
        createdAt: String!
        updatedAt: String
    }
`;
