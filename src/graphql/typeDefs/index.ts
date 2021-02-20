import { DocumentNode } from "graphql";
import { root } from "./root";
import { user, userConnectFB, userEmail, userPhone } from "./user";
import { chat, message } from "./chat";
import { place } from "./place";
import { ride } from "./ride";
import { verify } from "./verify";

export const typeDefs: DocumentNode[] = [
    root,
    user,
    userConnectFB,
    userEmail,
    userPhone,
    chat,
    message,
    place,
    ride,
    verify
];
