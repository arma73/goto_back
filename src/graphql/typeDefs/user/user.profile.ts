import { gql } from "apollo-server-express";

export const userProfile = gql`
    type GetMyProfileResponse {
        success: Boolean!
        error: String
    }

    type UpdateMyProfileResponse {
        success: Boolean!
        error: String
    }

    input UpdateMyProfileInput {
        firstName: String
        lastName: String
        email: String
        password: String
        profilePhoto: String
        age: Int
    }

    extend type Mutation {
        updateMyProfile(input: UpdateMyProfileInput!): UpdateMyProfileResponse!
    }

    extend type Query {
        getMyProfile: GetMyProfileResponse!    
    }
`;
