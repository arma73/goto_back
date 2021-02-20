import { IResolvers } from "apollo-server-express";
import { facebookConnect } from "./facebookConnect";
import { emailSignIn } from "./emailSignIn";
import { phoneVerification } from "./phoneVerification";

export const userMutation: IResolvers = {
    "Mutation": {
        facebookConnect,
        emailSignIn,
        phoneVerification,
    },
};
