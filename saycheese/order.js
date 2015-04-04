var _ = require('underscore');
var db = require('./db');

exports.post = function(req, res) {

    var order = new db.order();
    order.customer = req.body.customer;
    order.table = req.body.table;
    //order.save();

    _.each(req.body.menu_item, function(menu_item_id) {
        //order.menu_items.push();
        console.log(menu_item_id);
        db.menu.findById(menu_item_id).exec(function(err, menu_item){

            if (err) {
                console.log("err", err);
            }

            order.menu_item.push(menu_item);
        });
    });
    order.save();
    res.send(order);
}