const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();


/*
  Access GraphiQL tool at http://localhost:4000/graphql will see error
  {"errors":[{"message":"GraphQL middleware options must contain a schema."}]}
*/
// Resister GraphQL as a Express middleware
app.use('/graphql', graphqlHTTP({
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(4000, () => {
  console.log('Express is running at port 4000');
});
