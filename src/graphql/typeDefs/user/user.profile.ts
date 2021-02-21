import { gql } from "apollo-server-express";

export const userProfile = gql`
    type GetMyProfileResponse {
        success: Boolean!
        error: String
        user: User
    }

    extend type Query {
        getMyProfile: GetMyProfileResponse!    
    }
`;
