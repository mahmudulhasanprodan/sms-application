const express = require("express");
const router = express.Router();


// Internal Imports
const{getInbox} = require("../Controller/inboxController")

// Login Page

router.post("/", getInbox)


module.exports = router;