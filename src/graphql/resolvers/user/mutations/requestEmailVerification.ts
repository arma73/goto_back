import { sendVerificationEmail } from "../../../../helpers/sendEmail";
import { privateResolver } from "../../utils/resolverMiddleware";
import { RequestEmailVerificationResponse } from "../types";
import { VerifyTarget } from "../../../../db/types/enums";
import { ApolloContext } from "../../../../apollo/types";
import Verify from "../../../../db/entities/Verify";

export const requestEmailVerification = privateResolver<RequestEmailVerificationResponse>(async (
    _root: undefined,
    args: undefined,
    context: ApolloContext
): Promise<RequestEmailVerificationResponse> => {
    const { user } = context;

    if (!user?.email || user.verifiedEmail) {
        return {
            "success": false,
            "error": "Your user has no email to verify",
        };
    }

    try {
        const oldVerification = await Verify.findOne({ "payload": user.email });

        if (oldVerification) {
            oldVerification.remove();
        }

        const newVerification = await Verify.create({
            "payload": user.email,
            "target": VerifyTarget.EMAIL,
        }).save();

        await sendVerificationEmail(user.fullName, newVerification.key);

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
