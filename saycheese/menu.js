var db = require('./db');

exports.get = function(req, res) {

    console.log("print query params", req.query);

    // we will be querying db and getting list of all menu items.
    db.menu.find(req.query).sort("cost").exec(function(err, data){
        res.json({ menu_items: data});
    });
};

exports.post = function(req, res) {

    var menu = new db.menu();
    menu.name = req.body.name;
    menu.cost = req.body.cost;
    menu.save();

    res.json(menu);
}