import {
    EmailSignInMutationArgs,
    EmailSignInResponse
} from "../types";
import User from "../../../../db/entities/User";
import { createJWT } from "../../../../helpers/createJWT";

export const emailSignIn = async (
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
            const token = createJWT(user.id);
            return {
                "success": true,
                "error": null,
                token,
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
};
