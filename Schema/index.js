const graphql = require("graphql");
const { 
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

const { FETCH_ALL, FETCH_ONE } = require("./Queries/User");
const { USER_ADD, USER_UPDATE, USER_DELETE } = require("./Mutations/User");

const RootQuery = new GraphQLObjectType({
    name:"xyz",
    fields: {
        userList: FETCH_ALL,
        userDetails: FETCH_ONE
    }
})

const Mutation = new GraphQLObjectType({
    name:"mutation",
    fields: {
        CreateUser: USER_ADD,
        UpdateUser: USER_UPDATE,
        DeleteUser: USER_DELETE
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});