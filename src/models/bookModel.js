const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {type:String, required: true},
    authorName: String,
    tags: [String],

    year: {type:Number, default:2021},

    prices:{
        indianPrice: String,
        europeanPrice: String,
    },
    totalPages : Number,
    stockAvailable: Boolean
},
{timestamps: true});

module.exports = mongoose.model('Book-collection', bookSchema) //users