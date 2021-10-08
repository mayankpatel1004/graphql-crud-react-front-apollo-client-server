const { GraphQLList, GraphQLInt } = require("graphql");
const UserType = require('../TypeDefs/UserType');

module.exports.FETCH_ALL = {
    type : new GraphQLList(UserType),
    resolve : async(parent, args,context) =>{
        let mydata = await context();
        //console.log("My Host :",mydata.host);
        let { dbConfig } = parent;
        let data = dbConfig.users.findAll();
        return data;
    }
}

module.exports.FETCH_ONE = {
    type : new GraphQLList(UserType),
    args : {
        id: {type: GraphQLInt}
    },
    resolve : async(parent, args, context) => {
        //console.log(args);
        let mydata = await context();
        let { dbConfig } = parent;
        let data = dbConfig.users.findAll({where:{id:args.id}});
        return data;
    }
}
