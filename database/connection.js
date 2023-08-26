const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/learning-nodejs")
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  }
});

const user = mongoose.model("User", schema);
module.exports = user;
