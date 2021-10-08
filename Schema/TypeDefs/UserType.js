const graphql = require("graphql");

const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {type:GraphQLInt},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        gender: {type:GraphQLString},
        status: {type:GraphQLString}
    })
});

module.exports = UserType;