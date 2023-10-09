require('dotenv').config({path: '../.env'});
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers/resolver');
async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });

    const app = express();

    await server.start();

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
}

startServer().catch((error) => {
    console.error('Error starting the server:', error);
});


