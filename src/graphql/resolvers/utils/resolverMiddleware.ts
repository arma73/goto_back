import { IFieldResolver, MergeInfo } from "apollo-server-express";
import { GraphQLResolveInfo } from "graphql/type";
import { ApolloContext } from "../../../apollo/types";

export const privateResolver = <T = unknown>(
    resolver: IFieldResolver<unknown, ApolloContext, unknown>
) => async (
        _root: unknown,
        args: unknown,
        context: ApolloContext,
        info: GraphQLResolveInfo & { "mergeInfo": MergeInfo }
    ): Promise<T> => {
        const { user } = context;
        if (!user) {
            throw new Error("No JWT. I refuse to proceed");
        }

        return await resolver(_root, args, context, info);
    };
