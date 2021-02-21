import { gql } from "apollo-server-express";

/**
 * If try to create an empty Query type to extend later on, Apollo will throw a syntax error.
 * @see https://github.com/ardatan/graphql-tools/issues/648
 */
export const root = gql`
    type Query {
        _blank: String
    }

    type Mutation {
        _blank: String
    }
`;
