const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController = require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//====================== Creating Authors API According to Question ==============================//
router.post("/createAuthor", AuthorController.createAuthor)

//====================== Creating Books API According to Question =================================//
router.post("/createBook", AuthorController.createBook)

//====================== Getting Books Data API For 1st Problem ==================================//
router.get("/getBooksData", AuthorController.getBooksData  )

//====================== Getting Find Authors Data API For 2nd Problem ===========================//
router.get("/findauthor", AuthorController.findauthor)

//====================== Getting Find Books Data API For 3rd Problem =============================//
router.get("/findBooks", AuthorController.findBooks)

      
module.exports = router;