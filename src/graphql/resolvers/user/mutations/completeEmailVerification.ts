import Verify from "../../../../db/entities/Verify";
import { privateResolver } from "../../middlewares/privateResolver";
import { CompleteEmailVerificationArgs, CompleteEmailVerificationResponse } from "../types";

export const completeEmailVerification = privateResolver<CompleteEmailVerificationResponse>(async (
    _root: undefined,
    { input }: CompleteEmailVerificationArgs,
    { user }
): Promise<CompleteEmailVerificationResponse> => {
    const { key } = input;

    if (!user?.email) {
        return {
            "success": false,
            "error": "No email to verify",
        };
    }

    try {
        const verification = await Verify.findOne({
            key,
            "payload": user.email,
        });

        if (!verification) {
            return {
                "success": false,
                "error": "Cant verify email",
            };
        }

        user.verifiedEmail = true;
        user.save();

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
