const Auth = require("../model/authModel");

const handleError = (err) => {
  return {
    status: "fail",
    message: err.message,
  };
};

const getLogin = (req, res) => {
  res.send("login");
};
const postLogin = async (req, res) => {};

const getSignup = (req, res) => {
  res.send("Signup");
};

const postSignup = async (req, res) => {
  //   console.log(req.body);
  const { email, password } = req.body;
  try {
    const newUser = await Auth.create({ email, password });
    if (newUser) {
      res.status(200).json({
        status: "success",
        data: newUser,
      });
    } else {
      throw new Error("error in signup");
    }
  } catch (err) {
    console.log(err);
    const errors = handleError(err);
    res.status(400).json(errors);
  }
};

module.exports = {
  getLogin,
  postLogin,
  getSignup,
  postSignup,
};
