var db = require('./db');

exports.get = function(req, res) {

    // we will be querying db and getting list of all menu items.
    
    var menu = new db.menu();
    menu.name = "tea";
    menu.cost = "25";
    menu.save();

    res.json(menu);

};