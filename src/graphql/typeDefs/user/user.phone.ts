import { gql } from "apollo-server-express";

export const userPhone = gql`
    type PhoneVerificationResponse {
        success: Boolean!
        error: String
    }

    type CompletePhoneVerificationResponse implements PhoneVerificationResponse {
        token: String
    }

    input PhoneVerificationInput {
        phoneNumber: String!
    }

    input CompletePhoneVerificationInput implements PhoneVerificationInput {
        key: String!
    }

    extend type Mutation {
        phoneVerification(input: PhoneVerificationInput!): PhoneVerificationResponse!
        completePhoneVerification(
            input: CompletePhoneVerificationInput
        ): CompletePhoneVerificationResponse
    }
`;
