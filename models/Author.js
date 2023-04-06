const mongoose = require('mongoose');

// Author Schema
const authorSchema = mongoose.Schema({
    name: String,
    emailAddress: String,
    phoneNumber: String,
    article: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]
},
{ timestamps: true}) // createdAt and updatedAt

// Author Model
const Author = mongoose.model("Author", authorSchema);

// Export model to share it with controller
module.exports = Author;