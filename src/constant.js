const path = require("path");

const correctGifts = [
  path.join(__dirname, "..", "public", "img", "correct", "bingo.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "thatiscorrect.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "true.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "yes.gif"),
];

const incorrectGifts = [
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect.gif"),
  path.join(
    __dirname,
    "..",
    "public",
    "img",
    "incorrect",
    "incorrect-third.gif"
  ),
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect2.gif"),
];

module.exports = { correctGifts, incorrectGifts };
