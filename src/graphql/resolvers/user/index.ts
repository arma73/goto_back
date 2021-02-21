import { userMutation } from "./mutations";
import { userQuery } from "./queries";
import merge from "lodash.merge";

export const userResolver = merge(userQuery, userMutation);
