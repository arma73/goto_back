import { privateResolver } from "../../middlewares/privateResolver";
import Place from "../../../../db/entities/Place";
import { DeletePlaceArgs, DeletePlaceResponse } from "../types";

export const deletePlace = privateResolver<DeletePlaceResponse>(async (
    _root: undefined,
    { input }: DeletePlaceArgs,
    { user }
): Promise<DeletePlaceResponse> => {
    const { placeId } = input;

    try {
        const place = await Place.findOne({ "id": placeId });

        if (!place) {
            return {
                "success": false,
                "error": "Place not found",
            };
        }

        if (place.userId !== user.id) {
            return {
                "success": false,
                "error": "Not authorized",
            };
        }

        await place.remove();

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
