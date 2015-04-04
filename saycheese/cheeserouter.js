var express = require('express');
var router = express.Router();
var menu = require('./menu');

router.get('/menu', menu.get);
router.post('/menu', menu.post);

module.exports = router;