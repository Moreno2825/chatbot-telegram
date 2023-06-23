const path = require("path");

const correctGifts = [
  path.join(__dirname, "..", "public", "img", "correct", "bingo.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "thatiscorrect.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "true.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "yes.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "this-is-my-secret.gif"),
];

const incorrectGifts = [
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect-third.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect-second.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "im-groot.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "fail.gif"),
];

module.exports = { correctGifts, incorrectGifts };
