import User from "../db/entities/User";
import { AllowNull, NoNullFields } from "../types/custom";

export interface ApolloContext {
    "user": AllowNull<User>;
}

export type NoAllowNullApolloContext = NoNullFields<ApolloContext>;
