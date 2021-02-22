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
