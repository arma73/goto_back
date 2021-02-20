import { userMutation } from "./mutations";
import { userQuery } from "./user.query";
import merge from "lodash.merge";

export default merge(userQuery, userMutation);
