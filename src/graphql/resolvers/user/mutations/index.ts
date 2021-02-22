import { facebookConnect } from "./facebookConnect";
import { emailSignIn } from "./emailSignIn";
import { phoneVerification } from "./phoneVerification";
import { completePhoneVerification } from "./completePhoneVerification";
import { emailSignUp } from "./emailSignUp";
import { requestEmailVerification } from "./requestEmailVerification";
import { completeEmailVerification } from "./completeEmailVerification";

export const userMutation = {
    "Mutation": {
        facebookConnect,
        emailSignIn,
        phoneVerification,
        completePhoneVerification,
        emailSignUp,
        completeEmailVerification,
        requestEmailVerification,
    },
};
