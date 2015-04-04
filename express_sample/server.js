var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var validator = require('express-validator');
var hat = require('hat');
var email = require('./email');


email.sendMail

// https://github.com/naikparag/node_samples/tree/master/express_sample

var emp_list = {};

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

server.put('/employees/:id', function(req, res){
    console.log(req.params.id);

    var currentEmp = emp_list[req.params.id];
    currentEmp.name = req.body.name;

    res.send(currentEmp);
});


server.route('/dept/:id')

// app specific routing
server.post('/employees', function(req, res) {
    
    //req.assert('email', 'required').notEmpty();
    req.assert('email', 'valid email required.').isEmail();
    // all your asserts here.
    var errors = req.validationErrors();

    errorResponse(err, res);

    var employee = {};
    employee.name = req.body.name;
    employee.phone = req.body.phone;
    employee.email = req.body.email;
    employee.id = hat();

    emp_list[employee.id]=employee;

    res.json(employee);
})

function errorResponse(err, res) {
    res.status(500);
    res.send({ error: err});
}

server.listen(5555);