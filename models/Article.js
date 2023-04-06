// Require Mongoose
const mongoose = require('mongoose');

// Schema
const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    isPublished: Boolean,
    totalWords: Number,
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }]
    // author: String,
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
},{ timestamps: true }) // means createdAt and updatedAt

// Model
const Article = mongoose.model("Article", articleSchema);

// Export model to share it with controller
module.exports = Article;