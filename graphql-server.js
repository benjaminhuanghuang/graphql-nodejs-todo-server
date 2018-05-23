const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();


/*
  Cause error {"errors":[{"message":"GraphQL middleware options must contain a schema."}]}
*/
// Resister GraphQL as a Express middleware
app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(4000, () => {
  console.log('Express is running at port 4000');
});
