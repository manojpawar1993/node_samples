var express = require('express');
var router = express.Router();
var menu = require('./menu');

router.use(function(req, res, next){
    console.log(req.method, req.url, req.body);
    next();
});

router.get("/", menu.get);
router.post("/", menu.post);

router.get("/test", function(req, res) {
    
});

module.exports = router;