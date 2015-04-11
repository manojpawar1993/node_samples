var _ = require('underscore');
var db = require('./db');
var async = require('async');

exports.post = function(req, res) {

    var order = new db.order();
    order.customer = req.body.customer;
    order.table = req.body.table;
    order.total_cost = 0;

    console.log(req.body)

    async.each(req.body.menu_item, function(menu_item_id, cb) {

        console.log("processing order ", menu_item_id)
        db.menu.findById(menu_item_id).exec(function(err, menu_item) {

            if (err) {
                cb(err)
                return
            }

            order.menu_items.push(menu_item)
            cb()
        })

    }, function(err) {
        // call back function after done iterating through each menu_item
        if (err) {
            res.send(err)
            return
        }

        order.save();
        res.send(order);
    })
}