var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var multer = require('multer');

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.use(multer()); // for parsing multipart/form-data

// server specific config
server.use(function(req, res, next) {
    console.log(req.method, req.url, req.body);
    next();
});

// app specific routing
server.post('/employees', function(req, res) {
    //console.log(req.body);
    res.send("hello " + req.body.name);
})

server.listen(5555);