import { createJWT } from "../../../../helpers/createJWT";
import User from "../../../../db/entities/User";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../types";

export const emailSignUp = async (
    _root: undefined,
    { input }: EmailSignUpMutationArgs
): Promise<EmailSignUpResponse> => {
    const { email } = input;

    try {
        const existingUser = await User.findOne({
            email,
        });

        if (existingUser) {
            return {
                success: false,
                error: "Your email is already registered, you can use another email or log in with this email.",
                token: null,
            };
        }

        const createdUser = await User.create({ ...input }).save();
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
