import { placeMutation } from "./mutations";
import { placeQuery } from "./queries";
import merge from "lodash.merge";

export const placeResolver = merge(placeQuery, placeMutation);
