const express = require("express");
const router = express.Router();
const {
  getLogin,
  postLogin,
  postSignup,
  getSignup,
  setCookie,
  getCookie,
} = require("../controllers/authControllers");

router.route("/login").get(getLogin).post(postLogin);
router.route("/signup").get(getSignup).post(postSignup);
router.route("/set").get(setCookie);
router.route("/read").get(getCookie);

// router.get("/login", getLogin);
// router.post("/login", postLogin);
// router.get("/signup", getSignup);
// router.post("/signup", postSignup);

module.exports = router;
