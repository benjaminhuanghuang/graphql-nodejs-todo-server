## Install
For Node.js web server
```
    npm i express lodash mongoose -S
```
For graphQL
```
    npm i express-graphql graphql -S
```


## Register GraphQL with Express
```
    const graphqlHTTP = require("express-graphql");

    const app = express();
    // Resister GraphQL as a Express middleware
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    }));
```
- schema: The GraphQL schema which should be attached to the specific endpoint
- rootValue: The root resolver object
- graphiql: To enable the GraphiQL tool when accessing the endpoint in the browser.

## Query
People commonly call everything that hits your GraphQL API server a "query".
GraphQL query for specific fields on object and result will come exactly the same shape as request. So, GraphQL query always get back what you expect, and the server knows exactly what fields the client is asking for.
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