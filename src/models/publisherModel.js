const mongoose = require('mongoose');
/*A newPublisher document looks like this in MongoDB.
{
_id: ObjectId("61951bfa4d9fe0d34da86344"),
name: “Penguin”,
headQuarter: “New Delhi”,
} */

const publisherSchema = new mongoose.Schema( {
    name: String,

    headQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)
