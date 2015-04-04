var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var menuSchema = new Schema({
    name: String,
    cost: Number,
    created: {
        type: Date,
        default: Date.now
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    },
    id: false
});

menuSchema
    .virtual('virtual')
    .get(function() {
        return this.name + ' will cost you ' + this.cost;
    });

var orderSchema = new Schema({
    customer: String
});

// export
exports.menu = mongoose.model('menu', menuSchema);
exports.customer = mongoose.model('order', orderSchema);