import { gql } from "apollo-server-express";

export const userEmail = gql`
    type EmailSignInResponse {
        success: Boolean!
        error: String
        token: String
    }

    type EmailSignUpResponse {
        success: Boolean!
        error: String
        token: String
    }

    type RequestEmailVerificationResponse {
        success: Boolean!
        error: String
    }

    input EmailSignInInput {
        email: String!
        password: String!
    }

    input EmailSignUpInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        profilePhoto: String!
        age: Int!
        phoneNumber: String!
    }

    extend type Mutation {
        emailSignIn(input: EmailSignInInput!): EmailSignInResponse!
        emailSignUp(input: EmailSignUpInput!): EmailSignUpResponse!
        requestEmailVerification: RequestEmailVerificationResponse!
    }
`;
