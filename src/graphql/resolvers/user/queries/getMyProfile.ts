import { privateResolver } from "../../utils/resolverMiddleware";
import { ApolloContext } from "../../../../apollo/types";
import { GetMyProfileResponse } from "../types";

export const getMyProfile = privateResolver<GetMyProfileResponse>(async (
    _root: undefined,
    args: undefined,
    context: ApolloContext
): Promise<GetMyProfileResponse> => {
    const { user } = context;

    return {
        "success": true,
        "error": null,
        user,
    };
});
