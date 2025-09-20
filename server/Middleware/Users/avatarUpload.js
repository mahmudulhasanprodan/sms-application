// Internal Imports
const uploader = require("../../Utils/singleUpload");

function avatarUpload(req,res,next) {
  const upload = uploader(
    "Avatar",
    ["image/png", "image/jpg", "image/jpeg"],
    1000000,
    "Only jpg,png or jpeg format allowed!"
  );
  // call the midleware function
  upload.any()(req, res, (err) => {
    console.log(err)
    if (err) {
      res.status(500).json({
        error: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}


module.exports = {
  avatarUpload ,
}


