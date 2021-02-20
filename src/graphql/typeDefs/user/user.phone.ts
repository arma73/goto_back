import { gql } from "apollo-server-express";

export const userPhone = gql`
    type PhoneVerificationResponse {
        success: Boolean!
        error: String
    }

    input PhoneVerificationInput {
        phoneNumber: String!
    }

    extend type Mutation {
        phoneVerification(input: PhoneVerificationInput!): PhoneVerificationResponse!
    }
`;
