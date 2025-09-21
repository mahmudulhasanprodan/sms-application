// External Imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

//Internal Imports
const People = require("../Model/people");

async function getLogin(req,res,next){
    try {
            // Find The User
   const user = await People.findOne({
        $or :[{phone: req.body.Phone},{Email:req.body.Email}]
   });
   // check Valid Password
   if(user && user._id){
       const isvalidPassword = await bcrypt.compare(
            req.body.Password,
            user.Password,
       )
    if(isvalidPassword){
        // prepare the user object to token genarate
        const userObject = {
            Name : user.Name,
            Email : user.Email,
            Phone: user.Phone,
            role: "user"
        }

        // jwt token genarate
        const token = jwt.sign(userObject,process.env.JWT_SECRET,{
            expiresIn : process.env.JWT_EXPIRY
        });

        // set cookie
        res.cookie(process.env.COOKIE_NAME,token,{
            maxAge : process.env.JWT_EXPIRY,
            httpOnly: true,
            signed: true
        });
    }else{
        throw createError("Login Failed! Please try again!");
    }
   }else{
        throw createError("Login Failed! Please try again!");
   }
    } catch (err) {
        res.status(500).json({
            error:{
                common: {
                    msg: err.message
                }
            }
        })
    }
};


module.exports = {
    getLogin
}



