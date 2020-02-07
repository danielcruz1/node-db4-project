const express = require('express');

const server = express();
const recipesRouter = require('./scheme/scheme-router');

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.status(200).send('<h1>Recipe Book API</h1>');
});

module.exports = server;