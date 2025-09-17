//External Imports
const { check,validationResult } = require('express-validator');
const createError = require('http-errors');
const path = require("path");
const {unlink} = require("fs");


//Internal Imports
const People = require("../../Model/people");

//Add user Validator
const addUserValidation = [
    check("Name")
    .isLength({max : 1})
    .withMessage("Name is Required!")
    .isAlpha("en-US", {ignore : " -"})
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
    
    check("Email").isEmail().withMessage("Email is required").trim()
    .custom(async(value) => {
        try {
            const user = new People.fineOne({email : value});
            if(user){
                throw createError("Email already in use!")
            }
        } catch (err) {
            throw createError(err.message);
        }
    }),
    check("Phone").isMobilePhone("bn-BD",{strictMode : true}).withMessage("Phone number is required")
    .custom(async(value) => {
        try {
            const user = new People.fineOne({phone : value});
            if(user){
                throw createError("phone already in use!")
            }
        } catch (err) {
            throw createError(err.message);
        }
    }),

    check("Password")
    .isStrongPassword()
    .withMessage("Password must be 8 character upper,lower,number and symol"),

];

const adduserValidatorHanler = (req,res,next) => {
      const Error = validationResult(req);
      const mappedError = Error.mapped();
      if(Object.keys(mappedError).length === 0){
        next()
      }else{
        //removed uploaded file
        if(req.files.length > 0){
         const {filename} = req.files;
         unlink(
           path.join(`${__dirname}/../../../Public/Upload/Avatar/${filename}`),
           (err) => console.kog(err)
         );
        }

        // response
        res.status(500).json({
            errors: mappedError,
        })
      }
};

module.exports = {
  addUserValidation,
  adduserValidatorHanler
}