import { privateResolver } from "../../middlewares/privateResolver";
import { ReportMovementArgs, ReportMovementResponse } from "../types";
import { filterToNotNullObject } from "../../../../utils/filterNulls";
import User from "../../../../db/entities/User";

export const reportMovement = privateResolver(async (
    _root: undefined,
    { input }: ReportMovementArgs,
    { user }
): Promise<ReportMovementResponse> => {
    const convertedInput = filterToNotNullObject(input);

    try {
        await User.update({ id: user.id }, { ...convertedInput });
        return {
            "success": true,
            "error": null,
        };
    } catch (error) {
        return {
            "success": false,
            "error": error.message,
        };
    }
});
