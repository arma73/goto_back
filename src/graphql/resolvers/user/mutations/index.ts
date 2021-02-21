import { IResolvers } from "apollo-server-express";
import { facebookConnect } from "./facebookConnect";
import { emailSignIn } from "./emailSignIn";
import { phoneVerification } from "./phoneVerification";
import { completePhoneVerification } from "./completePhoneVerification";
import { emailSignUp } from "./emailSignUp";

export const userMutation: IResolvers = {
    "Mutation": {
        facebookConnect,
        emailSignIn,
        phoneVerification,
        completePhoneVerification,
        emailSignUp,
    },
};
