import { gql } from "apollo-server-express";

export const user = gql`
    type User {
        id: Int!
        email: String
        verifiedEmail: Boolean!
        firstName: String!
        lastName: String!
        age: Int
        password: String
        phoneNumber: String
        verifiedPhoneNumber: Boolean!
        profilePhoto: String
        fullName: String
        idDriving: Boolean!
        isRiding: Boolean!
        isTaken: Boolean!
        lastLng: Float
        lastLat: Float
        lastOrientation: Float
        chat: Chat
        messages: [Message]
        verifications: [Verify]
        ridesAsPassenger: [Ride]
        ridesAsDriver: [Ride]
        createdAt: String!
        updatedAt: String
    }
    
    extend type Query {
        user(id: ID!): User! 
    }
`;
