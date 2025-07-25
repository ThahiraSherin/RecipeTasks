const express = require ('express');
const logger = require('./utilis/logger');
const errorRoute = require ('./utilis/errorRoute');
const recipeRouter = require('./Routes/recipeRouter');



const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1/food', recipeRouter);

app.use(errorRoute);

module.exports = app;