## QraphQL Schema / Types
Schema tell graph about the type of the data that we're working with and how all the relations between those
differnt pieces of data

schemas specify the types for API 
The application schema defines the GraphQL operations you can send from the frontend

## Create Schema
ref: http://graphql.org/graphql-js/constructing-types/

They are serval ways to create schema
- GraphQLObjectType creates the schema programmatically.
- buildSchema() uses the graphQL schema definiation language (SDL)
- makeExecutableSchema() 

### Using GraphQLObjectType
```
// Define the User type
var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  }
});

// Define the Query type
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: function (_, {id}) {
        return fakeDatabase[id];
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});
```

### Create schema by using Schema Definition Language (SDL) and buildSchema()
```
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: String): User
  }
`);
```

### Working with multiple SDL and resolvers

Put multiple schema files in ./schemas folder
person.js
```
type Person {
  name: String!
  age: Int!
}
```
Create schema in index.js
```
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
...

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

## Query
People commonly call everything that hits your GraphQL API server a "query".
GraphQL query for specific **fields on object** and **result** will come exactly the same shape as request.  GraphQL query always get back what you expect, and the server knows exactly what fields the client is asking for.
For example
```
{
    users {
        id
        name
    }
}
```


## Mutation
GraphQL treats all operations with side-effects similarly, and calls them mutation.