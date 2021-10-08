var db = require("../../models");
const User = db.users;
const { GraphQLList, GraphQLInt, GraphQLString } = require("graphql");
const UserType = require("../TypeDefs/UserType");
const StatusType = require("../TypeDefs/StatusType");

module.exports.USER_ADD = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString}
    },
    resolve: async (parent, args) => {
        //console.log(args);
        await User.create({
            name: args.name,
            email: args.email,
            gender: args.gender
        });
        return args;
    }
}

module.exports.USER_UPDATE = {
    type: StatusType,
    args: {
        id: {type:GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString}
    },
    resolve: async (parent, args) => {
        await User.update({
            name: args.name,
            email: args.email,
            gender: args.gender
        },{
            where:{
                id: args.id
            }
        });
        //return args;
        return {
            success: true,
            message: "Update Successfully !!!",
            error: ""
        }
    }
}

module.exports.USER_DELETE = {
    type: StatusType,
    args: {
        id: {type:GraphQLInt}
    },
    resolve: async (parent, args) => {
        await User.destroy({
            where:{
                id: args.id
            }
        });
        //return args;
        return {
            success: true,
            message: "Deleted Successfully !!!",
            error: ""
        }
    }
}

