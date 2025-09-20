const express = require("express");
const router = express.Router();


// Internal Imports
const{getUsers} = require("../Controller/userController");
const {avatarUpload} =require("../Middleware/Users/avatarUpload");
const {addUserValidation,adduserValidatorHanler} = require("../Middleware/Users/peopleValidator");


// user Page

router.post("/",avatarUpload,addUserValidation,adduserValidatorHanler,getUsers);


module.exports = router;