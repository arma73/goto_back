import { gql } from "apollo-server-express";

export const userDriving = gql`
    type ToggleDrivingModeResponse {
        success: Boolean!
        error: String
    }

    type ReportMovementResponse {
        success: Boolean!
        error: String
    }

    input ReportMovementInput {
        lastOrientation: Float!
        lastLat: Float
        lastLng: Float
    }

    extend type Mutation {
        toggleDrivingMode: ToggleDrivingModeResponse!
        reportMovement(input: ReportMovementInput!): ReportMovementResponse!
    } 
`;
