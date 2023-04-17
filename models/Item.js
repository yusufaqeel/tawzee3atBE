const mongoose = require('mongoose');

// Item Schema
const itemSchema = mongoose.Schema({
    title: {type:String},
    des: {type:String},
    category: {type:String},
    price: {type:Number},
    quantity: {type:Number},
    publicId: {type: String},
    imageUrl: {type: String}
},
{ timestamps: true}) // createdAt and updatedAt

// Item Model
const Item = mongoose.model("Item", itemSchema);

// Export model to share it with controller
module.exports = Item;