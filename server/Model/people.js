const mongoose = require("mongoose");


const PeopleSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Password: {
    type: Number,
    required: true,
  },
  ConfirmPassword: {
    type: Number,
    required: true,
  },
  Avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});


const People = mongoose.model("People", PeopleSchema);

module.exports = People;