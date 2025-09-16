const createError = require("http-errors");


// 404 Not Found Handler
const notFoundHandler = (req,res,next) => {
    next(createError(404, "Your Requested Content Was Not Found!"))
};

// Default Error Handler
const errorHandler = (err,req,res,next) => {
    res.locals.error =
      process.env.NODE_ENV === "development" ? err : { message: err.message };
    res.status(err.status || 500); 
};

module.exports = {
    notFoundHandler,
    errorHandler
}