import { getMyProfile } from "./getMyProfile";
import { getNearbyDrivers } from "./getNearbyDrivers";

export const userQuery = {
    "Query": {
        getMyProfile,
        getNearbyDrivers,
    },
};
