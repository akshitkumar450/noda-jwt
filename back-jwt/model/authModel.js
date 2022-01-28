const mongoose = require("mongoose");
const validator = require("validator");

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "minimun of 6 length is required"],
  },
});

// run before doc saved to db run only .save() /.create()
authSchema.pre("save", function (next) {
  console.log(this, "user about to be created");
  next();
});

// run after doc saved to db
authSchema.post("save", function (doc, next) {
  console.log("new user created", doc);
  next();
});

const Auth = mongoose.model("auth", authSchema);

module.exports = Auth;
