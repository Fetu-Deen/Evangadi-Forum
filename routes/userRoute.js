const express = require("express");
const router = express.Router();

//Authentication middleware
const authMiddleWare = require("../middleware/authMiddleware");

//user controller
const { register, login, checkUser } = require("../controller/userController");

//Register route
router.post("/register", register);

//Login user
router.post("/login", login);

//Check user:checking auth
router.get("/check", authMiddleWare, checkUser);

//Put the above middleware in every routes for protection

module.exports = router;
