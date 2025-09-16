const express = require("express");
const router = express.Router();


// Internal Imports
const{getUsers} = require("../Controller/userController")

// Login Page

router.post("/", getUsers)


module.exports = router;