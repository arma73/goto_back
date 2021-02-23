import { AllowNull } from "../../../types/custom";
import { BaseCoreResponse } from "../types";

interface PlaceActionInput {
    "name": string;
    "lat": number;
    "lng": number;
    "address": string;
    "isFav": boolean;
}

export interface PlaceActionArgs {
    "input": PlaceActionInput;
}

export interface PlaceActionResponse extends BaseCoreResponse {}

interface EditPlaceInput {
    "placeId": number;
    "name": AllowNull<string>;
    "isFav": AllowNull<boolean>;
}

export interface EditPlaceArgs {
    "input": EditPlaceInput;
}

export interface EditPlaceResponse extends BaseCoreResponse {}
