const express = require('express');
const ThingContoller = require('./controllers/Thing.controller');
const { basicErrorHandler } = require('./errorHandler');

const app = express();

const bodyParser = express.json();
app.use(bodyParser);

app.post('/thing', ThingContoller.createThing);
app.get('/thing:id', ThingContoller.getOne); // 1 thing
app.get('./things', ThingContoller.getAllThings); // all things
app.delete('/thing/:id', ThingContoller.deleteOne); // delete one
app.put('/thing/:id', ThingContoller.updateOne); // update one



app.use(basicErrorHandler);

module.exports = app;