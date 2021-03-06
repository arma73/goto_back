import { createJWT } from "../../../../helpers/createJWT";
import User from "../../../../db/entities/User";
import Verify from "../../../../db/entities/Verify";
import { CompletePhoneVerificationArgs, CompletePhoneVerificationResponse } from "../types";

export const completePhoneVerification = async (
    _root: undefined,
    { input }: CompletePhoneVerificationArgs
): Promise<CompletePhoneVerificationResponse> => {
    const { key, phoneNumber } = input;

    try {
        const verification = await Verify.findOne({
            "payload": phoneNumber,
            key,
        });

        if (!verification) {
            return {
                "success": false,
                "error": "Verification key not valid",
                "token": null,
            };
        }

        verification.verified = true;
        verification.save();

        const user = await User.findOne({ phoneNumber });

        if (user) {
            user.verifiedPhoneNumber = true;
            await user.save();
            const token = createJWT(user.id);

            return {
                "success": true,
                "error": null,
                token,
            };
        }

        return {
            "success": true,
            "error": null,
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
