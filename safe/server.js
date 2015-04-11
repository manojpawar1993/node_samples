var fs = require('fs')
var https = require('https')

var express = require('express')
var server = express()

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, server).listen(7777);

server.get('/', function(req, res) {
    res.send("test for https")
})