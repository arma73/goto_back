import {
    PhoneVerificationMutationArgs,
    PhoneVerificationResponse
} from "../types";
import Verify from "../../../../db/entities/Verify";
import { VerifyTarget } from "../../../../db/types/enums";
import { sendVerificationMessage } from "../../../../helpers/sendMessage";

export const phoneVerification = async (
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
};
