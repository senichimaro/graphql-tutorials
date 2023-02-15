const resolvers = {
    Query: {
        tracksForHome: (_,__,{dataSources}) => dataSources.trackAPI.getTracksForHome()
    },
    Track: {
        author: ({authorId}, _,{dataSources}) => dataSources.trackAPI.getAuthor(authorId)
    }
}

module.exports = resolvers