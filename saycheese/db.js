var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Menu

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


// Order

var orderSchema = new Schema({
    customer: String,
    table: String,
    total_cost: Number,
    menu_items: [Schema.Types.Mixed]
});

// export
exports.menu = mongoose.model('menu', menuSchema);
exports.order = mongoose.model('order', orderSchema);