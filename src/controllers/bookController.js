const BookModel = require("../models/bookModel")
/* Assignment :
Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

create the following API’s (write logic in bookController and routes in routes):*/

//================================================= 1 ========================================================//
//createBook : to create a new entry..use this api to create 11+ entries in your collection
const createBook = async function (req,res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}
//================================================= 2 ========================================================//
// bookList : gives all the books- their bookName and authorName only 
const booksList = async function (req,res){
    let allBooks = await BookModel.find().select({ bookName : 1 , authorName : 1 , _id: 0})
    res.send({msg: allBooks})
}
//================================================ 3 =========================================================//
// getBooksInYear: takes year as input in post request and gives list of all books published that year
const getBooksInYear = async function (req,res){

    let years = req.params.year
    let allBooks = await BookModel.find({year: {$eq:years}})
    res.send({msg: allBooks})
}
//================================================== 4 =======================================================//
/*getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books in this year
hence the condition will differ based on what you input in the request body
 */
const getParticularBooks = async function (req,res){
    let specificBooks = await BookModel.find(req.body)
    res.send({msg: specificBooks})
}
//==================================================== 5 ======================================================//
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXINRBooks = async function (req,res){
    let allBooks = await BookModel.find({ "prices.indianPrice": {$in :["100INR","200INR","500INR"]}}).select({bookName:1,_id:0})
    res.send({msg: allBooks})
}
//====================================================== 6 ====================================================//
// getRandomBooks - returns books that are available in stock or have more than 500 pages 
const getRandomBooks = async function (req,res){
    let allBooks = await BookModel.find({$or: [{stockAvailable: true},{totalPages:{$gt: 500}}]})
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.booksList = booksList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks