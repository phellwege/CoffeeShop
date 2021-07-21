const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        // required: [true, "Item name is required"]
    },
    price: {
        type: String,
        // required: [true, "Price is required"]
    },
    inventory: {
        type: String,
        // required: [true, "amount inventoried is required"],
    },
    description: {
        type: String,
        // required: [true, "Description is required"],
    },
    media: {
        type: String,
        // required: [true, "Media is required"],
    },
    category: {
        type: String,
        // required: [true, "Category is required"],
    },

}, { timestamps: true });

module.exports.Item = mongoose.model('Item', ItemSchema);