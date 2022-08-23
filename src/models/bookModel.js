const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

/*A newBook document should look like this in MongoDB. The author property is a
reference to newAuthor collection.
{
_id: ObjectId("61951bfa4d9fe0d34da86344"),
name:"Two states",
author:"61951bfa4d9fe0d34da86829",
price:50,
ratings:4.5,
publisher: "61951bfa4d9fe0d34da84523"
} */

const bookSchema = new mongoose.Schema( {
    name: String,
    authorId : {
        type: ObjectId,
        ref: "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher:{
        required: true,
        type: ObjectId,
        ref:"newPublisher"
    },
    // a) Add a new boolean attribute in the book schema called isHardCover with a default false value. // According 5(a) question
    isHardCover:
    {default : false}

}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
