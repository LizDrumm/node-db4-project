const express = require('express');

const RecipeRouter = require('./recipes/recipes-router');
// const db = require('./data/db-config');

const server = express();

//server.use(helmet());
server.use(express.json());
server.use('/recipes', RecipeRouter);

module.exports = server;