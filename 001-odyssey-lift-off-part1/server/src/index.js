const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

/* mock data
With mocks enabled, Apollo Server always returns exactly two entries for every list field.
To get more entries, add the Query and return [...new Array(n)].

At the end, It's about: a Mock Object with keys, where each key returns function 
that could return an object.
Mock Object => ({ key: () => (obj/Int/String/etc...) })
*/ 
const mocks = {
    // Get more entries
    Query: () => ({
        tracksForHome: () => [...new Array(6)]
    }),
    Track: () => ({
        id: () => "track_01",
        title: () => "Astro Kitty, Space Explorer",
        author: () => {
            return {
                name: "Grumpy Cat",
                photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
            };
        },
        thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        length: () => 1210,
        modulesCount: () => 6
    })
}

// mocks enable: return an Array length of two
// const server = new ApolloServer({ typeDefs, mocks: true });
const server = new ApolloServer({ typeDefs, mocks });

server.listen().then( () => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
    `)
});