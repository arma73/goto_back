import { DocumentNode } from "graphql";
import { root } from "./root";
import { user, userConnectFB, userEmail } from "./user";
import { chat, message } from "./chat";
import { place } from "./place";
import { ride } from "./ride";
import { verify } from "./verify";

export const typeDefs: DocumentNode[] = [
    root,
    user,
    userConnectFB,
    userEmail,
    chat,
    message,
    place,
    ride,
    verify
];
