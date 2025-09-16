// External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");


// Internal Imports
const {notFoundHandler,errorHandler} = require("./Common/errorHandler");
const loginRouter = require("./Router/loginRouter");
const usersRouter = require("./Router/usersRouter");
const inboxRouter = require("./Router/inboxRouter");

const app = express();
dotenv.config();

// Connection Database
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Database Connection Successfull")
})
.catch((err) => console.log(err));

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Cookier Parser
app.use(cookieParser(process.env.COOKIE_SECRET));


// Route Handler
app.use("/",loginRouter);
app.use("/users",usersRouter);
app.use("/inbox", inboxRouter);


// 404 Not found Error Handler
app.use(notFoundHandler)

// Express Default handler
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Listening to Port ${process.env.PORT}`)
});
