/*
using GraphQL schema language to design user schema to specify the types for API . 
*/

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;

// User Type
exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      }
    }
  }
});

