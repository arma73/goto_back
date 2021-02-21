import { gql } from "apollo-server-express";

export const userPhone = gql`
    type PhoneVerificationResponse {
        success: Boolean!
        error: String
    }

    type CompletePhoneVerificationResponse {
        success: Boolean!
        error: String
        token: String
    }

    input PhoneVerificationInput {
        phoneNumber: String!
    }

    input CompletePhoneVerificationInput {
        phoneNumber: String!
        key: String!
    }

    extend type Mutation {
        phoneVerification(input: PhoneVerificationInput!): PhoneVerificationResponse!
        completePhoneVerification(
            input: CompletePhoneVerificationInput!
        ): CompletePhoneVerificationResponse!
    }
`;
