
const multer = require("multer");
const path = require("path");
const createError = require('http-errors');



function uploader(
    sub_folder,
    file_format,
    file_size,
    error_message
) {
    
    // Upload Folder Selection
const UPLOAD_FOLDER = `${__dirname}/server/Public/Upload/${sub_folder}`;



// Define the storage
const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, UPLOAD_FOLDER)
    },
    filename : (req,file,cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                        .replace(fileExt,"")
                        .toLowerCase()
                        .split(" -")
                        .join("-") + "-" + Date.now()
                        console.log(fileName)
        cb(null, fileName + fileExt)                
    }
})

// Prepare the final multer upload Object

const upload = multer({
  storage: storage,
  limits: {
    fileSize: file_size,
  },
  fileFilter: (req, file, cb) => {
    if (file_format.includes(file.mimetype)) {
        cb(null, true)
    }else {
        cb(createError(error_message));
    }
  },
});
 
 return  upload;
 console.log(upload)
};


module.exports = uploader;







