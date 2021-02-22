import { gql } from "apollo-server-express";

export const userDriving = gql`
    type ToggleDrivingModeResponse {
        success: Boolean!
        error: String
    }

    extend type Mutation {
        toggleDrivingMode: ToggleDrivingModeResponse!
    } 
`;
