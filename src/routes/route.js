const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const { validateToken, checkIfAuthorized }
    = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", userController.createUser)

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/getUsers/:userId", validateToken, checkIfAuthorized, userController.getUserData)

router.post("/createMessage/:userId/posts", userController.postMessage)

router.put("/updateUsers/:userId", validateToken, checkIfAuthorized, userController.updateUser)

router.delete('/deleteUsers/:userId', validateToken, checkIfAuthorized, userController.deleteUser)

module.exports = router;
