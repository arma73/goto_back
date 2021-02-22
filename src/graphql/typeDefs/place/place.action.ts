import { gql } from "apollo-server-express";

export const placeAction = gql`
    type AddPlaceResponse {
        success: Boolean!
        error: String
    }

    input AddPlaceInput {
        name: String!
        lat: Float!
        lng: Float!
        address: String!
        isFav: Boolean!
    }

    extend type Mutation {
        addPlace(input: AddPlaceInput!): AddPlaceResponse! 
    }
`;
