var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var menuSchema = new Schema({
    name: String,
    cost: String
});

var orderSchema = new Schema({
    customer: String
});

// export
exports.menu = mongoose.model('menu', menuSchema);
exports.customer = mongoose.model('order', orderSchema);