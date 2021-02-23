import User from "src/db/entities/User";
import { Between, getRepository } from "typeorm";
import { privateResolver } from "../../middlewares/privateResolver";
import { GetNearbyDriversResponse } from "../types";

export const getNearbyDrivers = privateResolver<GetNearbyDriversResponse>(async (
    _root: undefined,
    args: undefined,
    { user }
): Promise<GetNearbyDriversResponse> => {
    const { lastLat, lastLng } = user;

    try {
        const drivers = await getRepository(User).find({
            "isDriving": true,
            "lastLat": Between(lastLat - 0.05, lastLat + 0.05),
            "lastLng": Between(lastLng - 0.05, lastLng + 0.05),
        });

        return {
            "success": true,
            "error": null,
            drivers
        };
    } catch (error) {
        return {
            "success": false,
            "error": error.message,
            "drivers": null,
        };
    }
});
