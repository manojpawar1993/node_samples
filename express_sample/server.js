var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var validator = require('express-validator');

// https://github.com/naikparag/node_samples/tree/master/express_sample

var emp_list = [];

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.use(validator());
server.use(multer()); // for parsing multipart/form-data

// server specific config
server.use(function(req, res, next) {
    console.log(req.method, req.url, req.body);
    next();
});

server.get('/employees', function(req, res){
    res.json({list: emp_list});
});

// app specific routing
server.post('/employees', function(req, res) {
    
    //req.assert('email', 'required').notEmpty();
    req.assert('email', 'valid email required.').isEmail();
    // all your asserts here.
    var errors = req.validationErrors();

    if (errors) {
        res.status(500);
        res.send({ error: errors});
        return;
    }

    var employee = {};
    employee.name = req.body.name;
    employee.phone = req.body.phone;
    employee.email = req.body.email;

    emp_list.push(employee);

    res.json(employee);
})

server.listen(5555);