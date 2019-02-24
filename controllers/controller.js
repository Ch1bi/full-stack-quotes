//import the Quote model
const Quote = require('../models/quote');

//instantiate the controller object
const quoteController = {};

//controller method for handling a request for all quotes
quoteController.findAll = (req, res) => {

    //uses the finall method from Quote
    Quote.findAll()
    .then(quotes => {
        //Sends the quotes as a JSON object
        res.json({
            message: 'Success',
            data: quotes
        });
    })
    .catch(err => {
        //if something goes wrong it logs the error and sends
        console.log(err);
        res.status(500).json({err});
    });
};

//Controller methods for handling a request for a single quote
quoteController.findById = (req, res) => {

    //Quotes method for finding by idm passes the id as an argument
    Quote.findById(req.params.id)
    .then(quote => {
        //Sends the quote as a JSON object
        res.json({
            message:'Success',
            data:quote
        });
    })
    .catch(err => {
        //if something goes wrong, it logs the error in the console and sends
        console.log(err);
        res.status(500).json({err});
    });
};

//export the controller
module.exports = quoteController;