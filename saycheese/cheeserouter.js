var express = require('express');
var router = express.Router();
var menu = require('./menu');
var order = require('./order');

router.get('/menu', menu.get);
router.post('/menu', menu.post);

router.post('/order', order.post);

module.exports = router;