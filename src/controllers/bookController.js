const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// ======================================= Problem 3 a, b, c, d ========================================
/*3. Write a POST api that creates a book from the details in the request body. The api takes both the
author and publisher from the request body.
In this api, you have to write a logic that validates the following : */

//======================================= Book Creation ===============================================

const createBook = async (req, res) => {
    const book = req.body;
    const authorId = book.authorId;
    const publisherId = book.publisher;

    //======================================= Problem 3(a) ==============================================
    /*a) The authorId is present in the request body. If absent send an error message that this detail
is required
 */
    if (!authorId) return res.send({ msg: "Author id Must be present" })
    // OR 
    /*   if(!book.author) {
        return res.send({status: false, msg: "author id is a mandatory field"})
    }   */

    //======================================== Problem 3(b) ==============================================
    /*b) If present, make sure the authorId is a valid ObjectId in the author collection. If not then send
an error message that the author is not present */

    const author = await authorModel.findById(authorId)
    if (!author) return res.send({ msg: "Author does't exit" })
    // OR 
    /*let author = await authorModel.findById(book.author)
    if(!author) {
        return res.send({status: false, msg: "Author id is not valid"})
    }
 */

    //==================================== Problem 3(c) ==================================================
    /*c) The publisherId is present in the request body. If absent send an error message that this
detail is required */

    if (!publisherId) return res.send({ msg: "Publisher must be present" })
    // OR
    /*if(!book.publisher) {
        return res.send({status: false, msg: "Publisher id is a mandatory field"})
    }
 */

    //================================== Problem 3(d)======================================================
    /*d) If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then
send an error message that the publisher is not present.
 */
    const publisher = await publisherModel.findById(publisherId)
    if (!publisher) return res.send({ msg: "Publisher doesn't exit" })

    // OR
    /* let publisher = await publisherModel.findById(book.publisher)
    if(!publisher) {
        return res.send({status: false, msg: "Publisher id is not valid"})
    }*/
    const createdBook = await bookModel.create(book)
    res.send({ msg: createdBook })
}
//======================================= Problem 4 Book With Author And Publisher============================
/*4. Write a GET api that fetches all the books along with their author details (you have to populate for
this) as well the publisher details (you have to populate for this) */

const getBooksData = async (req, res) => {
    const bookWithDetails = await bookModel.find().populate("authorId publisher");
    res.send({ data: bookWithDetails })
}
// ========================================== Problem 5 (a),(b) ==============================================
/*Edit: New problem (5)
5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at
least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and
authors.
Create a new PUT api /books and perform the following two operations
a) Add a new boolean attribute in the book schema called isHardCover with a default false value.
For the books published by 'Penguin' and 'HarperCollins', update this key to true.
b) For the books written by authors having a rating greater than 3.5, update the books price by 10
(For eg if old price for such a book is 50, new will be 60) */

const getBooksWithAuthorDetails = async function (req, res) {
    let data = await publisherModel.find({name : ["Penguin","HarperCollins"]}).select({_id : 1})
    let bookid = await bookModel.updateMany({ publisher : data}, {$set : {isHardCover : true , new : true}}, { upsert : true})
    let authors = await authorModel.find({ ratings : {$gt : 3.5}}).select({_id : 1})
    let rating1 = await bookModel.updateMany({authorId : authors}, { $inc : {price : 10}},{upsert : true})
    res.send({data: bookid , rating1})
    
}
// OR 
/*// get books by the publioshers - Penguin and HarperCollins
    let requiredPublishers = 
    await publisherModel.find({$or: [{name: "Penguin"},{name: "HarperCollins"}]}, {_id: 1})
    //let books = await bookModel.find().populate('publisher')
    //for
    let requiredPublisherIds = [] 
    for (let i = 0; i < requiredPublishers.length; i++) {
        requiredPublisherIds.push(requiredPublishers[i]._id)
    }

    let updatedBooks = await bookModel.updateMany({publisher : {$in: requiredPublisherIds}}, {isHardCover: true}, {new: true})
    res.send({data: updatedBooks})
} */

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

// const createBook= async function (req, res) {
//     let book = req.body
//     let author1 = book.author
//     let publisher1 = book.publisher
//     let isValid = mongoose.Types.ObjectId.isValid(author1)
//     let isValidp = mongoose.Types.ObjectId.isValid(publisher1)
    
//     if (isValid === false) {
//         return res.send("please enter authorid")
//     } else if (isValidp === false){
//         return res.send("please publisher id")
//     }
//     let idfromauthor = await authorModel.findById(author1)
//     let idfromPublisher = await publisherModel.findById(publisher1)


//     if(!idfromauthor){
//         return res.send("This author dosent exist")
//     } else if (!idfromPublisher){
//         return res.send("This publisher does not exist")
//     } else if (!idfromauthor && !idfromPublisher){
//     return res.send("Author and publisher both id's are invalid , please try with valid id")
//     } else{
//         let bookCreated = await bookModel.create(book)
//         res.send({ data: bookCreated})
//     }
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find().populate('author publisher')
//     res.send({data: books})
// }