import { IResolvers } from "apollo-server-express";
import {
    FacebookConnectMutationArgs,
    FacebookConnectResponse,
    EmailSignInMutationArgs,
    EmailSignInResponse,
    PhoneVerificationMutationArgs,
    PhoneVerificationResponse
} from "./types";
import User from "../../../db/entities/User";
import Verify from "../../../db/entities/Verify";
import { VerifyTarget } from "../../../db/types/enums";
import { sendVerificationMessage } from "../../../helpers/sendMessage";

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
                        "token": "temp already",
                    };
                }

                const profilePhoto = `http://graph.facebook.com/${fbId}/picture?type=square`;
                await User.create({
                    "email": email,
                    "fbId": fbId,
                    "firstName": firstName,
                    "lastName": lastName,
                    profilePhoto,
                }).save();

                return {
                    "success": true,
                    "error": null,
                    "token": "temp new",
                };
            } catch (error) {
                return {
                    "success": false,
                    "error": error.message,
                    "token": null,
                };
            }
        },
        "emailSignIn": async (
            _root: undefined,
            { input }: EmailSignInMutationArgs
        ): Promise<EmailSignInResponse> => {
            const { email, password } = input;

            try {
                const user = await User.findOne({ email });

                if (!user) {
                    return {
                        "success": false,
                        "error": "No user found with that email",
                        "token": null,
                    };
                }

                const checkPassword = await user.comparePassword(password);
                if (checkPassword) {
                    return {
                        "success": true,
                        "error": null,
                        "token": "temp",
                    };
                }

                return {
                    "success": false,
                    "error": "Wrong password",
                    "token": null,
                };
            } catch (error) {
                return {
                    "success": false,
                    "error": error.message,
                    "token": null,
                };
            }
        },
        "phoneVerification": async (
            _root: undefined,
            { input }: PhoneVerificationMutationArgs
        ): Promise<PhoneVerificationResponse> => {
            const { phoneNumber } = input;
            try {
                const existingVerification = await Verify.findOne({ "payload": phoneNumber });
                if (existingVerification) {
                    existingVerification.remove();
                }

                const { payload, key } = await Verify.create({
                    "payload": phoneNumber,
                    "target": VerifyTarget.PHONE,
                }).save();

                await sendVerificationMessage(payload, key);

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
        }
    },
};
