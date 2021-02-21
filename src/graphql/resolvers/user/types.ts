import User from "../../../db/entities/User";

interface CoreResponse {
    "success": boolean;
    "error": string | null;
    "token": string | null;
}

interface FaceboookConnectMutationInput {
    "firstName": string;
    "lastName": string;
    "email": string | null;
    "fbId": string;
}

export interface FacebookConnectMutationArgs {
    "input": FaceboookConnectMutationInput;
}

export interface FacebookConnectResponse extends CoreResponse {}

interface EmailSignInMutationInput {
    "email": string;
    "password": string;
}

export interface EmailSignInMutationArgs {
    "input": EmailSignInMutationInput;
}

export interface EmailSignInResponse extends CoreResponse {}

interface PhoneVerificationInput {
    "phoneNumber": string;
}

export interface PhoneVerificationMutationArgs {
    "input": PhoneVerificationInput;
}

export interface PhoneVerificationResponse {
    "success": boolean;
    "error": string | null;
}

interface CompletePhoneVerificationInput {
    "phoneNumber": string;
    "key": string;
}

export interface CompletePhoneVerificationArgs {
    "input": CompletePhoneVerificationInput;
}

export interface CompletePhoneVerificationResponse extends CoreResponse {}

interface EmailSignUpInput {
    "firstName": string;
    "lastName": string;
    "email": string;
    "password": string;
    "profilePhoto": string;
    "age": number;
    "phoneNumber": string;
}

export interface EmailSignUpMutationArgs {
    "input": EmailSignUpInput;
}

export interface EmailSignUpResponse extends CoreResponse {}

export interface GetMyProfileResponse {
    "success": boolean;
    "error": string | null;
    "user": User | null;
}
