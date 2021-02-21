import { userMutation } from "./mutations";
import { userQuery } from "./queries";
import merge from "lodash.merge";

export default merge(userQuery, userMutation);
