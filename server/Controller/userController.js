// External imports
const bcrypt = require("bcrypt");

// Internal Imports
const People = require("../Model/people");



async function getUsers(req,res){
    let newuser;
    const hashPassword = bcrypt.hash(req.body.Password, 5);
  if(req.files && req.files.length > 0){
     newuser = new People({
        ...req.body,
        Avatar: req.files.filename,
        Password : hashPassword
     })
  }else{
    newuser = new People({
        Password : hashPassword
    })
  };

// save user and send error
try {
    const result = await newuser.save();
    res.status(200).json({
       message : 'Data Succesfully Save'
    });
} catch (err) {
    res.status(500).json({
        errors : {
            common: {
                msg: "Unknown error Occured!"
            }
        }
    }) 
}
    
};


module.exports = {
    getUsers
}