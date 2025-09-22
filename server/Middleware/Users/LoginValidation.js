//External Imports
const { check,validationResult } = require('express-validator');


//Add user Validator
const addLoginValidation = [
      check("Email")
      .isLength({min: 1})
      .withMessage("User and Password is not valid"),

      check("Password")
      .isLength({min: 1})
      .withMessage("Password is not valid")
   
];

const loginValidHandler = (req,res,next) => {
     const errors = validationResult(req.body);
     const mappedError = errors.mapped();
     if(Object.keys(mappedError).length === 0){
        next();
     }else{
          // response
        res.status(500).json({
            errors: mappedError,
        })
     }
};



module.exports = {
  addLoginValidation,
  loginValidHandler
}