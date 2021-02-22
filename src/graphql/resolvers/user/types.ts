import User from "../../../db/entities/User";
import { AllowNull } from "../../../types/custom";

interface BaseCoreResponse {
    "success": boolean;
    "error": AllowNull<string>;
}

interface CoreResponse {
    "success": boolean;
    "error": AllowNull<string>;
    "token": AllowNull<string>;
}

interface FaceboookConnectMutationInput {
    "firstName": string;
    "lastName": string;
    "email": AllowNull<string>;
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

export interface PhoneVerificationResponse extends BaseCoreResponse {}

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

export interface GetMyProfileResponse extends BaseCoreResponse {
    "user": AllowNull<User>;
}

interface CompleteEmailVerificationInput {
    "key": string;
}

export interface CompleteEmailVerificationArgs {
    "input": CompleteEmailVerificationInput;
}

export interface CompleteEmailVerificationResponse extends BaseCoreResponse {}

export interface RequestEmailVerificationResponse extends BaseCoreResponse {}

interface UpdateMyProfileInput {
    "firstName": AllowNull<string>;
    "lastName": AllowNull<string>;
    "email": AllowNull<string>;
    "password": AllowNull<string>;
    "profilePhoto": AllowNull<string>;
    "age": AllowNull<number>;
}

export interface UpdateMyProfileArgs {
    "input": UpdateMyProfileInput;
}

export interface UpdateMyProfileResponse extends BaseCoreResponse {}

export interface ToggleDrivingModeResponse extends BaseCoreResponse {}
