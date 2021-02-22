import { privateResolver } from "../../middlewares/privateResolver";
import { PlaceActionArgs, PlaceActionResponse } from "../types";
import Place from "../../../../db/entities/Place";

export const addPlace = privateResolver<PlaceActionResponse>(async (
    _root: undefined,
    { input }: PlaceActionArgs,
    { user }
): Promise<PlaceActionResponse> => {
    try {
        await Place.create({ ...input, user }).save();

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
