const mongoose = require('mongoose');

// Item Schema
const itemSchema = mongoose.Schema({
    imageURL: {type:String},
    title: {type:String},
    des: {type:String},
    category: {type:String},
    price: {type:String},
    quantity: Number
},
{ timestamps: true}) // createdAt and updatedAt

// Item Model
const Item = mongoose.model("Item", itemSchema);

// Export model to share it with controller
module.exports = Item;