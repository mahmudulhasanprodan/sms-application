const express = require("express");
const router = express.Router();


// Internal Imports
const{getLogin} = require("../Controller/loginController")

// Login Page

router.get("/", getLogin)


module.exports = router;