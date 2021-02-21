import {
    FacebookConnectMutationArgs,
    FacebookConnectResponse
} from "../types";
import User from "../../../../db/entities/User";
import { createJWT } from "../../../../helpers/createJWT";

export const facebookConnect = async (
    _root: undefined,
    { input }: FacebookConnectMutationArgs
): Promise<FacebookConnectResponse> => {
    const { fbId } = input;
    try {
        const existingUser = await User.findOne({ "fbId": fbId });
        if (existingUser) {
            const token = createJWT(existingUser.id);

            return {
                "success": true,
                "error": null,
                token,
            };
        }

        const profilePhoto = `http://graph.facebook.com/${fbId}/picture?type=square`;
        const createdUser = await User.create({
            ...input,
            profilePhoto,
        }).save();

        const token = createJWT(createdUser.id);

        return {
            "success": true,
            "error": null,
            token,
        };
    } catch (error) {
        return {
            "success": false,
            "error": error.message,
            "token": null,
        };
    }
};
