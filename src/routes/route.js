const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookModel = require("../models/bookModel.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.get("/booksList", BookController.booksList)

router.post("/getBooksInYear",BookController.getBooksInYear)

router.post("/getParticularBooks",BookController. getParticularBooks)

router.get("/getXINRBooks ",BookController.getXINRBooks )

router.get("/getRandomBooks", BookController. getRandomBooks)

module.exports = router;