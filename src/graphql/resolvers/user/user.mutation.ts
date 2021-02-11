import { IResolvers } from "apollo-server-express";
import { FacebookConnectMutationArgs, FacebookConnectResponse } from "./types";
import User from "../../../db/entities/User";

export const userMutation: IResolvers = {
    "Mutation": {
        "facebookConnect": async (
            _root: undefined,
            { input }: FacebookConnectMutationArgs
        ): Promise<FacebookConnectResponse> => {
            const { email, fbId, firstName, lastName } = input;
            try {
                const existingUser = await User.findOne({ "fbId": fbId });
                if (existingUser) {
                    return {
                        "success": true,
                        "error": null,
                        "token": "temp already"
                    };
                }

                const profilePhoto = `http://graph.facebook.com/${fbId}/picture?type=square`;
                await User.create({
                    "email": email,
                    "fbId": fbId,
                    "firstName": firstName,
                    "lastName": lastName,
                    profilePhoto
                }).save();

                return {
                    "success": true,
                    "error": null,
                    "token": "temp new"
                };
            } catch (error) {
                return {
                    "success": false,
                    "error": error.message,
                    "token": null,
                };
            }
        },
    },
};
