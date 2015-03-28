var express = require('express');
var server = express();


server.get('/', function(request, response) {
    response.send("hello express. get request");
});

server.post('/', function(req, res) {
    res.send("this is post req");
});

server.put('/', function(req, res) {
    res.send("this is put req");
});

server.delete('/', function(req, res) {
    res.send("this is delete req");
});

server.get('/score', function(request, response) {
    response.send("Duh no more cricket for me");
})

server.listen(5555);