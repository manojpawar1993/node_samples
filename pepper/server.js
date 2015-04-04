var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var pepperRoutes = require('./routes');

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
//server.use(validator());
server.use(multer()); // for parsing multipart/form-data


// db connection.
mongoose.connect('mongodb://dbuser:dbuser@127.0.0.1:27017/fixers', function(err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

server.use(pepperRoutes);

server.listen(7000);