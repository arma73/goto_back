import { gql } from "apollo-server-express";

const temp = gql`
    type Query {
        sayBye: String!
    }
`;

export default temp;
