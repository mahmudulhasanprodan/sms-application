const express = require("express");
const router = express.Router();


// Internal Imports
const{getLogin} = require("../Controller/loginController")
const {addLoginValidation, loginValidHandler} = require("../Middleware/Users/LoginValidation")

// Login Page

router.post("/", getLogin)


module.exports = router;