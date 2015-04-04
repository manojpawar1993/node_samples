var db = require('./db');
//var _ = require('underscore');

exports.get = function(req, res) {
    console.log("inside controller");

    console.log(req.query);

    db.menu.find(req.query).exec(function(err, data){
        res.json({menu: data});
    });
}

exports.post = function(req, res) {
    console.log("inside post");

    var menu = new db.menu();
    menu.name = req.body.name;
    menu.cost = req.body.cost;
    menu.save();

    res.json(menu);
}