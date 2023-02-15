const { gql } = require("apollo-server");

/*
Schema defintion
*/
const typeDefs = gql`
"The entry points into the schema, the top-level fields that clients can query for."
type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}

"A track is a group of Modules that teaches about a specific topic."
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

"Author of a complete Track or a Module."
type Author {
    id: ID!
    name: String!
    photo: String
}
`;

module.exports = typeDefs