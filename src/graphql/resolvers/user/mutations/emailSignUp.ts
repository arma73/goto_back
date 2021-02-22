import { createJWT } from "../../../../helpers/createJWT";
import User from "../../../../db/entities/User";
import Verify from "../../../../db/entities/Verify";
import { VerifyTarget } from "../../../../db/types/enums";
import { sendVerificationEmail } from "../../../../helpers/sendEmail";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../types";

export const emailSignUp = async (
    _root: undefined,
    { input }: EmailSignUpMutationArgs
): Promise<EmailSignUpResponse> => {
    const { email, phoneNumber } = input;

    try {
        const existingUser = await User.findOne({
            email,
        });

        if (existingUser) {
            return {
                "success": false,
                "error": "Your email is already registered, you can use another email or log in with this email.",
                "token": null,
            };
        }

        const phoneVerification = await Verify.findOne({
            "payload": phoneNumber,
            "verified": true,
        });

        if (!phoneVerification) {
            return {
                "success": false,
                "error": "You haven't verified your phone number",
                "token": null,
            };
        }

        const createdUser = await User.create({ ...input }).save();

        if (createdUser.email) {
            const emailVerification = await Verify.create({
                "payload": createdUser.email,
                "target": VerifyTarget.EMAIL,
            }).save();

            await sendVerificationEmail(
                createdUser.fullName,
                emailVerification.key
            );
        }

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
