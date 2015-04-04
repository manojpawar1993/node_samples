var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

var router = require('./cheeserouter');

// server specific config.
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//server.use(validator());
server.use(multer()); // for parsing multipart/form-data

// log all incoming request.
server.use(function(req, res, next) {
    console.log(req.method, req.url, req.body);
    next();
});

// db config
mongoose.connect('mongodb://dbuser:dbuser@127.0.0.1:27017/fixers', function(err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

server.use('/', router);

server.listen('8000');