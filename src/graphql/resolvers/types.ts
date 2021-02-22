import { AllowNull } from "../../types/custom";

export interface BaseCoreResponse {
    "success": boolean;
    "error": AllowNull<string>;
}

export interface CoreResponse extends BaseCoreResponse {
    "token": AllowNull<string>;
}
