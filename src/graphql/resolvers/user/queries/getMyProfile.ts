import { privateResolver } from "../../middlewares/privateResolver";
import { GetMyProfileResponse } from "../types";

export const getMyProfile = privateResolver<GetMyProfileResponse>(async (
    _root: undefined,
    args: undefined,
    { user }
): Promise<GetMyProfileResponse> => {
    return {
        "success": true,
        "error": null,
        user,
    };
});
