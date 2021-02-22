import Verify from "../../../../db/entities/Verify";
import { ApolloContext } from "../../../../apollo/types";
import { privateResolver } from "../../utils/resolverMiddleware";
import { CompleteEmailVerificationArgs, CompleteEmailVerificationResponse } from "../types";

export const completeEmailVerification = privateResolver<CompleteEmailVerificationResponse>(async (
    _root: undefined,
    { input }: CompleteEmailVerificationArgs,
    context: ApolloContext
): Promise<CompleteEmailVerificationResponse> => {
    const { user } = context;
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
