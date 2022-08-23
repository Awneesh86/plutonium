const mongoose = require('mongoose');
/*- A newAuthor document should look like this (no author_id anymore - you
can delete this from the schema)
{
_id: ObjectId("61951bfa4d9fe0d34da86829"), // deleted this line.
authorName:"Chetan Bhagat",
age:50,
address:"New Delhi",
rating: 2
} */

const authorSchema = new mongoose.Schema( {

    authorName: String,
    age:Number,
    address: String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)
