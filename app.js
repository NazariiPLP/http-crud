const express = require('express');
const ThingContoller = require('./controllers/Thing.controller');
const { basicErrorHandler } = require('./errorHandler');
const { validateThing } = require('./utils/validationThings');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);

// http://localhost:5000/thing
app.post('/thing', validateThing, ThingContoller.createThing);
// http://localhost:5000/thing
app.get('/thing:id', ThingContoller.getOne); // 1 thing
// http://localhost:5000/things
app.get('./things', ThingContoller.getAllThings); // all things
app.delete('/thing/:id', ThingContoller.deleteOne); // delete one
app.put('/thing/:id', validateThing, ThingContoller.updateOne); // update one

app.use(basicErrorHandler);

module.exports = app;