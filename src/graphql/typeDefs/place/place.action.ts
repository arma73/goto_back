import { gql } from "apollo-server-express";

export const placeAction = gql`
    type AddPlaceResponse {
        success: Boolean!
        error: String
    }

    type EditPlaceResponse {
        success: Boolean!
        error: String
    }

    type DeletePlaceResponse {
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

    input EditPlaceInput {
        placeId: Int!
        name: String
        isFav: Boolean
    }

    input DeletePlaceInput {
        placeId: Int!
    }

    extend type Mutation {
        addPlace(input: AddPlaceInput!): AddPlaceResponse!
        editPlace(input: EditPlaceInput!): EditPlaceResponse!
        deletePlace(input: DeletePlaceInput!): DeletePlaceResponse!
    }
`;
