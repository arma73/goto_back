export interface FaceboookConnectMutationInput {
    "firstName": string;
    "lastName": string;
    "email": string | null;
    "fbId": string;
}

export interface FacebookConnectMutationArgs {
    "input": FaceboookConnectMutationInput;
}

export interface FacebookConnectResponse {
    "success": boolean;
    "error": string | null;
    "token": string | null;
}
