const DataBaseError = require("./errors/DataBaseError");
const { ValidationError } = require('yup');

module.exports.basicErrorHandler = (err, req, res, next) => { // ОБРОБНИК ПОМИЛОК
    if(err instanceof DataBaseError) {
         return res.status(400).send('Something wrong with Database');
    }
 
    if(err instanceof RangeError) {
         return res.status().send(404).send('There is no things');
    }
}