import { gql } from "apollo-server-express";

export const userEmail = gql`
    type EmailSignInResponse {
        success: Boolean!
        error: String
        token: String
    }

    input EmailSignInInput {
        email: String!
        password: String!
    }

    extend type Mutation {
        emailSignIn(input: EmailSignInInput!): EmailSignInResponse!
    }
`;
