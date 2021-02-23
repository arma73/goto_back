import User from "src/db/entities/User";
import { privateResolver } from "../../middlewares/privateResolver";
import { GetMyPlacesResponse } from "../types";

export const getMyPlaces = privateResolver<GetMyPlacesResponse>(async (
    _root: undefined,
    args: undefined,
    { user }
): Promise<GetMyPlacesResponse> => {
    try {
        const userCurrent: User | undefined =
            await User.findOne<User>({ "id": user.id }, { "relations": ["places"] });

        if (!userCurrent) {
            return {
                "success": false,
                "error": "User not found",
                "places": null,
            };
        }

        return {
            "success": true,
            "error": null,
            "places": userCurrent.places,
        };
    } catch (error) {
        return {
            "success": false,
            "error": error.message,
            "places": null,
        };
    }
});
