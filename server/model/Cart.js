const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CartSchema = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{
        item: {
            type: schema.Types.ObjectId,
            ref: 'Item'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
});

module.exports = mongoose.model('Cart', CartSchema);