import Place from "../../../../db/entities/Place";
import { filterToNotNullObject } from "../../../../utils/filterNulls";
import { privateResolver } from "../../middlewares/privateResolver";
import { EditPlaceArgs, EditPlaceResponse } from "../types";

export const editPlace = privateResolver<EditPlaceResponse>(async (
    _root: undefined,
    { input }: EditPlaceArgs,
    { user }
): Promise<EditPlaceResponse> => {
    const { placeId } = input;

    try {
        const place = await Place.findOne({ "id": placeId });

        if (!place) {
            return {
                "success": false,
                "error": "Place not found",
            };
        }

        if (place.id !== user.id) {
            return {
                "success": false,
                "error": "Not authorized",
            };
        }

        const convertedInput = filterToNotNullObject(input);

        await Place.update({ "id": placeId }, { ...convertedInput });

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
