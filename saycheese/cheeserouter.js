var express = require('express');
var router = express.Router();
var menu = require('./menu');

router.get('/menu', menu.get);

router.post('/menu', function(req, res) {
    res.post('creating new menu item.')
});

module.exports = router;