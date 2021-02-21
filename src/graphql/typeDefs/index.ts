import { DocumentNode } from "graphql";
import { root } from "./root";
import user from "./user";
import chat from "./chat";
import { place } from "./place";
import { ride } from "./ride";
import { verify } from "./verify";

export const typeDefs: DocumentNode[] = [
    root,
    ...user,
    ...chat,
    place,
    ride,
    verify
];
