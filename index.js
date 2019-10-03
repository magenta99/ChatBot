require('./models/database');

const controller = require('./controllers/questionController');
var express = require('express');
var app = express();
var exhdbs = require('express-handlebars');


app.use('/',controller);
app.listen(process.env.PORT || 3000);
module.exports = app;