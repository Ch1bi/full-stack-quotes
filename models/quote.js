//import the database
const db = require('../db/config');
//instantiate a new object 
//This will interface with the quotes-app database - the quotes table

const Quote = {};

//Define methods for the Quote object

//Returns all the quotes from the table
Quote.findAll = () => {

    return db.query(
        `SELECT * FROM quotes`
    );
};

//Return one quote with the specific id
Quote.findById = (id) =>{

    return db.oneOrNone(
        `
        Select *FROM quotes
        WHERE id = $1
        `,
        [id]
    );
};

//export the Quote object
module.exports = Quote;