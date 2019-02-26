//import express 
const express = require('express');
//Define the router using the express router
const quoteRouter = express.Router();

//import the quotesController
const quoteController = require('../controllers/controller');

//For each route access the correct controller method

//Request all quotes, send it to the /route
quoteRouter.get('/', quoteController.findAll);

//Request single quote, send it to the /:id route
quoteRouter.get('/:id', quoteController.findById);

//export the router
module.exports = quoteRouter;

