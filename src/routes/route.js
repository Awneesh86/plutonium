const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", userController.createUser  )

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/getUsers/:userId", auth.validateToken, userController.getUserData)

router.put("/updateUsers/:userId", auth.validateToken, userController.updateUser)

router.delete("/deleteUsers/:userId", auth.validateToken, userController.deleteUser)

module.exports = router;