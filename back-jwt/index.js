const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

// for using cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const dotenv = require("dotenv");
// path to env file
dotenv.config({
  path: "./config.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // MONGODB database Connection
const DB = process.env.MONGODB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.MONGODB_PASSWORD
);
mongoose.connect(DB).then((db) => {
  // console.log("db connection success", db.connection);
  console.log("db connection success");
});

// const Auth = require("./model/authModel");

// const user = new Auth({
//   email: "acb@text.com",
//   password: "213345sdf",
// });

// user
//   .save()
//   .then(() => console.log("user created"))
//   .catch((err) => console.log(err.message));

const authRouter = require("./routes/authRoutes");
app.use("/", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("app running");
});
