## QraphQL Schema / Types
Schema tell graph about the type of the data that we're working with and how all the relations between those
differnt pieces of data

schemas specify the types for API 
The application schema defines the GraphQL operations you can send from the frontend



## Create schema by using Schema Definition Language (SDL)
schema file person.js
```
type Person {
  name: String!
  age: Int!
}
```
index.js
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