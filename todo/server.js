var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var validator = require('express-validator');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(validator());
app.use(multer()); // for parsing multipart/form-data
app.use(function(req, res, next) {
    console.log(req.method, req.url, req.body);
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.post('/', function(req, res) {
    res.send('Got a POST request');
})

app.get('/test', function(req, res) {
    res.send(sayhi("this is expresss"));
});

app.post('/test', function(req, res) {
    console.log(req.body);
    console.log("query", req.query);
    req.assert('email', 'A valid email is required').isEmail();

    var errors = req.validationErrors();
    if (errors) {
        errorHandler(errors, res);
    }

    res.send("hello there " + req.body.name);
});

function errorHandler(err, res) {
    res.status(500);
    res.send({
        error: err
    });
}

var sayhi = function(name) {
    var a = "Hello " + name;
    console.log(a);
    return a;
};

app.listen(5555);