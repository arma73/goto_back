import { gql } from "apollo-server-express";

export const ride = gql`
    extend type Query {
        Ride(id: ID!): Ride!
    }

    type Ride {
        id: Int!
        status: String!
        pickUpAddress: String!
        pickUpLat: Float!
        pickUpLng: Float!
        dropOffAddress: String!
        dropOffLat: Float!
        dropOffLng: Float!
        price: Float!
        distance: String!
        duration: String!
        driver: User!
        passenger: User! 
        createdAt: String!
        updateAt: String
    }
`;
