import { privateResolver } from "../../middlewares/privateResolver";
import { ToggleDrivingModeResponse } from "../types";

export const toggleDrivingMode = privateResolver(async (
    _root: undefined,
    args: undefined,
    { user }
): Promise<ToggleDrivingModeResponse> => {
    user.isDriving = !user.isDriving;

    try {
        await user.save();

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
