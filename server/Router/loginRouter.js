const express = require("express");
const router = express.Router();


// Internal Imports
const{getLogin} = require("../Controller/loginController")

// Login Page

router.post("/", getLogin)


module.exports = router;