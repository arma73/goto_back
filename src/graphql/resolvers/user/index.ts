import { userMutation } from "./user.mutation";
import { userQuery } from "./user.query";
import merge from "lodash.merge";

export default merge(userQuery, userMutation);
