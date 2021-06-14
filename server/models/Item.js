const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, "Item name is required"]
    },
    Price: {
        type: String,
        required: [true, "Price is required"]
    },
    Inventory: {
        type: String,
        required: [true, "amount inventoried is required"],
    },
    Description: {
        type: String,
        required: [true, "Description is required"],
    },
    Media: {
        type: String,
        required: [true, "Media is required"],
    },

}, { timestamps: true });
module.exports.Item = mongoose.model('Item', ItemSchema);